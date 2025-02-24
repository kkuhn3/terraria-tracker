function launch() {
	let url = "../?"
	if (PNAME.value && APORT.value) {
		url = url + "&name=" + PNAME.value;
		url = url + "&port=" + APORT.value;
	}
	if (e.value) {
		url = url + "&e=" + e.value;
	}
	if (n.value) {
		url = url + "&n=" + n.value;
	}
	if (g.value) {
		url = url + "&g=" + g.value;
	}
	if (f.value) {
		url = url + "&f=" + f.value;
	}
	if (gfb.value) {
		url = url + "&gfb=" + gfb.value;
	}
	if (t.value) {
		url = url + "&t=" + t.value;
	}
	url = url.replace("?&", "?");
	if (url === "../?") {
		url = "../";
	}
	window.open(url, "_self");
}