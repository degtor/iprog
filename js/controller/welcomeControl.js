var WelcomeCtrl = function(overallState, model) {
	var welcome = this;

	//Eventhantering - Triggar routingmetoden i overallstate
	//FROM blir controllern själv och TO blir selectionCtrl som är en sorts
	//Fulhackad övercontroller till selectdish och sidebar. Inte superbra men funkar...
	$("#join").click(function() {
		overallState.initCtrl(welcome, overallState.selectionCtrl);
	});

	//När overallstate ropar tillbaka på hideMe så tas #info bort
	this.hideMe = function() {
		$("#info").remove();
	};
};