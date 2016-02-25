var OverallState = function() {
	//this.myChildren = [];
	
	this.initCtrl = function(from, to) {
		from.hideMe();
		to.init();
	};
};