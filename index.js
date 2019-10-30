$(document).ready(function() {
    $('#js-shopping-list-form').submit(event =>{
        //stops value from being sent
        event.preventDefault();
        //stores input in var
        let newItem = $('#shopping-list-entry').val();
        //add this new item as it's own <li> in the html
        $('ul').append( '<li><span class="shopping-item">' + newItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>' )  
    });
    //when the check button is clicked, the strikethrough code is added
    /*$( "button.shopping-item-toggle" ).click(function() {
        $( ".shopping-item" ).toggleClass( "shopping-item__checked" );
    });*/
    $( document ).on( "click", function(event) {
        $( event.target ).closest( ".shopping-item" ).toggleClass( "shopping-item__checked" );
    });

})