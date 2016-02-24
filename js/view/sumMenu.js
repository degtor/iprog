var SumMenu = function (container, model) {
    var dishesDiv = container;

    /* GHOST DATA */
   /* model.setNumberOfGuests(1);
    model.addDishToMenu(1);
    model.addDishToMenu(101);
    model.addDishToMenu(201);
    */
    var menu = model.getFullMenu();


    for (var i = 0; i < menu.length; i++) {
        dishesDiv.append("<div class='col-md-2 menuDish' style='border: solid #000000; padding:10px; margin-left:20px;'>"
            + "<img style='width:100%; height:100px;' src=\"images/" + menu[i].image + "\"" + ">"
            + "<p style='background:#995; text-align:center;'>" + menu[i].name + "</p>"
            + "<p style='font-weight:bold; text-align:center;'>" + model.getDishPrice(menu[i]) + " SEK" + "</p>");
    }

    dishesDiv.append("<div class='col-md-1 total' style='margin-left: 40px; border-left:solid #000; padding: 130px 10px 10px 30px;'>"
        + "Total: <br />" + model.getTotalMenuPrice()+ " SEK");
};
