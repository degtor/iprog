var SideBar = function (container, model) {

	var table = this.selectedDishes = container.find("#selectedDishes");
	var total = this.total = container.find("#total");
	guests = model.getNumberOfGuests();

	this.displayedGuests = container.find("#guests");

	$(this.displayedGuests).children("option").each(function() {
		if(this.value == guests) {
			$(this).attr("selected", "selected");
		}
	});

	//För upppdatering av värdet
	var totalPrice = function() {
		$(total).html(model.getTotalMenuPrice());
	};

	var menuStuff = function() {
		$(table).html(model.getFullMenu());
		menu = model.getFullMenu();
		for (var i = 0; i < menu.length; i++) {
			if (menu === "Menu is empty!") {
				break
			} else {
				$(table).append("<tr>" + "<td>" + menu[i].name + "</td>" + "<td>" + model.getDishPrice(menu[i]) + "</td>" + "</tr>");
			}
		}
	};

	totalPrice();
	menuStuff();

	// ** OBSERVERSTUFF **

	//Lägg till HELA denna instansen av ett sideBar-objekt till observerlistan borta i model
	model.addObserver(this);

	//Observerhanteraren kör denna metoden när den fått ett notifyObservers()-anrop
	this.update = function(object) {
		totalPrice();
		menuStuff();
	};
};


