function insert  (num) { /*poderia ser "inserir" */
    /* funcao chamada pelo 'onclick" onde sera inserido o valor que esta dentro das aspas simples (html)*/
    var numero = document.getElementById('resultado') .innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function limpar () {
    document.getElementById('resultado') .innerHTML = ""
}

function voltar () {
    var resultado = document.getElementById('resultado') .innerHTML;
    document.getElementById('resultado') .innerHTML = resultado.substring(0, resultado.length -1);
    /*"substring" é uma função nativa do js ele separa em pedaços os numeros na calculadora*/
    /*"length" é uma função nativa do js ele conta  quantos numeros na calculadora, o "-1" vai voltando de 1 em 1*/
}

function calcular () {
    var resultadoElement = document.getElementById('resultado');
    var resultado = resultadoElement.innerHTML.trim();
    /*trim separa a expressão em pedacinhos*/

    var ultimoCaractereNumerico = /\d$/.test(resultado);
    /*Essa é uma expressão nativa do js: onde /\d$/ é uma classe de caracteres que corresponde a qualquer digito decimal (0-9) e o "$" representa o final de uma string*/
    
    
    if(ultimoCaractereNumerico) {
        resultadoElement.innerHTML = eval (resultado) .toFixed (2);
    }
    else {
        alert("Mensagem de erro: Impossível Calcular")
        limpar(); /*chama a função voltar*/
    }
}