var DishDeets = function (container, model) {
    var selDishDiv = container;
	
	$("#selectdish").delegate(".dish", "click", function (event) {
		var clickedElementId = event.currentTarget.id;
		var selectedDish = this.selectedDish = model.getDish(clickedElementId);  // This should later be retrieved from selectDish object.
	    var dishIngredients = selectedDish.ingredients;
	

    selDishDiv.append("<div class=\"col-md-6 dishdeet\">" + "<h3>" + selectedDish.name + "</h3>"
        + "<img src=\"images/" + selectedDish.image + "\"" + ">"
        + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>"
        + "<button id='backToSelectDish' type='button' class='btn btn-warning'>Back to select Dish</button>");

    selDishDiv.append("<div id='ingredientsTable' class='col-md-6 ingredients'>" + "<h3>Ingredients for 4 people</h3>" + "<hr />"
+ "<table id='dishIngredients' style='width:100%'>");

	

    for (i = 0; i < dishIngredients.length; i++) {
		 var tablezor = container.find("#dishIngredients");
         tablezor.append("<tr>"
             + "<td>" + dishIngredients[i].quantity + "</td>"
             + "<td>" + dishIngredients[i].unit + "</td>"
             + "<td>" + dishIngredients[i].name + "</td>"
             + "<td>    SEK                         </td>"
             + "<td>" + dishIngredients[i].price + "</td>"
         + "</tr>");
    }

    tablezor.append("<tr><td colspan='5'><hr /></td></tr>"
        + "<tr><td><button id=" + clickedElementId + " type='button' class='btn btn-warning confirmbtn'>Confirm dish</button></td>"
        + "<td colspan='2'></td>"
        + "<td>SEK</td>" + "<td>" + model.getDishPrice(selectedDish) +"</td>" + "</tr>");
	});
};
