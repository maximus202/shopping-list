$(document).ready(function() {
    $('#js-shopping-list-form').submit(event =>{
        event.preventDefault(); //stops value from being sent 
        let newItem = $('#shopping-list-entry').val(); //stores input in var
        $('ul').append( '<li><span class="shopping-item">' + newItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>' )
        //add this new item as it's own <li> in the html
    })
})