$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var sideBar = new SideBar($("#sidebar"), model);
	var selectDish = new SelectDish($("#selectdish"), model);
	var dishDeets = new DishDeets($("#dishdeets"), model);
	var sumMenu = new SumMenu($("#summenu"), model);
	var fullPrep = new FullPrep($("#fullprep"), model);
	//Lägg till en sidebar-Controller och skicka med den här instansen av sidebarobjekt + den här instansen av model.
	var overallState = new OverallState();
	var sideCtrl = new SideCtrl(sideBar, model, overallState);
	var selectionCtrl = new SelectionCtrl(overallState);
	var dishDeetsCtrl = new DishDeetsCtrl(sideBar, model, overallState, selectionCtrl);
	var selDishCtrl = new SelDishCtrl(selectDish, model, overallState, dishDeetsCtrl);
	var welcomeCtrl = new WelcomeCtrl(overallState, selectionCtrl);
	var fullPrepCtrl = new FullPrepCtrl(overallState, selectionCtrl);
	var sumMenuCtrl = new SumMenuCtrl(overallState, selectionCtrl, fullPrepCtrl);

});
