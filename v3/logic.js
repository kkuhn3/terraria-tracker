function has(item) {
	const itemdiv = document.getElementById(item);
	if (!itemdiv) {
		console.log("Unknown item div: " + item);
		return false;
	}
	return (itemdiv.classList.contains("itemchecked") || itemdiv.classList.contains("checked"));
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
	countChecks();
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
	"Dye Hard": function() {
		return "logical";
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
	"Unusual Survival Strategies": function() {
		return "logical";
	},
	"Heliophobia": function() {
		return "logical";
	},
	"Archaeologist": function() {
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
	"Into Orbit": function() {
		return "logical";
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
	"Glorious Golden Pole": function() {
		return "logical";
	},
	"Fast and Fishious": function() {
		return "logical";
	},
	"Supreme Helper Minion!": function() {
		return "logical";
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
	"The Frequent Flyer": function() {
		return "logical";
	},
	"Feast of Midas": function() {
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
	"Funkytown": function() {
		return "logical";
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
	"Jolly Jamboree": function() {
		if (numNpcs() >= 15) {
			return "logical";
		}
	},
	"A Shimmer In The Dark": function() {
		return "logical";
	},
	"It's Getting Hot in Here": function() {
		return "logical";
	},
	"Rock Bottom": function() {
		return "logical";
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
	"Slippery Shinobi": function() {
		return "logical";
	},
	"Sticky Situation": function() {
		return "logical";
	},
	"The Cavalry": function() {
		return "logical";
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
	"Eye on You": function() {
		return "logical";
	},
	"And Good Riddance!": function() {
		if (has("Post-Eye of Cthulhu") || has("Post-Evil Boss") || has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Evil Boss": function() {
		return "logical";
	},
	"Old One's Army Tier 1": function() {
		if (has("Post-Evil Boss")) {
			return "logical";
		}
	},
	"Miner for Fire": function() {
		if (has("Evil Boss") || has("Hardmode")) {
			return "logical";
		}
		return "possible";
	},
	"Hot Reels!": function() {
		if (has("Evil Boss") || has("Hardmode")) {
			return "logical";
		}
		return "possible";
	},
	"Goblin Punter": function() {
		return "logical";
	},
	"Boots of the Hero": function() {
		if (has("Post-Goblin Army")) {
			return "logical";
		}
	},
	"Where's My Honey": function() {
		return "logical";
	},
	"Sting Operation": function() {
		return "logical";
	},
	"Not the Bees!": function() {
		if (has("Sting Operation")) {
			return "logical";
		}
		return "possible";
	},
	"Boned": function() {
		return "logical";
	},
	"Dungeon Heist": function() {
		if (has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Black Mirror": function() {
		if (has("Post-Skeletron") && has("Post-Goblin Army")) {
			return "logical";
		}
	},
	"An Eye For An Eye": function() {
		return "logical";
	},
	"Still Hungry": function() {
		return "logical";
	},
	"Begone, Evil!": function() {
		if (has("Hardmode")) {
			if (has("Still Hungry")) {
				return "logical";
			}
			// Mechs
			if (has("Hardmode") && has("Post-Skeletron")) {
				if (has("Ophthalmologist") && has("Ride The Worm") && has("Bona Fide")) {
					return "logical";
				}
			}
			// Plantera
			if (has("Hardmode") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
				if (has("The Great Southern Plantkill")) {
					return "logical";
				}
			}
			// Golem
			if (has("Hardmode") && has("Post-Plantera")) {
				if (has("Post-Skeletron") || has("The Great Southern Plantkill")) {
					if (has("Lihzahrdian Idol")) {
						return "logical";
					}
				}
			}
			// Moonlord
			if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron")) {
				if (has("Champion of Terraria")) {
					return "logical";
				}
			}
			return "possible";
		}
	},
	"Extra Shiny!": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Ankhumulation Complete": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Gelatin World Tour": function() {
		if (has("Post-Skeletron") && has("Hardmode")) {
			if (has("Slippery Shinobi")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Head in the Clouds": function() {
		if (has("Hardmode")) {
			return "logical";
		}
		return "possible";
	},
	"Don't Dread on Me": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"It Can Talk!": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Walk the Plank": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Just Desserts": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"The Great Slime Mitosis": function() {
		if (has("Slippery Shinobi") && numNpcs() >= 15 && has("Post-Skeletron")) {
			if (has("Just Desserts")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Ophthalmologist": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Ride The Worm": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Bona Fide": function() {
		if (has("Hardmode") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Prismancer": function() {
		if (has("Hardmode")) {
			if (has("Ophthalmologist")) {
				return "logical";
			}
			return "possible";
		}
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
	"Buckets of Bolts": function() {
		if (has("Hardmode") && has("Post-Skeletron")) {
			if (has("Ophthalmologist") && has("Ride The Worm") && has("Bona Fide")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Mecha Mayhem": function() {
		if (has("Hardmode") && has("Post-Skeletron")) {
			return "logical";
		}
	},
	"Drax Attax": function() {
		if (has("Hardmode") && has("Post-Skeletron")) {
			if (has("Ophthalmologist") && has("Ride The Worm") && has("Bona Fide")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Photosynthesis": function() {
		let best = null;
		// Drax
		if (has("Hardmode") && has("Post-Skeletron")) {
			if (has("Ophthalmologist") && has("Ride The Worm") && has("Bona Fide")) {
				return "logical";
			}
			best = "possible";
		}
		// Golem
		if (has("Hardmode") && has("Post-Plantera")) {
			if (has("Post-Skeletron") || has("The Great Southern Plantkill")) {
				if (has("Lihzahrdian Idol")) {
					return "logical";
				}
			}
			best = "possible";
		}
		// Moonlord
		if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron")) {
			if (has("Champion of Terraria")) {
				return "logical";
			}
			best = "possible";
		}
		return best;
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
	"To Infinity... and Beyond!": function() {
		if (has("Hardmode") && has("Post-Plantera")) {
			return "logical";
		}
	},
	"Real Estate Agent": function() {
		if (numNpcs() >= 28) {
			return "logical";
		}
	},
	"Robbing the Grave": function() {
		if (has("Post-Skeletron") && has("Hardmode") && has("Post-Plantera")) {
			return "logical";
		}
	},
	"Big Booty": function() {
		if (has("Post-Skeletron") && has("Hardmode") && has("Post-Plantera")) {
			return "logical";
		}
	},
	"Rainbows and Unicorns": function() {
		if (has("Post-Skeletron") && has("Hardmode") && has("Post-Plantera")) {
			return "logical";
		}
	},
	"Temple Raider": function() {
		if (has("The Great Southern Plantkill")) {
			return "logical";
		}
		if (has("Hardmode") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
			return "possible";
		}
	},
	"Sword of the Hero": function() {
		if (has("Hardmode") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime") && has("Post-Plantera")) {
			if (has("Ophthalmologist") && has("Ride The Worm") && has("Bona Fide")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Kill the Sun": function() {
		if (has("Hardmode")) {
			// Natural spawn
			if (has("Post-The Twins") || has("Post-The Destroyer") || has("Post-Skeletron Prime")) {
				return "logical";
			}
			// Summon Item
			// Plantera + Actuator
			if (has("Post-Plantera")) {
				if (has("Post-Skeletron")) {
					return "logical";
				}
			}
		}
	},
	"Lihzahrdian Idol": function() {
		if (has("Hardmode") && has("Post-Plantera")) {
			// Actuator
			if (has("Post-Skeletron")) {
				return "logical";
			}
			// Defeating Plantera
			if (has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
				if (has("The Great Southern Plantkill")) {
					return "logical";
				}
				return "possible";
			}
		}
	},
	"Hero of Etheria": function() {
		if (has("Post-Evil Boss") && has("Hardmode") && has("Post-Golem")) {
			return "logical";
		}
	},
	"Tin-Foil Hatter": function() {
		if (has("Hardmode") && has("Post-Golem")) {
			return "logical";
		}
	},
	"Fish Out of Water": function() {
		if (has("Hardmode")) {
			return "logical";
		}
	},
	"Mourning Wood": function() {
		if (has("Post-Skeletron") && has("Hardmode") && has("Post-Plantera")) {
			if (has("Ophthalmologist") || has("Ride The Worm") || has("Bona Fide")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Pumpking": function() {
		if (has("Post-Skeletron") && has("Hardmode") && has("Post-Plantera")) {
			if (has("Ophthalmologist") || has("Ride The Worm") || has("Bona Fide")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Baleful Harvest": function() {
		if (has("Post-Skeletron") && has("Hardmode") && has("Post-Plantera")) {
			if (has("Ophthalmologist") || has("Ride The Worm") || has("Bona Fide")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Everscream": function() {
		if (has("Post-Skeletron") && has("Hardmode") && has("Post-Plantera")) {
			if (has("Bona Fide")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Santa-NK1": function() {
		if (has("Post-Skeletron") && has("Hardmode") && has("Post-Plantera")) {
			if (has("Bona Fide")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Ice Queen": function() {
		if (has("Post-Skeletron") && has("Hardmode") && has("Post-Plantera")) {
			if (has("Bona Fide")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Ice Scream": function() {
		if (has("Post-Skeletron") && has("Hardmode") && has("Post-Plantera")) {
			if (has("Bona Fide")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Do You Want to Slay a Snowman": function() {
		if (has("Post-Frost Legion")) {
			return "logical";
		}
	},
	"Fae Flayer": function() {
		if (has("Hardmode") && has("Post-Plantera")) {
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
			if (has("Obsessive Devotion")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Champion of Terraria": function() {
		if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron")) {
			if (has("Obsessive Devotion")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Slayer of Worlds": function() {
		if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron") && has("Post-Plantera") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
			if (has("Slippery Shinobi") && has("Eye on You") && has("Evil Boss") && has("Sting Operation") && has("Boned") && has("An Eye For An Eye") && has("Still Hungry") && has("Just Desserts") && has("Ophthalmologist") && has("Ride The Worm") && has("Bona Fide") && has("The Great Southern Plantkill") && has("Lihzahrdian Idol") && has("Fish Out of Water") && has("Fae Flayer") && has("Obsessive Devotion") && has("Champion of Terraria")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Sick Throw": function() {
		if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron")) {
			if (has("Champion of Terraria")) {
				return "logical";
			}
			return "possible";
		}
	},
	"Infinity +1 Sword": function() {
		if (has("Hardmode") && has("Post-Golem") && has("Post-Skeletron") && has("Post-Plantera") && has("Post-The Twins") && has("Post-The Destroyer") && has("Post-Skeletron Prime")) {
			if (has("Ophthalmologist") && has("Ride The Worm") && has("Bona Fide") && has("Champion of Terraria") && has("Pumpking") && has("Tin-Foil Hatter") && has("The Great Southern Plantkill") && has("Sting Operation")) {
				return "logical";
			}
			return "possible";
		}
	}
};