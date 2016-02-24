var SideBar = function (container, model) {
	menu = model.getFullMenu();
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

	this.writeDishes = function() {
		if(model.menu.length > 0) {
			$(table).empty();
			for (var i in model.menu) {
	  			$(table).append("<tr>" + "<td>" + model.menu[i].name + "</td>" + "<td>" + model.getDishPrice(model.menu[i]) + "</td>" + "</tr>");
			}
		}
	};

	//För upppdatering av värdet
	this.totalPrice = function() { 
		$(total).html(model.getTotalMenuPrice());
	};

	// ** OBSERVERSTUFF **

	//Lägg till HELA denna instansen av ett sideBar-objekt till observerlistan borta i model
	model.addObserver(this);

	//Observerhanteraren kör denna metoden när den fått ett notifyObservers()-anrop
	this.update = function(object) {
		this.totalPrice();
		this.writeDishes(); 
	};


};

