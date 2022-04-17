/*estrutura basica
    function declararValor(parametro){

        let resultado;

        if (num < 0 ){
            resultado = false;
        }
        else{
            resultado = true;
        }
        return resultado;
    }
     numeroPositivo(2);

     // true

     numeroPositivo(-9);

     // false
*/ 

function numeroPositivo(num){
     
    let resultado;

    const ehNegativo = num < 0;   // uma forma de contruir e declarar uma function

    if(ehNegativo){
        resultado = false;
    }
    else{
        resultado = true;
    }
    return resultado;
}

function positovoNumero(num){
    const eNegativo = num < 0;    // sem else .

    if(eNegativo){
        return false;
    }
    return true;
}

function numeroEpositivo(num){
    const ehNegativo = num < 0;
    const maiorQueDez  = num > 10;
     
    if(ehNegativo){
        return "Esse número é negativo!";
    }else if(!ehNegativo && maiorQueDez){
        return "Esse número é positivo e maior que 10 !";
    }
    return " Esse número é positivo!";
}









