var SelectDish = function (container, model) {
	var dishesDiv = container;
	var lol = this.displayedDishTypes = container.find("#dishtype");
	var onClickDiv = this.onClickDiv = container.find("#selectdish");
	//console.log(onClickDiv);


	// Shows available courses for each dish type
	$(document).ready(function(){
		$("#dishtype").change(function(){
			var hest = $("#dishtype option:selected").text();
			var selectedType = hest;
			var availableCourses = model.getAllDishes(selectedType);
			$(".dish").remove();

			for (i = 0; i < availableCourses.length; i++) {
				dishesDiv.append("<div" + " id=" + "'" + availableCourses[i].id + "'" + "class='col-md-3 dish'>"
					+ "<h4>" + availableCourses[i].name + "</h4>"
					+ "<img src=\"images/" + availableCourses[i].image + "\"" + ">"
					+ "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>"
					+ "</div>");
				}
		});
	});

};
