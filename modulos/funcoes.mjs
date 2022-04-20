function mostraIdade(nome,idade){
    return `A idade de ${nome} é ${idade}`;

}
function mostraCidade(nome,cidade){
    return `A cidade de ${nome} é ${cidade}`;

}
function mostraHobby(nome, hobby){
    return `O hobby de ${nome} é ${hobby}`;

}

export  {          // export deve levar os nomes de todas as function
    mostraIdade,
    mostraCidade,
    mostraHobby
};

// Para mostrar as informações é necessário abrir pelo console do navegador / browser.