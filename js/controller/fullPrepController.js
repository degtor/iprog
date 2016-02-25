var FullPrepCtrl = function(overallState, selectionCtrl) {
	var prep = this;

	this.init = function() {
		$("#fullprepcontainer").show();
	};

	this.hideMe = function() {
		$("#fullprepcontainer").hide();
	};

	$("#backtosum").click(function() {
		overallState.initCtrl(prep, selectionCtrl);
	});
};