$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var sideBar = new SideBar($("#sidebar"), model);
	var selectDish = new SelectDish($("#selectdish"), model);
	var dishDeets = new DishDeets($("#dishdeets"), model);

	//Lägg till en sidebar-Controller och skicka med den här instansen av sidebarobjekt + den här instansen av model.
	var overallState = new OverallState();
	var sideCtrl = new SideCtrl(sideBar, model, overallState);
	var selDishCtrl = new SelDishCtrl(selectDish, model, overallState);
	var dishDeetsCtrl = new DishDeetsCtrl(sideBar, model, overallState);
	var selectionCtrl = new SelectionCtrl(overallState);
	var welcomeCtrl = new WelcomeCtrl(overallState, selectionCtrl);

/*
	$("#join").click(function(){
		$("#info").remove();
		$("#showDish").show();
	}); */

	$("#selectdish").delegate(".dish", "click", function (event) {
		$("#selectDishType").hide();
		$("#dishdeets").show();
	});

	$("#sidebar").delegate("#confirmdinner", "click", function (event) {
		var sumMenu = new SumMenu($("#summenu"), model);
		$("#sidebar").hide();
		$("#selectDishType").hide();
		$("#dishdeets").hide();
		$("#summenurow").show();
	});

	$("#dishdeets").delegate(".confirmbtn", "click", function(event) {
		$("#dishdeets").hide();
		$("#selectDishType").show();
		$(".dishdeet").remove();
		$(".ingredients").remove();
		var clickedElementId = event.currentTarget.id;
		var selDish = model.getDish(clickedElementId);
		model.addDishToMenu(selDish.id);
	});


	$("#dishdeets").delegate("#backToSelectDish", "click", function() {
		$("#dishdeets").hide();
		$("#selectDishType").show();
		$(".dishdeet").remove();
		$(".ingredients").remove();
	});

	$("#printRecipe").click(function() {
		var fullPrep = new FullPrep($("#fullprep"), model);
		$("#summenu").hide();
		$("#fullprepcontainer").show();
		$("#summenurow").hide();
	});

	$("#backtosum").click(function() {
		$("#summenurow").show();
		$("#summenu").show();
		$("#fullprepcontainer").hide();
	});

	$("#backtoselect").click(function() {
		$("#summenurow").hide();
		$("#selectdish").show();
		$("#sidebar").show();
		$("#selectDishType").show();
	});
});
