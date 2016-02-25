var DishDeetsCtrl = function(view, model, overallState, selectionControl) {
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
		var clickedElementId = event.currentTarget.id;
		var selDish = model.getDish(clickedElementId);
		model.addDishToMenu(selDish.id);
		overallState.initCtrl(dishDeet, selectionControl);
	});

	$("#dishdeets").delegate("#backToSelectDish", "click", function() {
		overallState.initCtrl(dishDeet, selectionControl);
	});

};