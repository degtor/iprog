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
	this.dishDeetsCtrl = new DishDeetsCtrl(this, dishDeets, model);
	this.fullPrepCtrl = new FullPrepCtrl(this, fullPrep, model);
	this.sumMenuCtrl = new SumMenuCtrl(this, model);
	
	//Precis som en observer så routar bara den här metoden.
	//Någonting ska döljas, någonting ska visas. Vad det är ligger i anropen hos knapparna
	//Sen har controllers fått metoder. Init = Do your shit. Och hideMe = dölj.
	this.initCtrl = function(from, to) {
		from.hideMe();
		to.init();
	};

};

/* View lyssnar på förändringar i model via observer */
/* Controller lyssnar på ändringar i view, skriver till model. */
/* Observer plockar upp och presenterar förändringarna i view */

/* Controllers får också uppgift att sköta navigation. Beskrivet förlopp i föreläsningsslides:

1. Knapptryckning tas emot i welcomeControl
2. WelcomeCtrl säger till overallState att visa sidebar och selectdish
3. overallState ropar tillbaka till WelcomeCtrl att dölja welcomeView 
4. WelcomeCtrl döljer view
5. overallState "initierar/visar" Sidebar och selectdish controllers
6. Controllers visar sina views */

