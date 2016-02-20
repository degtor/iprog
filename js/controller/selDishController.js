var SelDishCtrl = function(view, model) {

		$("#selectdish").delegate(".dish", "click", function (event) {
			var clickedElementId = event.currentTarget.id;
			var selDish = model.getDish(clickedElementId);
			console.log(selDish);
			console.log("lol");
		});
};
