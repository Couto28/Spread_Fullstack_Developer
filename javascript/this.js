/*Sempre que uma function está dentro de um objeto , essa function passa a se chamar METODO.

Sempre que utilizar  THIS dentro desse METODO ele vi se referir ao objeto pai do METODO*/

//EX:
const pessoa = {
  firstName : " André ",
  lastName : " Soares ",
  id : 1,
  fullName : function(){     // funcção para o nome completo ;
      return this.firstName+ " " +this.lastName;
  },
  getId: function(){   // função para o id do objeto ;
      return this.id;
  }
};
pessoa.fullName();
// André Soares
pessoa.getId();
// 1

// outra forma de acesar e declarar .

const pessoa1 = {
    firstName : " Diogo ",
    lastName : " Couto ",
      getFullName : function(){
          console.log(`${this.firstName} ${this.lastName}`);  // usando Destructuring após ao this em uma metodo .
      }
};

pessoa1.getFullName();