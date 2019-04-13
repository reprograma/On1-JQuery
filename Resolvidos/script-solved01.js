// Inicialização DOM
$(document).ready(function () {

    alert('o DOM já está carregado ;)');

});

// Inicialização on load
$(window).load(function () {

    alert('os elementos da página já estão carregados');

});


// Função de seleção e alteração do css em bloco
$(document).ready(function(){

    $('h2').css('color','#3d138b');
    $('h2').css('font-size','32px');
    $('h2').text('estou aprendendo como modificar o css via jquery');

});

// Função de seleção e alteração do css inline
$(document).ready(function(){

    $('h2').css('color','#3d138b').css('font-size','32px').text('estou aprendendo como modificar o css via jquery');

});

// Função de seleção e alteração do css concatenado
$(document).ready(function(){

    $('h2')
        .css({color:'#3d138b',fontSize:'32px' })
        .text('estou aprendendo como modificar o css via jquery');

});

// Seleção por Seletor, Classe ou ID
$(document).ready(function(){

    $('a').css({color:'#0eaa0e', textDecoration:'none'});
    $('.link-legal').css('color','#aa0e63');
    $('#coolLink').css('display','none')

});

// Múltiplas Seleções
$(document).ready(function(){

    $('h1, #coolLink, p').css({padding:'15px', color:'#d32794'});

});

