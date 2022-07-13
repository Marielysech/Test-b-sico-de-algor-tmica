// 3.	Desarrolle un algoritmo para el cálculo del salario de un trabajador. El importe liquidado (sueldo) depende de una tarifa o precio por hora establecida y de un condicionante sobre las horas trabajadas: si la cantidad de horas trabajadas es mayor a 40 horas, la tarifa se incrementa en un 50% para las horas extras. Calcular el sueldo recibido por el trabajador en base las horas trabajadas y la tarifa. Utilice las instrucciones LEER HORASTRABAJADAS y LEER TARIFA al inicio del programa para cargar los valores en las variables HORASTRABAJADAS y TARIFA

// @hoursWorked: number of hours worked
// @rate: base earning per hour
// fill those two variables to caculate final wage

function caculateWage(hoursWorked, rate) {

    let finalWage = 0

    if ( hoursWorked > 40) {
        const overtime = hoursWorked - 40
        finalWage = (40 * rate) + (overtime * (rate *1.5))
        return finalWage
    }

    finalWage = hoursWorked * rate

    return `${finalWage} euros`
}

// test results

console.log(caculateWage(35, 10)) // 350euros
console.log(caculateWage(45, 10)) // 475euros
console.log(caculateWage(60, 7)) // 490euros
