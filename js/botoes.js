let array_carrinho = [];

var banco = window.localStorage;

/*$(document).ready(function () {
    
    fLocalClickEvents;

});
*/

window.onload = function(){
    
    
    fLocalClickEvents();

}

function fLocalClickEvents(){
    
    $("#bCarrinho").click(function(){

        window.localStorage.href = "../Paginas/carrinho.html"

    });


    $("#001").click(function(){
        
        array_carrinho.push("Tênis Nike Air VaporMax Flyknit");
        
        banco.setItem("Carrinho", JSON.stringify(array_carrinho));

    });

    $("#002").click(function(){
        
        array_carrinho.push("Chinelo Nike Benassi");

        banco.setItem("Carrinho", JSON.stringify(array_carrinho));

    });

    $("#003").click(function(){
        
        array_carrinho.push("Tênis Nike Air Zoom Winflo 7 Masculino");

        banco.setItem("Carrinho", JSON.stringify(array_carrinho));

    });

    $("#004").click(function(){
        
        array_carrinho.push("Tênis Nike Air Zoom Pegasus 37 Masculino");

        banco.setItem("Carrinho", JSON.stringify(array_carrinho));

    });

    $("#005").click(function(){
        
        array_carrinho.push("Chuteira Nike Mercurial Vapor 13 Club Neymar Unissex");

        banco.setItem("Carrinho", JSON.stringify(array_carrinho));

    });

    $("#006").click(function(){
        
        array_carrinho.push("Chuteira Nike Beco 2 Unissex");

        banco.setItem("Carrinho", JSON.stringify(array_carrinho));

    });

    $("#007").click(function(){
        
        array_carrinho.push("Tênis Nike Air Max 2090 Masculino");

        banco.setItem("Carrinho", JSON.stringify(array_carrinho));

    });

    $("#008").click(function(){
        
        array_carrinho.push("Chinelo Nike Offcourt Masculino");

        banco.setItem("Carrinho", JSON.stringify(array_carrinho));

    });

    $("#009").click(function(){
        
        array_carrinho.push("Tênis Nike React Infinity Run Flyknit Masculino");

        banco.setItem("Carrinho", JSON.stringify(array_carrinho));

    });

}