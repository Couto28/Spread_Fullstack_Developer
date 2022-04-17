
// For //


function multiplicaPorDois(arr){
    let multiplicados = [];

    for( i = 0 ; i < arr.length; i ++){
       // multiplicados.push(arr[i] + 2)
       //multiplicados.push(arr[i] * 2)
       multiplicados.push(arr[i] - 2);
    }
    return multiplicados;
}
const meusNumeros = [ 2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros);

// For in   //

function qualquerCoisa(obj){
    for(prop in obj){
        console.log(prop);   // for in trabalhando acesando a propriedade de um objeto . ex : nome / idade / cidade
        //console.log(obj[prop]);  // declara o valor das propriedade do objetos . ex : joão / 20 / salvador
    }
}

const meuObj = {   // quando criando uma function com as propriedades " prop - obj" precisamos criar um objeto
   nome : "João",
   idade : "20",
   cidade: "Salvador"
}
qualquerCoisa(meuObj);

// for of
// executa cada letra em ordem cronologica

function logLetras(palavras){
    for(letra of palavras){
        console.log(letra)
    }
}

const palavras = "programação";

logLetras(palavras)

