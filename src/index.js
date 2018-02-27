function renderAccepted() {
	const accepted = require("./accepted");
	document.getElementById("accepted").innerHTML = accepted.value;
}

function renderUnaccepted() {
	const unaccepted = require("./unaccepted");
	document.getElementById("unaccepted").innerHTML = unaccepted.value;
}

if (module.hot) {
	module.hot.accept("./accepted", renderAccepted);
}
renderAccepted();
renderUnaccepted();
