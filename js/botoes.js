let array_carrinho = [];

var banco = window.localStorage;

$(document).ready(function () {
    fLocalClickEvents;

});


function fLocalClickEvents(){
    


$("#001").click(function(){

    array_carrinho.push("Tênis Nike Air VaporMax Flyknit");

    banco.setItem("Carrinho", JSON.stringify(array_carrinho));

});

$("#002").click(function(){
    
    array_carrinho.push("Chinelo Nike Benassi");

});

$("#003").click(function(){
    
    array_carrinho.push("Tênis Nike Air Zoom Winflo 7 Masculino");

});

$("#004").click(function(){
    
    array_carrinho.push("Tênis Nike Air Zoom Pegasus 37 Masculino");

});

$("#005").click(function(){
    
    array_carrinho.push("Chuteira Nike Mercurial Vapor 13 Club Neymar Unissex");

});

$("#006").click(function(){
    
    array_carrinho.push("Chuteira Nike Beco 2 Unissex");

});

$("#007").click(function(){
    
    array_carrinho.push("Tênis Nike Air Max 2090 Masculino");

});

$("#008").click(function(){
    
    array_carrinho.push("Chinelo Nike Offcourt Masculino");

});

$("#009").click(function(){
    
    array_carrinho.push("Tênis Nike React Infinity Run Flyknit Masculino");

});

}