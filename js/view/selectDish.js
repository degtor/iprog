var SelectDish = function (container, model) {
	var dishesDiv = container;
	availableStarters = model.getAllDishes("starter");
	availableMains = model.getAllDishes("main dish");

	for (i=0; i < availableStarters.length; i++) {
		dishesDiv.append("<div class=\"col-md-3 dish\">" + availableStarters[i].name + "<img src=\"images/toast.jpg\">" + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>" + "</div>");
	}

	for (i=0; i < availableMains.length; i++) {
		dishesDiv.append("<div class=\"col-md-3 dish\">" + availableMains[i].name + "<img src=\"images/toast.jpg\">" + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non pellentesque nibh.</p>" + "</div>");
	}

}

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
