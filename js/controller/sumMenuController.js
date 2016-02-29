var SumMenuCtrl = function(overallState, model) {
	var summenu = this;

	this.init = function() {
		$("#summenurow").show();
		$("#summenu").show();
	};

	this.hideMe = function() {
		$("#summenurow").hide();
		$("#summenu").hide();
	};

	$("#printRecipe").click(function() {
		overallState.initCtrl(summenu, overallState.fullPrepCtrl);
	});

	$("#backtoselect").click(function() {
		overallState.initCtrl(summenu, overallState.selectionCtrl);
	});
};