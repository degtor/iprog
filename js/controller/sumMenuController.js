var SumMenuCtrl = function(overallState, selectionCtrl, fullPrepCtrl) {
	var summenu = this;

	this.init = function() {
		$("#summenu").show();
	};

	this.hideMe = function() {
		$("#summenu").hide();
		$("#summenurow").hide();
	};

	$("#printRecipe").click(function() {
		overallState.initCtrl(summenu, fullPrepCtrl);
	});

	$("#backtoselect").click(function() {
		overallState.initCtrl(summenu, selectionCtrl);
	})
};