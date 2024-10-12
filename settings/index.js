function launch() {
	let url = "../?"
	if (PNAME.value && APORT.value) {
		url = url + "&name=" + PNAME.value;
		url = url + "&port=" + APORT.value;
	}
	url = url + "&g=" + G.value;
	url = url + "&a=" + A.value;
	url = url.replace("?&", "?");
	window.open(url, "_self");
}