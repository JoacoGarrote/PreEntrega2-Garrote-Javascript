
// Arrays

const medicosDisponibles = [
    {
        doctor: "Ramírez, Juan",
        especialidad: "Cardiologia",
        horario: "15.30",
    },
    {
        doctor: "Sanchez, Carol",
        especialidad: "Pediatria",
        horario: "12.45",

    },
    {
        doctor: "Torres, Analía",
        especialidad: "Neurologia",
        horario: "09.15",
    },
    {
        doctor: "Villalba, Miguel",
        especialidad: "Traumatologia",
        horario: "19.00",
    },
    {
        doctor: "Santore, Favio",
        especialidad: "Reumatologia",
        horario: "11.30",
    },
    {
        doctor: "Gabilano, María Inés",
        especialidad: "Endocrinologia",
        horario: "17.00",
    },

]


// Variables

let verdad = true
let arrMedicos = []

//Lets del inicio

let nombre = prompt("¡Bienvenido a Docturno, por favor completa los siguientes datos para ingresar a nuestro sitio: \n Tu nombre:")
let apellido = prompt("Tu apellido:")
let edad = prompt("Tu edad:")
let documento = prompt("Tu numero de documento (puede ser DNI argentino o pasaporte extranjero):")

// Constructores

class nuevoMedico {
    constructor(doctor, especialidad, horario) {
        this.doctor = doctor
        this.especialidad = especialidad
        this.horario = horario
    }
}

// Pusheo los medicos ya existentes

function puseharMedicosDisponibles() {
    for (const element of medicosDisponibles) {
        arrMedicos.push(new nuevoMedico(element.doctor, element.especialidad, element.horario))
    }
}
puseharMedicosDisponibles()


// Ingreso al sitio

// Registro del inicio

questInicio()
function questInicio() {
    while (verdad) {
        if (nombre === "" || apellido === "" || edad === "" || documento === "") {
            alert("Hay uno de los valores incompleto, por favor vuelva a ingresarlo:")
            nombre = prompt("¡Bienvenido a Docturno, por favor completa los siguientes datos para ingresar a nuestro sitio: \n Tu nombre:")
            apellido = prompt("Tu apellido:")
            edad = prompt("Tu edad:")
            documento = prompt("Tu numero de documento (puede ser DNI argentino o pasaporte extranjero):")
        } else {
            inicioPagina()
        }
    }
}



// Funciones

// console.log(arrMedicos)

function inicioPagina() {
    while (verdad) {
        let bienvenidaWeb = prompt(`¡Hola, ${nombre}! \n A continuacíon, dispones de acciones que te ayudaran a navegar el sitio web, por favor eliga alguna: \n 1) Mostrar tu perfil ingresado:  \n 2) Mostrar médicos disponibles: \n 3) Buscar especialidades existentes: \n 4) Consultar métodos de pago de turno: \n 11) Salir del sistema:  \n ---------------------------------------------- \n SOLO PARA PERSONAL MÉDICO \n 6) Soy nuevo empleado y quiero registrarme en el sistema`)
        switch (bienvenidaWeb) {
            case "1":
                verPerfil()
                break
            case "2":
                verMedicosDisponibles()
                break
            case "3":
                buscadorEspecialidades()
                break
            case "4":
                consultarPagoDeTurno()
                break
            case "6":
                registrarseComoMedico()
                break
            case "11":
                verdad = false
                break
        }
    }
}

// Funciones

function registrarseComoMedico() {
    alert("¡Bienvenido! Estás ingresando a la sección de registro para el personal. \n Por favor LEA ATENTAMENTE LOS PASOS A SEGUIR para evitar errores:")
    let doctor = prompt("Introducí tu APELLIDO primero, luego tu NOMBRE como se indica debajo en el ejemplo: \n Ej: Pérez, Matías")
    let especialidad = prompt("Indicá la ESPECIALIDAD a la que te dediques, comenzando con MAYUSCULAS y SIN TILDE: ")
    let horario = prompt("Indica un HORARIO ESPECÍFICO UNICO en el que puedas atender, de manera tal: hh.mm \n Ej: 09.30")
    while (verdad) {
        if (doctor == "" || especialidad == "" || horario == "") {
            alert("Se ha omitido ingresar un valor en especial, por favor revise y vuelva a intentar")
            doctor = prompt("Introducí tu APELLIDO primero, luego tu NOMBRE como se indica debajo en el ejemplo: \n Ejemplo: Pérez, Matías")
            especialidad = prompt("Indicá la ESPECIALIDAD a la que te dediques, comenzando con MAYUSCULAS y SIN TILDE: ")
            horario = prompt("Indica un HORARIO ESPECÍFICO UNICO en el que puedas atender, de manera tal: hh.mm \n Ej: 09.30")
        } else {
            let nuevoDoctorLet = new nuevoMedico(doctor, especialidad, horario)
            arrMedicos.push(nuevoDoctorLet)
            console.log(arrMedicos)
            inicioPagina()
        }
    }
}



function verMedicosDisponibles() {
    buscadorMedicosDisponibles(arrMedicos, alert)
    alert("No hay mas médicos disponibles en este momento")
    inicioPagina()
}

function buscadorMedicosDisponibles(arrMedicos, fn) {
    for (const el of arrMedicos) {
        fn(el.doctor + " // Area de " + el.especialidad + " // Con horario " + el.horario + "hs.")
    }
}

function verPerfil() {
    alert(`Tu perfil es: \n Nombre: ${nombre} \n Apellido: ${apellido} \n Edad: ${edad} \n Tu documento/pasaporte extranjero: ${documento}`)
    inicioPagina()
}

function buscadorEspecialidades() {
    let espABuscar = prompt("Por favor, ingrese la especialidad que desea buscar, se requiere que la primera letra sea en MAYUSCULAS y no debe incluir TILDE en la palabra:")
    let espBuscando = arrMedicos.find((espeFind) => {
        return espeFind.especialidad === espABuscar
    })
    if (espBuscando) {
        alert(`La especialidad que buscaste ----> ${espABuscar + " "}; EXISTE en nuestra base de datos, es atendida por ${espBuscando.doctor} a las ${espBuscando.horario}hs.`)
    } else {
        alert(`La especialidad que buscaste ----> ${espABuscar + " "}; NO SE HA ENCONTRADO ni esta disponible en nuestra base de datos.`)
    }
}


function consultarPagoDeTurno() {
    while (verdad) {
        let valorMinimoLegal = 4000
        let valorAgregadoPago = 0
        let valorTotSinInt = 0
        let interes = 0
        let menuDePagoSwitch = prompt("Como indica la ley 12.345, establecida por el Ministerio de Salud, el monto minimo de consulta es de -pesos- $4000; y dependiendo del plan de salud, se aplicarán distintos valores y formas de pago; dependiendo del plan obtenido: \n A continuacion se indican precios mas planes de salud: \n 1) Swiss Medical Group \n 2) Galeno \n 3) Medifé \n 4) IAPOS (Instituto Autarquico Provincial) \n 5) PAMI (Programa de Atencion Medica Integral) \n 6) Plan de salud PRIVADO* \n 11) Volver al menu principal \n \n *Adecuados segun los Términos especificos® de cada uno, de acuerdo a sus bases y condiciones™")
        switch (menuDePagoSwitch) {
            case "1":
                valorAgregadoPago = 3850
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 18
                alert(`El valor total del turno con SWISS MEDICAL GROUP es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break
            case "2":
                valorAgregadoPago = 1250
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 12
                alert(`El valor total del turno con GALENO es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break
            case "3":
                valorAgregadoPago = 1500
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 14
                alert(`El valor total del turno con MEDIFÉ es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break
            case "4":
                valorAgregadoPago = 975
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 20
                alert(`El valor total del turno con IAPOS es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break
            case "5":
                valorAgregadoPago = 1100
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 24
                alert(`El valor total del turno con PAMI es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break
            case "6":
                valorAgregadoPago = 2250
                valorTotSinInt = valorMinimoLegal + valorAgregadoPago
                interes = valorTotSinInt / 12
                alert(`El valor total del turno con un PLAN PRIVADO DE SALUD es de $${valorTotSinInt}, donde se añade valor agregado de $${valorAgregadoPago} mas un interes de $` + Math.floor(interes))
                break

            case "11":
                inicioPagina()
                break
        }
    }

}

// Intento de calculador de cuotas en base a lo de arriba, no logre hacerla.

// function cuotasPagoDeTurno() {
//     let interes = 0
//     let valorFinalConsCuotas = 0
//     let cuotas = prompt("A continuación, elegí la cantidad de cuotas, el sistema te devolverá el interés. \n 1) 2 cuotas c/interés \n 2) 4 cuotas c/interés \n 2) 9 cuotas c/interés \n 2) 12 cuotas c/interés")
//     switch (cuotas) {
//         case "1":
//             valorFinalConsCuotas = valorFinalConsulta * 0.04 + valorFinalConsulta
//             interes = valorFinalConsCuotas / 2
//             alert = (`El valor total del pago del turno es de: \n $${valorFinalConsCuotas} en 2 cuotas con valor: ${interes}.`)
//             break
//         case "2":
//             valorFinalConsCuotas = valorFinalConsulta * 0.08 + valorFinalConsulta
//             interes = valorFinalConsCuotas / 4
//             alert = (`El valor total del pago del turno es de: \n $${valorFinalConsCuotas} en 4 cuotas con valor: ${interes}.`)
//             break
//         case "3":
//             valorFinalConsCuotas = valorFinalConsulta * 0.12 + valorFinalConsulta
//             interes = valorFinalConsCuotas / 8
//             alert = (`El valor total del pago del turno es de: \n $${valorFinalConsCuotas} en 8 cuotas con valor: ${interes}.`)
//             break
//         case "4":
//             valorFinalConsCuotas = valorFinalConsulta * 0.16 + valorFinalConsulta
//             interes = valorFinalConsCuotas / 12
//             alert = (`El valor total del pago del turno es de: \n $${valorFinalConsCuotas} en 12 cuotas con valor: ${interes}.`)
//             break
//     }
// }


inicioPagina()