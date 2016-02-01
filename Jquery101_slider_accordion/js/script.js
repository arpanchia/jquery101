// equivalent to window onload
$(function(){
    
    $('#slide-button').on('click', function(){
        // jquery selector - selecting the tag header, can be used the same way as css
        // animate (state, time)
        // JSON notation - way to code an object into a string
        $('header').animate({left:"0em"}, 500, function(){
            // complete function
            $('#slide-button>i').removeClass('fa-arrow-circle-right')
                                .addClass('fa-arrow-circle-left')
        });
        
    });
    
});


