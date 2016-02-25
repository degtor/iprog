var SelectDish = function (container, model) {
	var dishesDiv = container;

	// Activated from selDishController
	this.renderCourses = function (availableCourses) {
		for (i = 0; i < availableCourses.length; i++) {
			dishesDiv.append("<div" + " id=" + "'" + availableCourses[i].id + "'" + "class='col-md-3 dish'>"
				+ "<h4>" + availableCourses[i].name + "</h4>"
				+ "<img src=\"images/" + availableCourses[i].image + "\"" + ">"
				+ "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>"
				+ "</div>");
		}
	};
};
