/*
* Selena Li
* Creates a warning pop-up if it says "vegan" in the notes textarea
* Else a thank you screen with order details are displayed
*/

eventHandler = function(event) {
    if($ ("#Notes").val().toLowerCase().indexOf("vegan") != -1) {
        alert("WARNING! Cheesecakes contain dairy.");
    }
    else {
        $ ("#form").removeAttr("style").hide();
        $ ("#thankYouScreen").show();
        $ ("#displayOrder").html("Topping: " + $ ("input[name='Topping']:checked").val());
        $ ("#displayQuantity").html("Quantity: " + $ ("#quantity").val());
        $ ("#extraNotes").html("Notes: " + $ ("#Notes").val());
    }
}

$(function() {
    $("#button").click(eventHandler);
});