$(document).ready(function(){
    $("#navbar li").hover(function(){
        $(this).css("border", "1px solid #fff");
        $(this).css("border-top", "0");
        $(this).fadeTo('slow', 0.5);
    }, function(){
        $(this).fadeTo('slow', 1);
        $(this).css("border", "0");
    });
    $("#navbar li").click(function(){
        $('#navbar li').each(function(){
            $(this).removeClass('nav-active highlighted');
        });
        $(this).addClass('nav-active highlighted');
        $(this).addClass('highlighted');
    });
});