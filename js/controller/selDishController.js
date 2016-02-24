var SelDishCtrl = function(view, model) {

 		$("#selectdish").delegate(".dish", "click", function (event) {
            $("#selectDishType").hide();
            $("#dishdeets").show();
			var clickedElementId = event.currentTarget.id;
			var selDish = model.getDish(clickedElementId);
            model.addDishToMenu(selDish.id);
            console.log(model.menu);
		});
 };
