var DishDeetsCtrl = function(overallState, dishDitt, model) {
	var dishDeet = this;
	this.init = function() {
		$("#dishdeets").show();
	};

	this.hideMe = function() {
		$("#dishdeets").hide();
		$(".dishdeet").remove();
		$(".ingredients").remove();
	};

	$("#dishdeets").delegate(".confirmbtn", "click", function(event) {
		console.log(dishDitt.object);
		model.addDishToMenu(dishDitt.object);
		overallState.initCtrl(dishDeet, overallState.selectionCtrl);
		$("#selectionheader").show();
	});

	$("#dishdeets").delegate("#backToSelectDish", "click", function() {
		overallState.initCtrl(dishDeet, overallState.selectionCtrl);
		$("#selectionheader").show();
	});

};