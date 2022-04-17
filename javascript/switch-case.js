// Equivale a uma comparação do tipo e valor
// Ele sempre precisa de um valor default
//ideal para quando se precisa comprar muitos valores.

function getAnimal(id){
switch(id) {
    case 1 :
        return "Cão";
    case 2 :
        return "Gato";
    case 3 :
        return "Coelho";
    default:
        return "Peixe";
    }
}
getAnimal(1);
getAnimal(2);
getAnimal(3);
getAnimal();
