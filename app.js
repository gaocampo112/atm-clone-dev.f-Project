

const loginForm = document.querySelector('#loginForm')
const inputUser = document.querySelector('#userName')
const inputPass = document.querySelector('#userPass')
const errorMsj = document.querySelector('.errorUsuario')
const errorMsjDeposito = document.querySelector('.errorUsuarioDeposito')
const errorMsjRetiro = document.querySelector('.errorUsuarioRetiro')
const userContainer = document.querySelector('#userContainer')
const showName = document.querySelector('#showName')
const showSaldo = document.querySelector('#showSaldo')
const salir = document.querySelector('#salir')
const depositar = document.querySelector('#deposito')
const retiroDeposito = document.querySelector('.retiroDeposito')
const retiroDepositoForm = document.querySelector('#retiroDepositoForm')
const cantidadDinero = document.querySelector('#cantidadDinero')
const cantidadDineroRetiro = document.querySelector('#cantidadDineroRetiro')
const mensajeConfirmacion = document.querySelector('.mensajeConfirmacion')
const nuevoSaldo = document.querySelector('.nuevoSaldo')
const continuar = document.querySelector('.continuar')
const dineroTotal = document.querySelector('#dineroTotalCajero')
const retirar = document.querySelector('#retiro')
const mensajeSinFondosCajero = document.querySelector('#mensajeSinFondosCajero')
const mensajeSinFondosCuneta = document.querySelector('#mensajeSinFondosCuneta')
const retiroRetiro = document.querySelector('.retiroRetiro')

let userId
let total = 0



// Validacion de usuario y contrasena para ingresar
function ingresar(e){
    e.preventDefault()
    for(let i = 0; i < cuentas.length; i++){
        
        if(cuentas[i].nombre == inputUser.value.toLowerCase() && cuentas[i].pass == inputPass.value){
            loginForm.style.display = "none"
            userId = i;
            showName.innerText = "Hola " + cuentas[i].nombre + "."
            showSaldo.innerText = "Saldo = $" + cuentas[i].saldo
            userContainer.style.display = "flex"
            errorMsj.style.display = "none"
            return
        }
    }
    errorMsj.style.display = "flex"
    inputUser.value = ""
    inputPass.value = ""

} 

loginForm.addEventListener('submit', ingresar)



// funcion para salir de la cuenta

function salirMenu(){
    userContainer.style.display = "none"
    inputUser.value = ""
    inputPass.value = ""
    errorMsj.style.display = "none"
    loginForm.style.display = "flex"  
}

salir.addEventListener('click', salirMenu)



//funcion para entrar al menu de deposito
function agregarDinero()
{
    userContainer.style.display = "none"
    retiroDeposito.style.display = "flex"
}

depositar.addEventListener('click', agregarDinero)



//funcion para enviar el deposito

function confirmarDeposito(e){
    e.preventDefault();
    if(cantidadDinero.value != "")
    {
        cuentas[userId].saldo += parseInt(cantidadDinero.value)
        total += parseInt(cantidadDinero.value)
        dineroTotal.innerText = "Dinero disponible en el cajero = $" + total;
        cantidadDinero.value = ""
        errorMsjDeposito.style.display = "none"
        showSaldo.innerText = "Saldo = $" + cuentas[userId].saldo
        retiroDeposito.style.display = "none"
        mensajeConfirmacion.style.display = "flex"
        nuevoSaldo.innerText = "Nuevo Saldo = $" + cuentas[userId].saldo
        return
    }
    errorMsjDeposito.style.display = "flex"
}

retiroDeposito.addEventListener('submit', confirmarDeposito)



//funcon para continuar y regresar al menu principal

function continuarMenu(){
    mensajeSinFondosCuneta.style.display = "none"
    mensajeSinFondosCajero.style.display = "none"
    mensajeConfirmacion.style.display = "none"
    userContainer.style.display = "flex"
}

continuar.addEventListener('click', continuarMenu)



// Sumar el total del dinero de todos los usuarios al cargar la pagina

document.addEventListener("DOMContentLoaded", function(event){
    function dineroDisponible(){
        for(let i = 0; i < cuentas.length; i++){
            total += cuentas[i].saldo
            
        }        
        return total;
    }
    dineroTotal.textContent = "Dinero disponible en el cajero = $" + dineroDisponible();
})


//funcion para entrar al menu de retiro
function quitarDinero()
{
    userContainer.style.display = "none"
    retiroRetiro.style.display = "flex"
}

retirar.addEventListener('click', quitarDinero)



//funcion para enviar el retiro

function confirmarRetiro(e){
    e.preventDefault();
    if(typeof cantidadDineroRetiro.value === "number")
    {
        if(cantidadDineroRetiro.value != ""){
            if(parseInt(cantidadDineroRetiro.value) > total){
                retiroRetiro.style.display = "none"
                mensajeSinFondosCajero.style.display = "flex"
                cantidadDineroRetiro.value = ""
                return
            }
            else if(parseInt(cantidadDineroRetiro.value) > cuentas[userId].saldo)
            {
    
    
    
                cantidadDineroRetiro.value = ""
            }
            else
            {

            }
            return
        }
    }

    errorMsjRetiro.style.display = "flex"
}

retiroRetiro.addEventListener('submit', confirmarRetiro)





// function confirmarDeposito(e){
//     e.preventDefault();
//     if(cantidadDinero.value != "")
//     {
//         cuentas[userId].saldo += parseInt(cantidadDinero.value)
//         total += parseInt(cantidadDinero.value)
//         dineroTotal.innerText = "Dinero disponible en el cajero = $" + total;
//         cantidadDinero.value = ""
//         errorMsjRetiro.style.display = "none"
//         showSaldo.innerText = "Saldo = $" + cuentas[userId].saldo
//         retiroDeposito.style.display = "none"
//         mensajeConfirmacion.style.display = "flex"
//         nuevoSaldo.innerText = "Nuevo Saldo = $" + cuentas[userId].saldo
//         return
//     }
//     errorMsjRetiro.style.display = "flex"
// }

// retiroDeposito.addEventListener('submit', confirmarDeposito)


























