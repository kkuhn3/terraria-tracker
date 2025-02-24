let aport = false;
let pname = false;

// https://github.com/ArchipelagoMW/Archipelago/blob/main/worlds/terraria/Checks.py#L279
const offset = 8257536;

function connect() {
	if (!aport || !pname) {
		return;
	}
	socket = new WebSocket("wss://archipelago.gg:" + aport);

	socket.addEventListener('open', function (event) {
		socket.send(`[{
			"cmd" : "Connect",
			"password" : "",
			"game" : "Terraria",
			"name" : "` + pname + `",
			"tags" : ["Tracker"],
			"version" : {
				"major": 0,
				"minor": 5,
				"build": 0,
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
					updateLocations();
					countChecks();
				}
				else if (command.cmd === "ReceivedItems") {
					for (let item of command.items) {
						gotItem(item.item);
					}
					updateLocations();
					countChecks();
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
					countChecks();
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

function setSettingClass(div, className) {
	div.classList.remove("_0", "_1", "_2", "_3", "_4", "_5", "_6");
	if (className) {
		div.classList.add(className);
	}
}
function isIntLessThan(check, max) {
	let intValue = parseInt(check, 10);
	return Number.isInteger(intValue) && intValue <= max && intValue >= 0;
}
//Parse URL inputs
function parseSettings() {
	const urlSearch = new URLSearchParams(window.location.search);
	if (isIntLessThan(urlSearch.get("g"), 6)) {
		setSettingClass(goal, "_" + urlSearch.get("g"));
	}
	if (isIntLessThan(urlSearch.get("a"), 3)) {
		setSettingClass(achievements, "_" + urlSearch.get("a"));
	}

	if (urlSearch.get("name") && urlSearch.get("port")) {
		pname = urlSearch.get("name");
		aport = urlSearch.get("port");
	}
}