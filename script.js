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


    $(document).ready(function(){
        $(".collapse.show").each(function(){
            $(this).prev(".card-header").find(".fas").addClass("fa-minus").removeClass("fa-plus");
        });

        $(".collapse").on("show.bs.collapse", function() {
            $(this).prev(".card-header").find(".fas").removeClass("fa-plus").addClass("fa-minus");
       
        }).on("hide.bs.collapse", function(){
            $(this).prev(".card-header").find(".fas").removeClass("fa-minus").addClass("fa-plus");
    });

});  