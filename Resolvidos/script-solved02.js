// Seletores Hierárquicos

$(document).ready(function(){

    $('h2').css('margin','0');
    $('p').css({margin:'0', color:'#582365'});
    $('.mae-maria').css({margin:'0, 15px, 25px', backgroundColor:'#94cbe0'});
    // ancestrai de mãe-maria
    $('.mae-maria span').text('mesmo span continuo sendo filha').css('color','black');
    $('.mae-maria h2').text('sou h2 filho de maria').css('font-size','25px');
    // filhas diretas de mãe-maria
    $('.mae-maria > span').css({color:'#9b0c08', fontSize:'30px'});
    // Selecionar Primeiro elemento após a seleção
    $('.dono-de-si + p').css('font-size','30px');
    // Selecionar todos elementos após a seleção
    $('.dono-de-si ~ p').css({fontSize:'45px', color:'#089b56'});
});