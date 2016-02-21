var WelcomeView = function(container) {

    $(document).ready(function(){
        $("#join").click(function(){
            $("#info").remove();
            $("#showDish").show();
       });

        $("#selectdish").delegate(".dish", "click", function(event) {
			$("#selectDishType").hide();
            $("#dishdeets").show();
        });
		
        $("#dishdeets").delegate("#backToSelectDish", "click", function(event) {
            $("#dishdeets").hide();
            $("#selectDishType").show();
			$(".dishdeet").remove();
			$(".ingredients").remove();
        });
    });
};