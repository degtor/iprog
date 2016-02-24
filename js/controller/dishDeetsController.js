var DishDeetsCtrl = function(view, model) {

	$(document).ready(function(){
		$("body").on("click", "#returntoselect", function() {
			$("#dishdeets").empty();
			$("#selectDishType").show();
		});			

		$("body").on("click", "#appenddish", function() {
			$("#selectDishType").show();
			//Här lägger vi till dish i Model-arrayen.
			model.addDishToMenu(view.dishID);
			$("#dishdeets").empty();
		});
	});
};
