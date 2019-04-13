$(function(){

    $('p')
    .mouseup(function(){
        $(this).append("<span style='color:#f00;'> Subiuuuuu </span>");
    })
    .mousedown(function(){
        $(this).append("<span style='color:#00f;'> Desceeeuuuu </span>");
    });


});

