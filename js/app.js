$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#container"), model);
	var sideBar = new SideBar($("#sidebar"), model);
	var selectDish = new SelectDish($("#selectdish"), model);

});