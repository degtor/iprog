var FullPrep = function (container, model) {
    model.addObserver(this);
    var dishesDiv = container;

    this.update = function(object) {
        this.drawView();
    };

    this.drawView = function() {
        menu = model.getFullMenu();
        if (menu === "Menu is empty!") {
            dishesDiv.append("<p>You have not selected any dishes</p>");
        } else {
            dishesDiv.empty();
            for (var i = 0; i < menu.length; i++) {
                dishesDiv.prepend("<div class='row'>"
                    + "<div class='col-md-12 menuDish' style='padding:10px; margin-left:20px;'>"
                    //+ "<div class='col-md-2'><img src=\"images/" + menu[i].image + "\"" + "></div>"
                    + "<img src=\"" + menu[i].ImageURL + "\"" + ">"
                    + "<div class='col-md-4'><h3>" + menu[i].Title + "</h3>"
                    + "<p>Lorem ipsum coca cola och sont Lorem ipsum coca cola och sont Lorem ipsum coca cola och sont Lorem ipsum coca cola och sont</p> </div>"
                    + "<div class='col-md-6'><h4>PREPARATION</h4><p>" + menu[i].Description + "</p></div>");
            }
        };    
    };
};

