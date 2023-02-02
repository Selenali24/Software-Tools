/* 
*   Selena Li
*
*   Creates a scrollable dropdown hover menu with 4 months 
*   listed at a time
*/

$(function(){
    $("#selectMonth").hover(function() {
        $(this).attr('size', 4); //4 months shown at a time
    },
    function() {
        $(this).attr('size', 1);
    });
});