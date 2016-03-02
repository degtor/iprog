var SelDishCtrl = function(overallState, view, model) {
    var sel = this;

    $("#selectdish").delegate(".dish", "click", function (event) {
        overallState.initCtrl(sel, overallState.dishDeetsCtrl);
        model.getDish(event.currentTarget.id);
        $("#selectionheader").hide();
    });

    this.hideMe = function() {
        $("#selectdish").hide();
    };


    // Event listener

    this.listen = function() { 
        $("#dishtype").change(function(){
            var selectedType = $("#dishtype option:selected").text();
            model.getAllDishes(selectedType);

            $(".dish").remove();
            //view.renderCourses(availableCourses);
        });
    };

    //this.listen();
 };
