var SelDishCtrl = function(view, model, overallState, dishDeetsCtrl) {
    var sel = this;
    this.hideMe = function() {
        $("#selectdish").hide();
    };

    $("#selectdish").delegate(".dish", "click", function (event) {
        overallState.initCtrl(sel, dishDeetsCtrl);
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
