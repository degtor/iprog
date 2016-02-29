var SelDishCtrl = function(overallState, view, model) {
    var sel = this;

    this.hideMe = function() {
        $("#selectdish").hide();
    };

    $("#selectdish").delegate(".dish", "click", function (event) {
        overallState.initCtrl(sel, overallState.dishDeetsCtrl);
    });

    // Event listener

    this.listen = function() { 
        $("#dishtype").change(function(){
            var selectedType = $("#dishtype option:selected").text();
            var availableCourses = model.getAllDishes(selectedType);

            $(".dish").remove();
            view.renderCourses(availableCourses);
        });
    };

    this.listen();
 };
