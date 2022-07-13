// 2.	Escriba un algoritmo que visualice una clasificación de 50 personas según edad y sexo. Deberá mostrar los siguientes resultados:
// a.	Cantidad de personas mayores de edad (18 años o más).
// b.	Cantidad de personas menores de edad.
// c.	Cantidad de personas masculinas mayores de edad.
// d.	Cantidad de personas femeninas menores de edad.
// e.	Porcentaje que representan las personas mayores de edad respecto al total de personas.
// f.	Porcentaje que representan las mujeres respecto al total de personas.

// Utilice la instrucción LEER PERSONAS al inicio del programa para cargar los datos de las 50 personas en un variable, PERSONAS, que actúa como un vector de 50 posiciones.
// Cada elemento de PERSONAS es de un tipo estructurado que dispone dos campos:
// SEXO y EDAD.

function leerPersonas(personasDatas) {
    const dataLength = personasDatas.length

    if (personasDatas.length > 50) return 'too many person'
    
    const mayores = personasDatas.filter(item => item.edad >= 18); // array containing all adults
    const mayoresQuantity = mayores.length; // number of people underage
    const menoresQuantity = dataLength - mayoresQuantity; // number of people underage
    const hombresMayores = mayores.filter(item => item.sexo === 'h'); // return nombre homme majeurs
    const mujeresMinores = personasDatas.filter(item => item.sexo === 'f' && item.edad < 18); // array containing all women underage
    const porcentajeMayores = (mayoresQuantity / dataLength) * 100; //percentage of adults
    const mujeres = personasDatas.filter(item => item.sexo === 'f') // array with all women
    const PorcentajeF = (mujeres.length / dataLength) * 100; //pourcentage de femme
    
    return console.log(`
    a.	Cantidad de personas mayores de edad (18 años o más) : ${mayoresQuantity},
    b.	Cantidad de personas menores de edad : ${menoresQuantity},
    c.	Cantidad de personas masculinas mayores de edad : ${hombresMayores.length},
    d.	Cantidad de personas femeninas menores de edad : ${mujeresMinores.length},
    e.	Porcentaje que representan las personas mayores de edad respecto al total de personas : ${porcentajeMayores}%,
    f.	Porcentaje que representan las mujeres respecto al total de personas : ${PorcentajeF}%,
    `)
}

const personasTest = [
    {
        sexo: 'f',
        edad: 18
    },
    {
        sexo: 'h',
        edad: 19
    },
    {
        sexo: 'h',
        edad: 10
    },
    {
        sexo: 'f',
        edad: 2
    },
    {
        sexo: 'f',
        edad: 28
    },
    {
        sexo: 'f',
        edad: 33
    },


]

leerPersonas(personasTest) 