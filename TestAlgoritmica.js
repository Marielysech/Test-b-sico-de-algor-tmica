// 1.	Escriba un algoritmo que lea un número entero y determine si es par o impar. Si es par, que escriba todos los pares de manera descendiente desde sí mismo y hasta el cero. Si es impar, que escriba todos los impares de manera descendiente desde si sí mismo hasta el uno. Utilice la instrucción LEER NUMERO al inicio del programa para cargar un número en la variable NUMERO.

function leerNumero (number) {
    if (typeof(number) !== 'number') return 'Please enter a number';
    const numberArr = []
    let parOrImpar = 'impar'
    if (number % 2 === 0) parOrImpar = 'par'
    for (i=number; i>=0; i--) {
        numberArr.push(i)
        i--
    }
    console.log(parOrImpar)
    numberArr.forEach( item => console.log(item))
}

leerNumero(5) // 5 3 1
leerNumero(10) // 10 8 6 4 2  
leerNumero(0) // 0
leerNumero('test') // not a number
 
