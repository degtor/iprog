var DishDeets = function (container, model) {
    var selDishDiv = container;
    var selectedDish = model.getDish(1); // This should later be retrieved from selectDish object.
    var dishIngredients = selectedDish.ingredients;

    selDishDiv.append("<div class=\"col-md-6 dish\">" + "<h3>" + selectedDish.name + "</h3>"
        + "<img src=\"images/" + selectedDish.image + "\"" + ">"
        + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>"
        + "<button type='button' class='btn btn-warning'>Back to select Dish</button>");

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
    }

    tablezor.append("<tr><td colspan='5'><hr /></td></tr>"
        + "<tr><td><button type='button' class='btn btn-warning'>Confirm dish</button></td>"
        + "<td colspan='2'></td>"
        + "<td>SEK</td>" + "<td>" + model.getDishPrice(selectedDish) +"</td>" + "</tr>");
};


/*
<div class="col-md-3 dish">
<img src="images/toast.jpg" alt="Lasagne">
 <span id="Lasange"></span>
 </div>
 <div id="Pizza" class="col-md-3 dish">
 <img src="images/sourdough.jpg" alt="Pizza">
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh. Nulla eget nulla imperdiet, aliquam nisl a, accumsan risus. Fusce nec mauris malesuada, semper nisi non, egestas metus. Nam in ante mattis mauris bibendum condimentum ut at metus.</p>
 </div>
 <div id="Mushrooms" class="col-md-3 dish">
 <img src="images/meatballs.jpg" alt="Mushrooms">
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh. Nulla eget nulla imperdiet, aliquam nisl a, accumsan risus. Fusce nec mauris malesuada, semper nisi non, egestas metus. Nam in ante mattis mauris bibendum condimentum ut at metus.</p>
 </div>
 <div id="Scallops" class="col-md-3 dish">
 <img src="images/meatballs.jpg" alt="Scallops">
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh. Nulla eget nulla imperdiet, aliquam nisl a, accumsan risus. Fusce nec mauris malesuada, semper nisi non, egestas metus. Nam in ante mattis mauris bibendum condimentum ut at metus.</p>
 </div>
 <div id="Scallops" class="col-md-3 dish">
 <img src="images/meatballs.jpg" alt="Scallops">
 <p>En dag när Ariel var ute och gick såg han en björn. Björnen lekte med en varg men de var liksom vänner. På ett fint sätt. Ariel ville dock inte vara med att leka för han har en deadline i mmtok snart. Och det får man absolut inte missa. Då blir Emma Frid arg.</p>
 </div>
 */
