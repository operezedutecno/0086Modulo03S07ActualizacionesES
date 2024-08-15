// let parrafo = `
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iure distinctio non vel illo? 
//     Asperiores odit, provident laudantium neque animi magni optio, quasi odio explicabo architecto 
//     ducimus necessitatibus, eligendi dolore Lorem ipsum.`

// console.log(parrafo);


// var rep = parrafo.replace("Lorem", "Testing")
// var repAll = parrafo.replaceAll("Lorem", "Testing")

// console.log("replace", rep);
// console.log("replaceAll", repAll);

// Función TRIM elimina espacios en blanco al inicio y final de la cadena.
// var texto = "     Prueba de cadenas de caracteres "
// console.log("trim",texto.trim()) // Salida: "Prueba de cadenas de caracteres"

// Función TRIMSTART elimina espacios en blanco al inicio de la cadena.
// console.log("trimStart",texto.trimStart()) // Salida: "Prueba de cadenas de caracteres ""

// Función TRIMEND elimina espacios en blanco al final de la cadena.
// console.log("trimEnd",texto.trimEnd()) // Salida: "     Prueba de cadenas de caracteres"

// Función TOLOWERCASE convierte la cadena en mayúscula.
// console.log("toLowerCase",texto.toLowerCase()) // Salida: prueba de cadenas de caracteres 

// Función TOUPPERCASE convierte la cadena en mayúscula.
// console.log("toUpperCase",texto.toUpperCase()) // Salida: PRUEBA DE CADENAS DE CARACTERES 


var monto = 1_000_000

// Ejemplo CON separador numérico (Fácil lectura)
if(monto > 5_000_000){}

// Ejemplo SIN separador numérico (Dificil lectura)
if(monto > 5000000){}


var pacientes = [
    {
        rut: "11.111.111-1",
        nombre: "Juan",
        direccion: {
            calle: "Testing1",
            numero: 20,
            comuna: {
                nombre: "Recoleta",
                region: {
                    nombre: "Región Metropolitana"
                }
            }
        }
    },
    {
        rut: "22.222.222-2",
        nombre: "María",
        direccion: {
            calle: "Testing2",
            numero: 50,
            comuna: {
                nombre: "Santiago"
            }
        }
    }
]

// for (const item of pacientes) {
//     // if(item.direccion && item.direccion.comuna && item.direccion.comuna.region) {
//     //     var region = item.direccion.comuna.region.nombre
//     // } else {
//     //     var region = "N/A"
//     // }
//     var region = item?.direccion?.comuna?.region?.nombre || 'N/A'
//     console.log("RUT:", item.rut, "Comuna:", item.direccion.comuna.nombre, "Región:", region);
// }


// Aiganción con operador lógico OR

var cadena = "ejemplo"
cadena ||= "ejemplo2" // No asigna la cadena "ejemplo2" porque ya cadena tenía valor distinto a negativo

cadena = null
cadena ||= "ejemplo2" // Si asigna la cadena "ejemplo2" porque la variable cadena estaba en null

cadena = false
cadena ||= "ejemplo2" // Si asigna la cadena "ejemplo2" porque la variable cadena estaba en false

cadena = undefined
cadena ||= "ejemplo2" // Si asigna la cadena "ejemplo2" porque la variable cadena estaba en undefined

cadena = ""
cadena ||= "ejemplo2" // No asigna la cadena "ejemplo2" porque ya cadena tenía valor de cadena vacía pero existente

cadena = 0
cadena ||= "ejemplo2" // Si asigna la cadena "ejemplo2" porque la variable cadena estaba en cero y lo toma como falso

cadena = "0"
cadena ||= "ejemplo2" // No asigna la cadena "ejemplo2" porque ya cadena tenía valor cero pero en cadena de caracter


// Asiganción con operador lógico AND
var cadena = "ejemplo"
cadena &&= "ejemplo2" // Si asigna la cadena "ejemplo2" porque ambos son distinto a negativo

cadena = null
cadena &&= "ejemplo2" // No asigna la cadena "ejemplo2" porque la variable cadena no devuelve verdadero

cadena = false
cadena &&= "ejemplo2" // No asigna la cadena "ejemplo2" porque la variable cadena no devuelve verdadero

cadena = undefined
cadena &&= "ejemplo2" // No asigna la cadena "ejemplo2" porque la variable cadena no devuelve verdadero

cadena = ""
cadena &&= "ejemplo2" // No asigna la cadena "ejemplo2" porque la cadena vacía la asume como false

cadena = 0
cadena &&= "ejemplo2" // No asigna la cadena "ejemplo2" porque el cero lo asume como false

cadena = "0"
cadena &&= "ejemplo2" // Si asigna la cadena "ejemplo2" porque el cero en cadena de carcater (entre comillas() lo asume como true



// Ejemplos de Operador de encadenamiento opcional
var valor = null
valor = valor ?? "Nuevo" // Asigna Nuevo porque valor está como null

valor = undefined
valor = valor ?? "Nuevo" // Asigna Nuevo porque valor está como undefined

valor = false
valor = valor ?? "Nuevo" // Se queda con el valor original (false)

valor = ""
valor = valor ?? "Nuevo" // Se queda con el valor original ("")

valor = 0
valor = valor ?? "Nuevo" // Se queda con el valor original (0)