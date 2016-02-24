$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	var selDishCtrl = new SelDishCtrl(selectDish, model);
	//And create the needed controllers and views
	var sideBar = new SideBar($("#sidebar"), model);
	var selectDish = new SelectDish($("#selectdish"), model);
	var dishDeets = new DishDeets($("#dishdeets"), model);
	var sumMenu = new SumMenu($("#summenu"), model);
	var fullPrep = new FullPrep($("#fullprep"), model);

	//Lägg till en sidebar-Controller och skicka med den här instansen av sidebarobjekt + den här instansen av model.
	var overallStateCtrl = new OverallStateCtrl();
	var sideCtrl = new SideCtrl(sideBar, model);
	var dishDeetsCtrl = new DishDeetsCtrl(dishDeets, model);
	var startPageCtrl = new StartPageCtrl(overallStateCtrl);
});