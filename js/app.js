$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#container"), model);
	var sideBar = new SideBar($("#sidebar"), model);
	var selectDish = new SelectDish($("#selectdish"), model);
	var dishDeets = new DishDeets($("#dishdeets"), model);
	var sumMenu = new SumMenu($("#summenu"), model);
});