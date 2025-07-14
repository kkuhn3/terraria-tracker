let ahost = "archipelago.gg";
let aport = false;
let aname = false;
let apass = "";

// https://github.com/ArchipelagoMW/Archipelago/blob/main/worlds/terraria/Checks.py#L279
const offset = 8257536;

function connect() {
	if (!aport || !aname) {
		return;
	}
	socket = new WebSocket("wss://" + ahost + ":" + aport);

	socket.addEventListener('open', function (event) {
		socket.send(`[{
			"cmd" : "Connect",
			"password" : "` + apass + `",
			"game" : "Terraria",
			"name" : "` + aname + `",
			"tags" : ["Tracker"],
			"version" : {
				"major": 0,
				"minor": 6,
				"build": 2,
				"class": "Version"
			},
			"items_handling" : 7,
			"uuid" : "a1c0aac5-01e5-4957-99fe-6ae9edeafa78"
		}]`);
	});

	let slot = -1;
	socket.addEventListener('message', function (event) {
		const message = JSON.parse(event.data);
		console.log(message);
		let commands = [];
		for (let command of message) {
			commands.push(command.cmd);
		}

		// seems to be an initial connect response
		if (commands.includes("Connected")) {
			for (let command of message) {
				if (command.cmd === "Connected") {
					// save slot for later
					slot = command.slot;
					// for each "checked_location"
					for (let location of command.checked_locations) {
						gotLocation(location);
					}
					settingsFromSlotData(command.slot_data);
					updateLocations();
				}
				else if (command.cmd === "ReceivedItems") {
					for (let item of command.items) {
						gotItem(item.item);
					}
					updateLocations();
				}
			}
		}
		// on the fly
		else if (commands.includes("PrintJSON")) {
			for (let command of message) {
				if (command.cmd === "PrintJSON" && command.type === "ItemSend") {
					//I checked the location
					if (command.item.player === slot) {
						gotLocation(command.item.location);
					}
					//I recieved the item
					if (command.receiving === slot) {
						gotItem(command.item.item);
					}
					updateLocations();
				}
			}
		}
	});
}

function gotItem(id) {
	let itemName = idToItem[id - offset];
	if (itemName) {
		document.getElementById(itemName).classList.add("itemchecked");
	}
}

function gotLocation(id) {
	let locationName = idToLocation[id - offset];
	if (locationName) {
		document.getElementById(locationName).classList.add("checked");
	}
}

function settingsFromSlotData(slotData) {
	setSettingClass(earlyAchievements, "_" + slotData.early_achievements);
	setSettingClass(normalAchievements, "_" + slotData.normal_achievements);
	setSettingClass(grindyAchievements, "_" + slotData.grindy_achievements);
	setSettingClass(fishingAchievements, "_" + slotData.fishing_achievements);
	setSettingClass(getfixedboiAchievements, "_" + slotData.getfixedboi);
	if (slotData.goal[0] === "Mechanical Bosses") {
		setSettingClass(goal, "_" + 0);
	}
	else if (slotData.goal[0] === "Plantera") {
		setSettingClass(goal, "_" + 1);
	}
	else if (slotData.goal[0] === "Golem") {
		setSettingClass(goal, "_" + 2);
	}
	else if (slotData.goal[0] === "Empress of Light") {
		setSettingClass(goal, "_" + 3);
	}
	else if (slotData.goal[0] === "Lunatic Cultist") {
		setSettingClass(goal, "_" + 4);
	}
	else if (slotData.goal[0] === "Moon Lord") {
		setSettingClass(goal, "_" + 5);
	}
	else if (slotData.goal[0] === "Zenith") {
		setSettingClass(goal, "_" + 6);
	}
	hidetomatch();
}
