// Seletores Hierárquicos

// ancestrai de mãe-maria

// filhas diretas de mãe-maria

// Selecionar Primeiro elemento após a seleção

// Selecionar todos elementos após a seleção

$(document).ready(function(){

    $('h2').css('color','#555678');
    $('p').css({margin:'0', color:'#582365'});
    $('.mae-maria').css({margin:'0, 15px, 25px', backgroundColor:'#94cbe0'});

    $('.mae-maria h2').text('sou filha legítima e direta de mãe maria');
    $('.mae-maria span').text('sou o span filho de mae maria?');

    $('.mae-maria > span').text('sou a filha legítima!!!');

    $('.dono-de-si ++ p + h1').css('font-size','50px');

    $('.dono-de-si, .dono-de-si + p').css('font-size','50px');

    $('.dono-de-si ~ p').css('color','#858585');

});