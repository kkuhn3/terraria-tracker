function loadDivs() {
	let locations = document.getElementsByClassName("location");
	for (let location of locations) {
		location.style.backgroundImage = 'URL("./images/achievements/' + location.id + '.png")';
		location.onmouseenter = function() {
			details.innerHTML = '<img src="./images/achievements/' + location.id + '.png">';
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
			if (location.classList.contains("event")) {
				updateLocations();
			}
			else {
				countChecks();
			}
		}
	}

	let items = document.getElementsByClassName("item");
	for (let item of items) {
		item.onmouseenter = function() {
			details.innerHTML = '&nbsp;' + item.id;
		}
		item.onmouseout = function() {
			details.innerHTML = '&nbsp;';
		}
		item.onclick = function() {
			item.classList.toggle("itemchecked");
			updateLocations();
		}
		const imageStr = item.id.replace("Post-", "");
		item.style.backgroundImage = 'URL("./images/items/' + imageStr + '.png")';
	}

	let settings = document.getElementsByClassName("setting");
	for (let setting of settings) {
		setting.onmouseenter = function() {
			details.innerHTML = '&nbsp;' + settingToDisplay[setting.id];
		}
		setting.onmouseout = function() {
			details.innerHTML = '';
		}
	}
}
