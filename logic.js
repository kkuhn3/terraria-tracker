function has(item) {
	const itemdiv = document.getElementById(item);
	if (!itemdiv) {
		return false;
	}
	return itemdiv.classList.contains("itemchecked");
}

function updateLocations() {
	let locations = document.getElementsByClassName("location");
	for (let location of locations) {
		location.classList.remove("logical");
		location.classList.remove("possible");
		const logic = locationLogic[location.id]();
		if (logic) {
			location.classList.add(logic);
		}
	}
}

function numNpcs() {
	// Free - Guide, Merchant, Zoologist, Angler, Stylist, Golfer, Arms Dealer
	// Available w/ Free - Nurse (Merchant), Demolitionist (Merchant), Dye Trader (4), Cat (Zoologist), Dog (Zoologist), Painter (8)
	let npcCount = 13;
	// Dryad
	if (has("Post-Eye of Cthulhu") || has("Post-Evil Boss") || has("Post-Skeletron")) {
		npcCount = npcCount + 1;
		// Tax Collector
		if (has("Hardmode")) {
			npcCount = npcCount + 1;
		}
	}
	// Tavernkeep
	if (has("Post-Evil Boss")) {
		npcCount = npcCount + 1;
	}
	// Goblin Tinkerer
	if (has("Post-Goblin Army")) {
		npcCount = npcCount + 1;
	}
	// Witch Doctor
	if (has("Post-Queen Bee")) {
		npcCount = npcCount + 1;
	}
	// Clothier
	if (has("Post-Skeletron")) {
		npcCount = npcCount + 1;
	}
	// Wizard
	if (has("Hardmode")) {
		npcCount = npcCount + 1;
	}
	// Bunny
	if (has("Hardmode")) {
		npcCount = npcCount + 1;
	}
	// Truffle
	if (has("Hardmode")) {
		npcCount = npcCount + 1;
	}
	// Pirate
	if (has("Post-Pirate Invasion")) {
		npcCount = npcCount + 1;
	}
	// Steampunker
	if (has("Post-The Twins") || has("Post-The Destroyer") || has("Post-Skeletron Prime")) {
		npcCount = npcCount + 1;
	}
	// Cyborg
	if (has("Post-Plantera")) {
		npcCount = npcCount + 1;
	}
	// Santa Claus
	if (has("Post-Skeletron") && has("Post-Plantera") && has("Hardmode") && has("Post-Frost Legion")) {
		npcCount = npcCount + 1;
	}
	// Party Girl
	if (npcCount >= 14) {
		npcCount = npcCount + 1;
	}
	// Princess
	if (npcCount >= 27) {
		npcCount = npcCount + 1;
	}
	return npcCount;
}

const locationLogic = {
	"Into Orbit": function() {
		return "logical";
	},
	"Eye on You": function() {
		return "logical";
	},
	"Head in the Clouds": function() {
		if (has("Hardmode")) {
			return "logical";
		}
		return "possible";
	},
	"Tin-Foil Hatter": function() {
		if (has("Hardmode") && has("Post-Golem")) {
			return "logical";
		}
	},
	"Champion of Terraria": function() {
		if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Sick Throw": function() {
		if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Infinity +1 Sword": function() {
		if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron") && has("Post-Plantera") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
			return "logical";
		}
	},
	"Bloodbath": function() {
		return "logical";
	},
	"Til Death...": function() {
		return "logical";
	},
	"Quiet Neighborhood": function() {
		return "logical";
	},
	"Don't Dread on Me": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Sword of the Hero": function() {
		if (has("Hardmode") && has("Post-Skeletron") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
			return "logical";
		}
	},
	"Kill the Sun": function() {
		if (has("Hardmode") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
			return "logical";
		}
		if (has("Post-Skeletron") && has("Post-Plantera")) {
			return "logical";
		}
	},
	"Mourning Wood": function() {
		if (has("Post-Skeletron") && has("Post-Plantera") && has("Hardmode")) {
			return "logical";
		}
	},
	"Pumpking": function() {
		if (has("Post-Skeletron") && has("Post-Plantera") && has("Hardmode")) {
			return "logical";
		}
	},
	"Baleful Harvest": function() {
		if (has("Post-Skeletron") && has("Post-Plantera") && has("Hardmode")) {
			return "logical";
		}
	},
	"Everscream": function() {
		if (has("Post-Skeletron") && has("Post-Plantera") && has("Hardmode")) {
			return "logical";
		}
	},
	"Santa-NK1": function() {
		if (has("Post-Skeletron") && has("Post-Plantera") && has("Hardmode")) {
			return "logical";
		}
	},
	"Ice Queen": function() {
		if (has("Post-Skeletron") && has("Post-Plantera") && has("Hardmode")) {
			return "logical";
		}
	},
	"Ice Scream": function() {
		if (has("Post-Skeletron") && has("Post-Plantera") && has("Hardmode")) {
			return "logical";
		}
	},
	"Do You Want to Slay a Snowman": function() {
		if (has("Post-Skeletron") && has("Post-Plantera") && has("Hardmode")) {
			return "logical";
		}
	},
	"An Eye For An Eye": function() {
		return "logical";
	},
	"Slayer of Worlds": function() {
		if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron") && has("Post-Plantera") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
			return "logical";
		}
	},
	"Lucky Break": function() {
		return "logical";
	},
	"Star Power": function() {
		return "logical";
	},
	"You Can Do It!": function() {
		return "logical";
	},
	"Heliophobia": function() {
		return "logical";
	},
	"Feeling Petty": function() {
		return "logical";
	},
	"A Rather Blustery Day": function() {
		return "logical";
	},
	"Pretty in Pink": function() {
		return "logical";
	},
	"Marathon Medalist": function() {
		return "logical";
	},
	"Jolly Jamboree": function() {
		if (numNpcs() >= 15) {
			return "logical";
		}
	},
	"Real Estate Agent": function() {
		if (numNpcs() >= 28) {
			return "logical";
		}
	},
	"Timber!!": function() {
		return "logical";
	},
	"Benched": function() {
		return "logical";
	},
	"Stop! Hammer Time!": function() {
		return "logical";
	},
	"Matching Attire": function() {
		return "logical";
	},
	"Fashion Statement": function() {
		return "logical";
	},
	"Ooo! Shiny!": function() {
		return "logical";
	},
	"No Hobo": function() {
		return "logical";
	},
	"Heavy Metal": function() {
		return "logical";
	},
	"The Frequent Flyer": function() {
		return "logical";
	},
	"Dye Hard": function() {
		return "logical";
	},
	"Slippery Shinobi": function() {
		return "logical";
	},
	"Sticky Situation": function() {
		return "logical";
	},
	"The Cavalry": function() {
		return "logical";
	},
	"Goblin Punter": function() {
		return "logical";
	},
	"Boots of the Hero": function() {
		if (has("Post-Goblin Army")) {
			return "logical";
		}
	},
	"Funkytown": function() {
		return "logical";
	},
	"It Can Talk!": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Old One's Army Tier 1": function() {
		if (has("Post-Evil Boss")) {
			return "logical";
		}
	},
	"Old One's Army Tier 2": function() {
		if (has("Post-Evil Boss")) {
			if (has("Hardmode") && (has("Post-The Twins") || has("Post-The Destroyer") || has("Post-Skeletron Prime"))) {
				return "logical";
			}
			if (has("Hardmode") && has("Post-Golem")) {
				return "logical";
			}
		}
	},
	"Hero of Etheria": function() {
		if (has("Post-Evil Boss") && has("Hardmode") && has("Post-Golem")) {
			return "logical";
		}
	},
	"Servant-in-Training": function() {
		return "logical";
	},
	"Good Little Slave": function() {
		return "logical";
	},
	"Trout Monkey": function() {
		return "logical";
	},
	"Fast and Fishious": function() {
		return "logical";
	},
	"Supreme Helper Minion!": function() {
		return "logical";
	},
	"Glorious Golden Pole": function() {
		return "logical";
	},
	"Walk the Plank": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Fish Out of Water": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Boned": function() {
		return "logical";
	},
	"Dungeon Heist": function() {
		if (has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Bona Fide": function() {
		if (has("Hardmode") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Robbing the Grave": function() {
		if (has("Post-Plantera") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Big Booty": function() {
		if (has("Hardmode") && has("Post-Plantera") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Rainbows and Unicorns": function() {
		if (has("Hardmode") && has("Post-Plantera") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Obsessive Devotion": function() {
		if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Star Destroyer": function() {
		if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Smashing, Poppet!": function() {
		return "logical";
	},
	"Leading Landlord": function() {
		return "logical";
	},
	"Completely Awesome": function() {
		return "logical";
	},
	"Evil Boss": function() {
		return "logical";
	},
	"Miner for Fire": function() {
		return "logical";
	},
	"Hot Reels!": function() {
		return "logical";
	},
	"Begone, Evil!": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Watch Your Step!": function() {
		return "logical";
	},
	"Throwing Lines": function() {
		return "logical";
	},
	"Torch God": function() {
		return "logical";
	},
	"Vehicular Manslaughter": function() {
		return "logical";
	},
	"Hey! Listen!": function() {
		return "logical";
	},
	"I Am Loot!": function() {
		return "logical";
	},
	"Heart Breaker": function() {
		return "logical";
	},
	"Hold on Tight!": function() {
		return "logical";
	},
	"Like a Boss": function() {
		return "logical";
	},
	"Jeepers Creepers": function() {
		return "logical";
	},
	"Prismancer": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Fae Flayer": function() {
		if (has("Hardmode") && has("Post-Plantera")) {
			return "logical";
		}
	},
	"Archaeologist": function() {
		return "logical";
	},
	"Where's My Honey": function() {
		return "logical";
	},
	"Sting Operation": function() {
		return "logical";
	},
	"Not the Bees!": function() {
		return "logical";
	},
	"Get a Life": function() {
		if (has("Hardmode") && (has("Post-The Twins") || has("Post-The Destroyer") || has("Post-Skeletron Prime"))) {
			return "logical";
		}
	},
	"Topped Off": function() {
		if (has("Hardmode") && (has("Post-The Twins") || has("Post-The Destroyer") || has("Post-Skeletron Prime"))) {
			return "logical";
		}
	},
	"Photosynthesis": function() {
		if (has("Hardmode") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"The Great Southern Plantkill": function() {
		if (has("Hardmode") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
			return "logical";
		}
	},
	"You and What Army": function() {
		if (has("Hardmode") && has("Post-Queen Bee") && has("Post-Plantera") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"It's Getting Hot in Here": function() {
		return "logical";
	},
	"Rock Bottom": function() {
		return "logical";
	},
	"Still Hungry": function() {
		return "logical";
	},
	"Gelatin World Tour": function() {
		if (has("Hardmode") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Ride The Worm": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Buckets of Bolts": function() {
		if (has("Hardmode") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Mecha Mayhem": function() {
		if (has("Hardmode") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Drax Attax": function() {
		if (has("Hardmode") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Deceiver of Fools": function() {
		return "logical";
	},
	"Dead Men Tell No Tales": function() {
		return "logical";
	},
	"Bulldozer": function() {
		return "logical";
	},
	"There are Some Who Call Him...": function() {
		return "logical";
	},
	"Extra Shiny!": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Just Desserts": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Ophthalmologist": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Temple Raider": function() {
		if (has("Hardmode") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
			return "logical";
		}
		if (has("Hardmode") && has("Post-Plantera")) {
			return "possible";
		}
	},
	"Lihzahrdian Idol": function() {
		if (has("Hardmode") && has("Post-Plantera") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
			return "logical";
		}
		if (has("Hardmode") && has("Post-Plantera")) {
			return "possible";
		}
	}
};