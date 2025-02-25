function settingonclick(setting, max) {
	let count = countFromSetting(setting);
	setting.classList.remove(setting.classList[1]);
	count = count + 1;
	if (count > max) {
		count = 0;
	}
	setting.classList.add("_" + count);
	hidetomatch();
}

function hidetomatch() {
	for (let location of document.getElementsByClassName("location")) {
		let ishidden = false;
		if (!countFromSetting(earlyAchievements) && early.includes(location.id)) {
			ishidden = true;
		}
		else if (!countFromSetting(normalAchievements) && !early.includes(location.id) && !fishing.includes(location.id) && !grindy.includes(location.id) && !required.includes(location.id)) {
			ishidden = true;
		}
		else if (!countFromSetting(grindyAchievements) && grindy.includes(location.id)) {
			ishidden = true;
		}
		else if (!countFromSetting(fishingAchievements) && fishing.includes(location.id)) {
			ishidden = true;
		}
		else if (countFromSetting(getfixedboiAchievements) && getfixedboiExcluded.includes(location.id)) {
			ishidden = true;
		}
		else {
			for (let i = countFromSetting(goal); i < 7; i++) {
				if (postBoss[i].includes(location.id)) {
					ishidden = true;
				}
			}
		}
		location.parentNode.classList.remove("hidden");
		if (ishidden) {
			location.parentNode.classList.add("hidden");
		}
	}
	managefirstlast();
	countChecks();
	scaleLocs();
}

function countChecks() {
	let checked = 0;
	let logical = 0;
	let total = 0;
	for (let location of document.getElementsByClassName("location")) {
		if (!location.parentNode.classList.contains("hidden")) {
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

function managefirstlast() {
	for (let region of document.getElementsByClassName("region")) {
		let first = null;
		let last = null;
		for (let wrapper of region.childNodes) {
			if (wrapper.nodeName == "DIV" && !wrapper.classList.contains("hidden")) {
				if (first == null) {
					first = wrapper;
				}
				last = wrapper;
				wrapper.classList.remove("first", "middle", "last", "only");
				wrapper.classList.add("middle");
			}
		}
		if (first) {
			first.classList.remove("middle");
			if (first === last) {
				first.classList.add("only");
			}
			else {
				first.classList.add("first");
				last.classList.remove("middle");
				last.classList.add("last");
			}
		}
	}
}

function scaleLocs() {
	for (let location of document.getElementsByClassName("location")) {
		// 228 -> 150, 81 -> 46
		if (location.classList.contains("event")) { 
			location.style.width = Math.min(98, Math.max(52, Math.floor(.675 * Math.sqrt(window.innerWidth * window.innerHeight * .9 / CHECK_TOTAL.innerHTML) - 5)));
			location.style.height = Math.min(98, Math.max(52, Math.floor(.675 * Math.sqrt(window.innerWidth * window.innerHeight * .9 / CHECK_TOTAL.innerHTML) - 5)));
		}
		else {
			location.style.width = Math.min(92, Math.max(46, Math.floor(.675 * Math.sqrt(window.innerWidth * window.innerHeight * .9 / CHECK_TOTAL.innerHTML) - 11)));
			location.style.height =Math.min(92,  Math.max(46, Math.floor(.675 * Math.sqrt(window.innerWidth * window.innerHeight * .9 / CHECK_TOTAL.innerHTML) - 11)));
		}
	}
}

function countFromSetting(setting) {
	return parseInt(setting.classList[1].substring(1), 10);
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
	if (isIntLessThan(urlSearch.get("e"), 1)) {
		setSettingClass(earlyAchievements, "_" + urlSearch.get("e"));
	}
	if (isIntLessThan(urlSearch.get("n"), 1)) {
		setSettingClass(normalAchievements, "_" + urlSearch.get("n"));
	}
	if (isIntLessThan(urlSearch.get("g"), 1)) {
		setSettingClass(grindyAchievements, "_" + urlSearch.get("g"));
	}
	if (isIntLessThan(urlSearch.get("f"), 1)) {
		setSettingClass(fishingAchievements, "_" + urlSearch.get("f"));
	}
	if (isIntLessThan(urlSearch.get("gfb"), 1)) {
		setSettingClass(getfixedboiAchievements, "_" + urlSearch.get("gfb"));
	}
	if (isIntLessThan(urlSearch.get("t"), 6)) {
		setSettingClass(goal, "_" + urlSearch.get("t"));
	}

	if (urlSearch.get("name") && urlSearch.get("port")) {
		pname = urlSearch.get("name");
		aport = urlSearch.get("port");
	}
}