// Exercise 1 - Completo
/*
Mapeamento de Números Pares: Crie uma arrow function que recebe um array de números e retorna um novo array contendo
apenas os números pares. Teste a função com um array de números.
*/
function exercise01({number = [1, 2, 3, 4, 5]}) {
 
    const mapimpar = number.map((number) => number % 2 > 0 ?  console.log(number) : null);
}
 
// Exercise 2 - Completo
/*
Cálculo de Área de Círculo: Escreva uma arrow function que recebe o raio de um círculo e retorna a área calculada.
Utilize a fórmula area = π * raio^2. Teste a função com diferentes valores de raio.
*/
 
function exercise02({a = 3.14 , b = 15}) {
 
    const areaquadrada = (pi, raio) => (pi * (raio * raio));
 
    console.log(areaquadrada(a, b));
}
 
// Exercise 3 - Incompleto
/*
Filtragem de Palavras: Crie uma arrow function que recebe um array de palavras e um comprimento mínimo desejado.
A função deve retornar um novo array contendo apenas as palavras que têm o comprimento igual ou superior ao
especificado. Teste a função com um array de palavras e umcomprimento mínimo.
*/
function exercise03({palavras = ["Pinapple", "Banana", "Beans", "Rice", "Meee"], numero = 5}) {
 
    const maping = palavras.map((palavras) => palavras.length > numero ?  console.log(palavras) : null);
}
 
// Exercise 4 - Completo
/*
Conversão de Fahrenheit para Celsius: Escreva uma arrow function que converte uma temperatura de Fahrenheit para Celsius.
Utilize a fórmula celsius = (fahrenheit -32) * 5/9. Teste a função com diferentes temperaturas em Fahrenheit.
*/
function exercise04({f = 32}) {
    const formcelsius = (fahrenheit) => ((fahrenheit -32) * 5/9);
 
    console.log("Temperatura de Fahrenheit: " + f);
    console.log("Temperatura de Celsius: " + formcelsius(f));
}
 
// Exercise 5 - Incompleto
/*
Crie uma arrow function que recebe um array de números e retorna a soma apenas dos números ímpares. Teste a função
com um array de números.
*/
function exercise05({number = [1,2,3,4,5]}) {
 
    var soma = 0;
 
    const plusimpar = number.map((number) => {return number % 2 > 0
    ?  soma += number : null});
 
    console.log(soma);
   
}
 
 
// If you want put values you can but basement in the destruction of parameters
 
// exercise01({ });
// exercise02({ });
// exercise03({ });
// exercise04({ });
// exercise05({ });
 
 
//And Last in cmd put node script.js
//Or try in index.html