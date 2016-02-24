var WelcomeView = function(model) {

    $(document).ready(function(){
        $("#join").click(function(){
            $("#info").remove();
            $("#showDish").show();
            model.emptyMenu();
       });

		
        $("#dishdeets").delegate("#backToSelectDish", "click", function(event) {
            $("#dishdeets").hide();
            $("#selectDishType").show();
			$(".dishdeet").remove();
			$(".ingredients").remove();
        });
    });
};