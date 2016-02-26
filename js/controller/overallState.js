var OverallState = function(model) {
	var sideBar = new SideBar($("#sidebar"), model);
	this.selectDish = new SelectDish($("#selectdish"), model);
	var dishDeets = new DishDeets($("#dishdeets"), model);
	var fullPrep = new FullPrep($("#fullprep"), model);
	var sumMenu = new SumMenu($("#summenu"), model);

	this.selDishCtrl = new SelDishCtrl(this, this.selectDish, model);
	this.sideCtrl = new SideCtrl(this, sideBar, model);
	this.selectionCtrl = new SelectionCtrl(this, model);
	this.welcomeCtrl = new WelcomeCtrl(this, model);
	this.dishDeetsCtrl = new DishDeetsCtrl(this, sideBar, model);
	this.fullPrepCtrl = new FullPrepCtrl(this, fullPrep, model);
	this.sumMenuCtrl = new SumMenuCtrl(this, model);
	
	this.initCtrl = function(from, to) {
		from.hideMe();
		to.init();
	};

};