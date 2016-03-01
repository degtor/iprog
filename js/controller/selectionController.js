var SelectionCtrl = function(overallState) {
	//SelectionCtrl visar allt som har med sidebar och select dish
	//Men alla hideMe ligger ute hos individuella controllers eftersom
	//Dish deet t.ex. inte ska dölja sidebar men varje gång vi laddar selectdish
	//Ska också sidebar laddas. 

	this.init = function() {
		$("#showDish").show();
		$("#sidebar").show();
		$("#selectDishType").show();
		$("#selectdish").show();
		overallState.selDishCtrl.listen();
	};
};