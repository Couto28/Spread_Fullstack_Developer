const user = {
    id: 36,
    displayName: '@D1Couto28-2022',   // declarando um objeto para a função object Destructuring .
    fullName: {
        fistname: 'Diogo',
        lastname: 'Couto'
    }
};

function getFullNAme({fullName: fist, lastname: last}){   // estrutura de uma function object Destructuring
    return `${fist} ${last}`;
}

console.log(user);