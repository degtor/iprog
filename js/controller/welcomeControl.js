var WelcomeCtrl = function(overallState, model) {
	var welcome = this;

	$("#join").click(function() {
		overallState.initCtrl(welcome, overallState.selectionCtrl);
	});

	this.hideMe = function() {
		$("#info").remove();
	};
};