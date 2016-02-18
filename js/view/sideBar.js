var SideBar = function (container, model) {
	model.addObserver(this); //Lägg till HELA denna instansen av ett sideBar-objekt till observerlistan borta i model	
	model.addDishToMenu(1);
	model.addDishToMenu(101);
	model.addDishToMenu(201);
	menu = model.getFullMenu();
	guests = model.getNumberOfGuests();

	this.displayedGuests = container.find("#guests"); //Take a look at this constructor bizz
	var table = this.selectedDishes = container.find("#selectedDishes");
	var total = this.total = container.find("#total");

	//Loopar igenom dropdownlistans "option"-barn och lägger till SELECTED-attributet i htmlen
	$(this.displayedGuests).children("option").each(function() {
		if(this.value == guests) {
			$(this).attr("selected", "selected");
		}
	});

	//Observerhanteraren kör denna metoden när den fått ett notifyObservers()-anrop
	this.update = function(object) {
		totalPrice();
	};

  	for(var i = 0; i < menu.length; i++) {

  			$(table).append("<tr>" + "<td>" + menu[i].name + "</td>" + "<td>" + model.getDishPrice(menu[i]) + "</td>" + "</tr>");
		} 

	//För upppdatering av värdet
	var totalPrice = function() {
		$(total).html(model.getTotalMenuPrice());
	};

	$(document).ready(function() {
		totalPrice();
	});
	//För deafult-värde
};
