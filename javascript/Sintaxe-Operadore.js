/* 
    Operadores de atribuição

 =   igual
 +=  mais igaul
 *=  multiplicação igual
 /=  diviçao igual
 %=  modulo igual

*/

/*
    Operadores aritméticos

+ adição
- subtração
* multiplicação
** exponencial
/ divisão
% módulo
++ incremento
-- decremento

*/

/*

    Operadores de comparação

==   igual a " Esse valor é igual a esse ?"
===  mesmo valor e mesmo tipo 
!=   diferente 
!==  valor e tipos diferentes
>    maior que
<    menor que
>=   maior ou igual
<=   menor ou igual

*/

/*
  Operadores de lógicas 

  && "e"lógico " quando quer que as duas afirmação são verdadeiras"
  || "ou" lógico " só precisaq que uma das afirmação sejam verdadeiras "
  ! "não" lógico " quando quer acessar o dado aposto ao não logico  EX : false ou true , o resultado seria inverso "

*/

/*
condicional ternário > condicional ? expressão : expressão 

*/

function A (a, b){

    var saoIguais = a === b ;

    var somaNumeros = a + b ;

    if(saoIguais){
        return "São iguais !";
    }
    return "são são iguais !";

}

// if ternário 

function compararNumeros(num1, num2){
    const saoiguais = num1 === num2 ;
    const soma = num1 + num2;

    return saoiguais ? "São iguais" : "Não são iguais";
}

function B( value1, valu2){
    const primeiraFrase = criaPrimeiraFrase(value1, valu2);
}