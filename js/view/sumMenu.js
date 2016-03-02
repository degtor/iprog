var SumMenu = function (container, model) {
    model.addObserver(this);
    var dishesDiv = container;
    menu = model.getFullMenu();

    this.update = function(object) {
        this.drawView();
    };

    this.drawView = function() {
        if (menu === "Menu is empty!") {
            dishesDiv.append("<p>You have not selected any dishes</p>");
        } else {
            dishesDiv.empty();
            for (var i = 0; i < menu.length; i++) {
                dishesDiv.append("<div class='col-md-2 menuDish' style='border: solid #000000; padding:10px; margin-left:20px;'>"
                    + "<img src=\"" + menu[i].ImageURL + "\"" + ">"
                    + "<p style='background:#995; text-align:center;'>" + menu[i].Title + "</p>"
                    + "<p style='font-weight:bold; text-align:center;'>" + model.getDishPrice(menu[i]) + " SEK" + "</p>");
            }
            dishesDiv.append("<div class='col-md-1 total' style='margin-left: 40px; border-left:solid #000; padding: 130px 10px 10px 30px;'>"
                + "Total: <br />" + model.getTotalMenuPrice() + " SEK");
        }
    };
};
