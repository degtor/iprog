var SumMenuCtrl = function(overallState, model) {
	var summenu = this;

	this.init = function() {
		$("#summenu").show();
		$("#summenurow").show();
	};

	this.hideMe = function() {
		$("#summenu").hide();
		$("#summenurow").hide();
	};

	$("#printRecipe").click(function() {
		overallState.initCtrl(summenu, overallState.fullPrepCtrl);
	});

	$("#backtoselect").click(function() {
		overallState.initCtrl(summenu, overallState.selectionCtrl);
	});
};