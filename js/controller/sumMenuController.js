var SumMenuCtrl = function(overallState, view, model) {
	var summenu = this;

	this.init = function() {
		$("#summenu").show();
		$("#summenurow").show();
		view.drawView();
	};

	this.hideMe = function() {
		$("#summenu").empty();
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