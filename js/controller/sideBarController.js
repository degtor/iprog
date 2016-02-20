var SideCtrl = function(view, model) {

	//Jquery event listener. Lyssnar efter förändringar i dropdownen.
	//När förändring sker så kör den en funktion som sparar värdet som vi ändrar till.
	//Det nya värdet skickas till model med setNumberOfGuests-metoden.
	view.displayedGuests.change(function() {
		var selectedValue = $("#guests option:selected").val();
		model.setNumberOfGuests(selectedValue);
	});

};
	