var DishDeets = function (container, model) {
    var selDishDiv = container;

    model.addObserver(this);

    function renderDishdeets(selectedDish) {
        console.log("SELECTEDDISH BELOW");
        console.log(selectedDish);
        var dishIngredients = selectedDish.Ingredients;

        selDishDiv.append("<div class=\"col-md-6 dishdeet\">" + "<h3>" + selectedDish.Title + "</h3>"
            + "<img src=\"" + selectedDish.ImageURL + "\"" + ">"
            + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>"
            + "<button id='backToSelectDish' type='button' class='btn btn-warning'>Back to select Dish</button>");

        selDishDiv.append("<div id='ingredientsTable' class='col-md-6 ingredients'>" + "<h3>Ingredients for X people</h3>" + "<hr />"
            + "<table id='dishIngredients' style='width:100%'>");


        for (i = 0; i < dishIngredients.length; i++) {
            var tablezor = container.find("#dishIngredients");
            tablezor.append("<tr>"
                + "<td>" + dishIngredients[i].DisplayQuantity + "</td>"
                + "<td>" + dishIngredients[i].MetricUnit + "</td>"
                + "<td>" + dishIngredients[i].Name + "</td>"
                + "<td>    SEK                         </td>"
                + "<td>" + /*dishIngredients[i].price*/"1" + "</td>"
                + "</tr>");
        }

        tablezor.append("<tr><td colspan='5'><hr /></td></tr>"
            + "<tr><td><button id=" + selectedDish.RecipeID + " type='button' class='btn btn-warning confirmbtn'>Confirm dish</button></td>"
            + "<td colspan='2'></td>"
            + "<td>SEK</td>" + "<td>" + model.getDishPrice(selectedDish) + "</td>" + "</tr>");

    };

    this.object = null;
    this.update = function(object) {
        this.object = object;
        if (object == undefined) {
            console.log("lol undefined in dishdeets!!");
        } else if (object.length > 1 ) {
            console.log("ignored this update in dishdeets");
        } else {
            renderDishdeets(object);
            //model.addDishToMenu(object);
        }
    };
};