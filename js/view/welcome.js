var WelcomeView = function(container) {

    $(document).ready(function(){
        $("#join").click(function(){
            $("#info").remove();
            $("#showDish").show();
       });

        $("#selectdish").delegate(".dish", "click", function(event) {
            $("#selectDishType").remove();
            $("#dishdeets").show();
        });
    });
};