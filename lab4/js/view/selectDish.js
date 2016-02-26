var SelectDish = function (container, model) {
	var dishesDiv = container;
	model.addObserver(this);
	// Activated from selDishController
	function renderCourses(availableCourses) {
		for (i = 0; i < availableCourses.length; i++) {
			dishesDiv.append("<div" + " id=" + "'" + availableCourses[i].RecipeID + "'" + "class='col-md-3 dish'>"
				+ "<h4>" + availableCourses[i].Title + "</h4>"
				+ "<img src=\"" + availableCourses[i].ImageURL + "\"" + ">"
				//+ "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>"
				+ "</div>");
		}
	};
	function listen() {
		$("#dishtype").change(function(){
			var selectedType = $("#dishtype option:selected").text();
			console.log("selectedType is:" + selectedType);
			model.getAllDishes(selectedType);
			$(".dish").remove();
		});
	};
	listen();

	this.update = function(object) {
		console.log("Updated in selectDish!");
		renderCourses(object);
		console.log(object);
	};
};
