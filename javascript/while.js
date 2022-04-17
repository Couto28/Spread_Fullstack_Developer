// executa uma instrução até que a condição seja falsa ...EX

function exempleWhile(){
    let num = 0;

    while(num <= 5){
        console.log(num)
        num ++
    }
}
exempleWhile();  // nao atribui valor .


// do While 

function exempleWhile(){
    let num = 6;


    do{
        console.log(num)
        num ++
    } while(num <= 5){       // satisfaz a condição .
    }
}
exempleWhile();