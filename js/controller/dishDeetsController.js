var DishDeetsCtrl = function(view, model) {

	$(document).ready(function(){
		$("body").on("click", "#returntoselect", function() {
			$("#dishdeets").empty();
			$("#selectDishType").show();
		});			

		$("body").on("click", "#appenddish", function() {
			$("#selectDishType").show();
			model.addDishToMenu(view.dishID);
			$("#dishdeets").empty();
		});
	});
};
