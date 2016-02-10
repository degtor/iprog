var SideBar = function (container, model) {
	
	/* GHOST DATA */
	model.setNumberOfGuests(1);
	model.addDishToMenu(1);
	model.addDishToMenu(101);
	model.addDishToMenu(201);
	menu = model.getFullMenu();

	var table = this.selectedDishes = container.find("#selectedDishes");
	var total = this.total = container.find("#total");
	console.log(table);
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)


  	for(var i = 0; i < menu.length; i++) {

  			$(table).append("<tr>" + "<td>" + menu[i].name + "</td>" + "<td>" + model.getDishPrice(menu[i]) + "</td>" + "</tr>");
		} 

	$(total).html(model.getTotalMenuPrice());
}

