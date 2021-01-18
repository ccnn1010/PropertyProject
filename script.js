/* $(window).scroll(function(){
    $('nav').toggelClass('scrolled', $(this).scrollTop() > 200);
});
 */
/* 200 represents how many pixels down */

/* 
 $(window).scroll(function(){
    $('nav').toggelClass('scrolled', $(this).scrollTop() > 700);
     
    });  */

    $(document).ready(function() {
        $(window).scroll(function() {
           if($(this).scrollTop() > 900) { 
               $('.navbar').addClass('scrolled');
           } else {
               $('.navbar').removeClass('scrolled');
           }
        });
    });


    $(document).ready(function() {
        $(window).scroll(function() {
           if($(this).scrollTop() > 200) { 
               $('.navbar').addClass('scrolled');
           } else {
               $('.navbar').removeClass('scrolled');
           }
        });
    });