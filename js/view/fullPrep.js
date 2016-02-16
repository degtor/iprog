var FullPrep = function (container, model) {
    var dishesDiv = container;

    /* GHOST DATA */
    model.setNumberOfGuests(1);
    model.addDishToMenu(1);
    model.addDishToMenu(101);
    model.addDishToMenu(201);
    var menu = model.getFullMenu();


    for (var i = 0; i < menu.length; i++) {
        dishesDiv.append("<div class='row'>"
            + "<div class='col-md-12 menuDish' style='padding:10px; margin-left:20px;'>"
            + "<div class='col-md-2'><img src=\"images/" + menu[i].image + "\"" + "></div>"
            + "<div class='col-md-4'><h3>" + menu[i].name + "</h3>"
            + "<p>Lorem ipsum coca cola och sont Lorem ipsum coca cola och sont Lorem ipsum coca cola och sont Lorem ipsum coca cola och sont</p> </div>"
            + "<div class='col-md-6'><h4>PREPARATION</h4><p>" + menu[i].description + "</p></div>");
    }
};
