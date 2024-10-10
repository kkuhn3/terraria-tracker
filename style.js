function loadDivs() {
	let locations = document.getElementsByClassName("location");
	for (let location of locations) {
		location.innerHTML = '<img src="images/achievements/' + location.id + '.png">';
		location.onmouseenter = function() {
			details.innerHTML = '<img src="images/achievements/' + location.id + '.png">';
			if (chievToName[location.id]) {
				details.innerHTML += '<div class="header">' + chievToName[location.id] + '</div>';
			}
			else {
				details.innerHTML += '<div class="header">' + location.id + '</div>';
			}
			details.innerHTML += '<div class="desc">' + chievToDesc[location.id] + '</div>';
		}
		location.onclick = function() {
			location.classList.toggle("checked");
			countChecks();
		}
	}

	let items = document.getElementsByClassName("item");
	for (let item of items) {
		item.onmouseenter = function() {
			itemdesc.innerHTML = item.id;
		}
		item.onmouseout = function() {
			itemdesc.innerHTML = '';
		}
		item.onclick = function() {
			item.classList.toggle("itemchecked");
			// updatelocations
			countChecks();
		}
		item.style.backgroundImage = 'URL("images/items/' + item.id + '.png")';
	}

	let settings = document.getElementsByClassName("setting");
	for (let setting of settings) {
		setting.onmouseenter = function() {
			itemdesc.innerHTML = settingToDisplay[setting.id];
		}
		setting.onmouseout = function() {
			itemdesc.innerHTML = '';
		}
	}
	countChecks();
}

function settingIterate(div, max) {
	let count = parseInt(div.classList[1].substring(1), 10);
	div.classList.remove(div.classList[1]);
	count = count + 1;
	if (count > max) {
		count = 0;
	}
	div.classList.add("_" + count);
}
function goalOnClick() {
	settingIterate(goal, 6);
	hideForGoal();
}
function hideForGoal() {
	let count = parseInt(div.classList[1].substring(1), 10);
}
function chievOnClick() {
	settingIterate(achievements, 3);
	hideForChiev();
}
function hideForChiev() {
	let count = parseInt(div.classList[1].substring(1), 10);
}

function countChecks() {
	let locations = document.getElementsByClassName("location");
	let total = 0;
	let checked = 0;
	let logical = 0;
	for (let location of locations) {
		if (!location.classList.contains("goalhidden") && !location.classList.contains("chievhidden")) {
			total = total + 1;
			if (location.classList.contains("checked")) {
				checked = checked + 1;
			}
			else if (location.classList.contains("logical")) {
				logical = logical + 1;
			}
		}
	}
	CHECK_CHECKED.innerHTML = checked;
	CHECK_LOGICAL.innerHTML = logical;
	CHECK_TOTAL.innerHTML = total;
}