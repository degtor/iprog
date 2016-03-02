var SelectDish = function (container, model) {
	var dishesDiv = container;
	model.addObserver(this);

	this.update = function (allDishesByType){
		console.log("AllDishesByType BELOW");
			console.log(allDishesByType);
		if (allDishesByType === undefined) {
			console.log("lol undefined");
		} else if (allDishesByType.length > 3) {
			this.renderCourses(allDishesByType);
		}
		else {
			console.log("ignored this update in selectDish");
		}

	};

	// Activated from selDishController
	this.renderCourses = function (availableCourses) {
		$(".dish").remove();
		for (i = 0; i < availableCourses.length; i++) {
			dishesDiv.append("<div" + " id=" + "'" + availableCourses[i].RecipeID + "'" + "class='col-md-3 dish'>"
				+ "<h4>" + availableCourses[i].Title + "</h4>"
				+ "<img src=\"" + availableCourses[i].ImageURL + "\"" + ">"
				+ "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>"
				+ "</div>");
		}
	};
};

