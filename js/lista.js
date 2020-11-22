var banco = window.localStorage;

var dados;

$(document).ready(function(){

    dados = JSON.parse(banco.getItem("Carrinho"));

    fLocalMostrarDados;
});

    function fLocalMostrarDados(){

        $("#carrinho").html("");

        for(let i = 0; i<dados.length; i++){
            let conteudo = "";
            conteudo += "<tr>";
            conteudo += "<td>" + dados[i] + "</td>";
            conteudo += "</tr>";
            $("#carrinho").append(conteudo);
        }

    }