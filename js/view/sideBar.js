var SideBar = function (container, model) {

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

	$(document).ready(function() {
		totalPrice();
		menuStuff();
	});

	// ** OBSERVERSTUFF **

	//Lägg till HELA denna instansen av ett sideBar-objekt till observerlistan borta i model
	model.addObserver(this);

	//Observerhanteraren kör denna metoden när den fått ett notifyObservers()-anrop
	this.update = function(object) {
		totalPrice();
		menuStuff();
	};


	console.log(model.menu);
	guests = model.getNumberOfGuests();

	var table = this.selectedDishes = container.find("#selectedDishes");
	var total = this.total = container.find("#total");

	this.displayedGuests = container.find("#guests"); //Take a look at this constructor bizz

	//Loopar igenom dropdownlistans "option"-barn och lägger till SELECTED-attributet i htmlen
	$(this.displayedGuests).children("option").each(function() {
		if(this.value == guests) {
			$(this).attr("selected", "selected");
		}
	});

};

