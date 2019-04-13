// // .click()

$(function(){

    $('p').click(function(){
        $('body').css('background-color', '#446578');
    });

});

$(function(){

    $('p').click(function(){
        $(this).slideUp();

    });

});


// // .dblclick()

$(function(){

    const divA = $('div:first');
    divA.dblclick(function(){
        divA.toggleClass('dbl');
    });

});

