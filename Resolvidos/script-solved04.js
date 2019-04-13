// .click()

$(function () {
    $('p').click(function () {
        $(this).css('background-color', '#569856');
    });
});


// .dblclick()

$(function () {
    const divdbl = $("div:first");
    divdbl.dblclick(function () {
        divdbl.toggleClass("dbl");
    });
});

