let cuentas = [
    { nombre: 'gloria', pass: 1234, saldo: 200 },
    { nombre: 'daniela', pass: 5678, saldo: 290 },
    { nombre: 'mateo', pass: 9012, saldo: 67 },
    { nombre: 'claudia', pass: 4321, saldo: 20 },
    { nombre: 'carlos', pass: 8765, saldo: 670 },
    { nombre: 'juan', pass: 2109, saldo: 520 },
    { nombre: 'manuela', pass: 1357, saldo: 339 },
    { nombre: 'camilo', pass: 9753, saldo: 105 },
    { nombre: 'andres', pass: 2468, saldo: 72 },
    { nombre: 'patricia', pass: 2864, saldo: 487 },
]; 


const loginForm = document.querySelector('#loginForm')
const inputUser = document.querySelector('#userName')
const inputPass = document.querySelector('#userPass')
const errorMsj = document.querySelector('.errorUsuario')
const errorMsjDeposito = document.querySelector('.errorUsuarioDeposito')
const errorMsjRetiro = document.querySelector('.errorUsuarioRetiro')
const userContainer = document.querySelector('#userContainer')
const showName = document.querySelector('.showName')
const showSaldo = document.querySelector('.showSaldo')
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
const continuarSinFondosAtm = document.querySelector('.continuarSinFondosAtm')
const continuarSinFondosCuenta = document.querySelector('.continuarSinFondosCuenta')
const mensajeConfirmacionRetiro = document.querySelector('.mensajeConfirmacionRetiro')
const continuarRetiroExito = document.querySelector('.continuarRetiroExito')

continuarRetiroExito

let userId
let total = 0



