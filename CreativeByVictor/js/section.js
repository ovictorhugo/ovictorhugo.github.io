$(document).ready(function(){
    $('.input-section').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("#" + inputValue);
        $(".section").not(targetBox).hide();
        $(targetBox).show();

        jQuery('.input-section').click(function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, 10);
        })
    });
});