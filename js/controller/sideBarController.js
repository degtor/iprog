var SideCtrl = function(overallState, view, model) {
	var side = this;

	$("#sidebar").delegate("#confirmdinner", "click", function (event) {
		overallState.initCtrl(side, overallState.sumMenuCtrl);
	});

	this.hideMe = function () {
		$("#sidebar").hide();
		$("#selectDishType").hide();
		$("#dishdeets").hide();
	};

	view.displayedGuests.change(function() {
		var selectedValue = $("#guests option:selected").val();
		model.setNumberOfGuests(selectedValue);
	});

};
	