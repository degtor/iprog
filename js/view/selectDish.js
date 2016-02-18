var SelectDish = function (container, model) {
	var dishesDiv = container;
	availableStarters = model.getAllDishes("starter");
	availableMains = model.getAllDishes("main dish");

	for (i=0; i < availableStarters.length; i++) {
		dishesDiv.append("<div class='col-md-3 dish'>" + "<h4>" + availableStarters[i].name + "</h4>" + "<img src=\"images/" + availableStarters[i].image + "\"" + ">" + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>" + "</div>");
	}

	for (i=0; i < availableMains.length; i++) {
		dishesDiv.append("<div class='col-md-3 dish'>" + "<h4>" + availableMains[i].name + "</h4>" + "<img src=\"images/" + availableMains[i].image + "\"" + ">" + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>" + "</div>");
	}

};
