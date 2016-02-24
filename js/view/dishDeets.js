var DishDeets = function (container, model, selDishCtrl) {
    model.addObserver(this);
    var selDishDiv = container;
    this.dishID = 0;

    //När update kallas av observer, gör variabler utifrån DISH-objekt.
    //Dish-objekt kommer från anropet addDishToMenu i Model som skickar med vilken dish som addats
    //Kör sen utskriften.
    this.update = function(dish) {
        selectedDish = dish;
        dishIngredients = dish.ingredients;
        this.dishID = dish.id;
        this.write();
    };  

    this.write = function() {
        selDishDiv.append("<div class=\"col-md-6 dishdeet\" id=\"" + selectedDish.id + "\">" + "<h3>" + selectedDish.name + "</h3>"
            + "<img src=\"images/" + selectedDish.image + "\"" + ">"
            + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>"
            + "<button type='button' class='btn btn-warning' id='returntoselect'>Back to select Dish</button>");

        selDishDiv.append("<div id='ingredientsTable' class='col-md-6 ingredients'>" + "<h3>Ingredients for 4 people</h3>" + "<hr />"
    + "<table id='dishIngredients' style='width:100%'>");

        var tablezor = container.find("#dishIngredients");

        for (i = 0; i < dishIngredients.length; i++) {
             tablezor.append("<tr>"
                 + "<td>" + dishIngredients[i].quantity + "</td>"
                 + "<td>" + dishIngredients[i].unit + "</td>"
                 + "<td>" + dishIngredients[i].name + "</td>"
                 + "<td>    SEK                         </td>"
                 + "<td>" + dishIngredients[i].price + "</td>"
             + "</tr>");
        };

        tablezor.append("<tr><td colspan='5'><hr /></td></tr>"
            + "<tr><td><button type='button' class='btn btn-warning' id='appenddish'>Confirm dish</button></td>"
            + "<td colspan='2'></td>"
            + "<td>SEK</td>" + "<td>" + model.getDishPrice(selectedDish) +"</td>" + "</tr>");
    }
};