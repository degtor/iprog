var WelcomeCtrl = function(overallState, selectionCtrl) {
	var welcome = this;

	$("#join").click(function() {
		overallState.initCtrl(welcome, selectionCtrl);
	});

	this.hideMe = function() {
		$("#info").remove();
	};
};