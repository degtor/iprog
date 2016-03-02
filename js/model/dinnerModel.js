//DinnerModel Object constructor
var DinnerModel = function() {

	this.menu = [];
	this.numberOfGuests = 4; // Default number of guests.

	// ** OBSERVER **
	this._observers = [];
	this.addObserver = function (observer) {
		this._observers.push(observer);
	};

	this.notifyObservers = function (arg) {
		for (var i = 0; i < this._observers.length; i++) {
			this._observers[i].update(arg);
			//Varje view i observern har en update-metod som gör ändringarna.
		}
	};
	// ** END OBSERVER **

	this.setNumberOfGuests = function (num) {
		if (num > 0) {
			this.numberOfGuests = num;
			//Om setNumberOfGuests kallas så ska också observern kallas så att viewen kan uppdateras.
			this.notifyObservers();
		}
	};

	// should return
	this.getNumberOfGuests = function () {
		return this.numberOfGuests;
	};

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function (type) {
		if (this.menu.length < 1) {
			return "Menu is empty!"
		} else {
			for (var each in this.menu) {
				if (type === this.menu[each].type) {
					return this.menu[each].name;
				} else {
					return "There is no dish of that type selected";
				}
			}
		}

	};

	//Returns all the dishes on the menu.
	this.getFullMenu = function () {
		if (this.menu.length < 1) {
			return "Menu is empty!"
		} else {
			return this.menu;
		}
	};

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function () {
		var sumIngredients = [];
		for (var dish in this.menu) {
			for (var i in this.menu[dish].Ingredients) {
				sumIngredients.push(this.menu[dish].Ingredients[i]);
			}
		}
		console.log(sumIngredients);
		return sumIngredients;
	};

	this.emptyMenu = function () {
		this.menu = [];
		return this.menu;
	};

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function () {
		var totalPrice = 0;
		var ingredients = this.getAllIngredients();
		for (var each in ingredients) {
			totalPrice += 1;
		}
		return totalPrice * this.numberOfGuests;
	};
	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function (dish) {
		for (var i = 0; i < this.menu.length; i++) {
			console.log(i);
			if (dish.Category === this.menu[i].Category) {
				console.log("dish.Category = " + dish.Category + "this.menu[i] : " + this.menu[i].Category);
				console.log("INDEX IS :" + this.menu.indexOf(dish));
				this.menu.splice(this.menu.indexOf(this.menu[i]), 1);
				//this.removeDishFromMenu(dish);
			}
		}
		this.menu.push(dish);
		this.notifyObservers();
		console.log(this.menu);

	};

	//Removes dish from menu
	this.removeDishFromMenu = function (id) {
		console.log(this.menu);
		this.menu.splice(this.menu.indexOf(this.getDish(id)), 1);
	};

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type, filter) {
		var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
		var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&&include_primarycat="
			+ type
			+ "&api_key="
			+ apiKey;
		$.ajax({
			type: "GET",
			context: this, /// OBS VIKTIG!!! Behåller this. Går inte att köra notifyobservers i success annars.
			dataType: 'json',
			cache: false,
			url: url,
			success: function (data) {
				console.log("getAllDishes returns :" + data.Results);
				this.notifyObservers(data.Results);
				$("#recipeTitle").html(data.Title);
				$("#instructions").html(data.Instructions);

			}
		});
	};

	//function that returns a dish of specific ID
	this.getDish = function (id) {
		var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
		var url = "http://api.bigoven.com/recipe/" + id + "?api_key=" + apiKey;
		$.ajax({
			type: "GET",
			dataType: 'json',
			context: this,
			cache: false,
			url: url,
			success: function (data) {
				console.log("getDish returns :" + data);
				this.notifyObservers(data);
				$("#recipeTitle").html(data.Title);
				$("#instructions").html(data.Instructions);
			}
		});
	};

	this.getDishPrice = function (dish) {
		dishPrice = 0;
		for (i in dish.Ingredients) {
			dishPrice += 1;
		}
		return dishPrice;
	};
};