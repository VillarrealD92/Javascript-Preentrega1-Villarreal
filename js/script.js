// SALUDO
alert("Bienvenido al medidor de indice de masa corporal, dale aceptar para iniciar sesion")

// VARIABLES INICIO SESION
const USUARIO = "CODER"
const CONTRASENIA  = "CODER"
let user  
let pass
let intentos; 
const MAX_INTENTOS = 3

// FUNCION DE INDICE DE MASA CORPORAL
function imc(height, weight){
    
    return weight / ((height/100) * (height/100))
}

// INICIO DE SESION


for (intentos = 1; intentos <= MAX_INTENTOS; intentos++) {
  user = prompt("Indique su usuario")
  pass = prompt("Indique su contraseña")

  if (USUARIO === user && CONTRASENIA === pass) {
    break
  }
}

if ((USUARIO === user) && (CONTRASENIA === pass) ) {
    alert("Bienvenido CODER, comencemos, dale a aceptar para continuar")

    // VARIABLE REPETIR CALCULO
    let repetir = true

    // INDICE DE MASA
    while (repetir){
        let altura = Number(prompt("Indica tu altura en Centimetros"))
        let peso = Number(prompt("Indica tu peso en Kgs"))
    
        let resultado = imc(altura, peso)
        
        // RESULTADO POR CONSOLA
        console.log(resultado)

        if (resultado < 18) {
            alert("Estas abajo de tu peso ideal, consulta a un profesional y sigue sus indicaciones")
        } else if (resultado >= 18 && resultado < 25) {
            alert("Felicidades, estas en tu peso ideal")
        } else if (resultado >= 25 && resultado < 30 ) {
            alert("Cuidado, estas un poco encima de tu peso ideal")
        } else {
            alert("Estas dentro del rango de obesidad, consulta a un profesional y sigue sus indicaciones")
        }   

        // PREGUNTA PARA REALIZAR EL CALCULO DE NUEVO
        let respuesta = prompt("¿Deseas calcular el Indice de Masa Corporal nuevamente? Si - No").toLowerCase()
        if (respuesta === "no") {
            repetir = false
            alert("Gracias por utilizar el medidor de índice de masa corporal. ¡Hasta luego!")
          } else if (respuesta !== "si") {
            alert("Respuesta inválida. Por favor, responde con 'Si' o 'No'.")
          }
    }
    
} else {
    alert("Usuario y/o contraseña incorrectos. Refresca la pagina para intertarlo de nuevo")
}