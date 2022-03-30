var cuentas = [
    { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
    { nombre: "Manuel", saldo: 290, password: 'l33t' },
    { nombre: "1", saldo: 67, password: '1' }
];

var user = document.getElementById('username')
var password = document.getElementById('password')
var continuar = document.getElementById('btn_continuar')
var vistaHome = document.getElementById("home");
var vistaLogin = document.getElementById("login");
var btnConsulta = document.getElementById('btn_consulta')
var btnIngresa = document.getElementById('btn_ingresa')
var btnRetira = document.getElementById('btn_retira')
var btnSalir = document.getElementById('btn_salir')


var usuarioSeleccionado;

continuar.addEventListener('click', validarUsuario);
continuar.addEventListener('click', pruebaValidarC);
btnConsulta.addEventListener('click', consulta);
btnIngresa.addEventListener('click', ingresa);
btnRetira.addEventListener('click', retira);
btnSalir.addEventListener('click', salir)

var globalTotal = 0
var reglaTotales = 0

function validarUsuario() {
    switch (user.value) {
        case 'Hiromi':
            usuarioSeleccionado = user.value;
            pruebaValidarC
            break;

        case 'Manuel':
            usuarioSeleccionado = user.value;
            pruebaValidarC
            break;

        case '1':
            usuarioSeleccionado = user.value;
            pruebaValidarC
            break;

        default:
            console.log('El usuario no existe')
            break;
    }
}

function pruebaValidarC() {

    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === usuarioSeleccionado) {
            if (cuentas[i].password === password.value) {
                //window.location.href =  '../vistas/home.html';   
                vistaHome.style.display = "block";
                vistaLogin.style.display = "none";

            } else {
                console.log("Contraseña incorrecta");
                password.value = '';
                password.focus();
            }

        }

    }
}

function salir() {
    window.location.href = '../vistas/user.html';
    // user.value = '';
    // user.focus();
    // password.value = '';
}

function consulta() {
    var saldo;
    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === usuarioSeleccionado) {
            //    saldo = cuentas[i].saldo;  
            if (globalTotal == 0) {
                Swal.fire({
                    icon: 'info',
                    title: 'Tu saldo actual es:',
                    text: '$' + cuentas[i].saldo + '.00 MXN',
                })
            } else {
                cuentas[i].saldo = globalTotal

                Swal.fire({
                    icon: 'info',
                    title: 'Tu saldo actual es:',
                    
                    text: '$' + cuentas[i].saldo + '.00 MXN',
                })
            }
        }
    }
}

function ingresa() {
    var saldoIngresado = 0

    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === usuarioSeleccionado) {
            var saldoActual = cuentas[i].saldo
            // var nuevoSaldo = 0
            Swal.fire({
                title: "Ingresa un monto",
                input: 'text',
            }).then((result) => {
                saldoIngresado = result.value
                saldoIngresado = parseFloat(saldoIngresado)
                if(globalTotal == 0){
                    reglaTotales =  saldoActual + saldoIngresado
                }else{
                    reglaTotales = globalTotal + saldoIngresado
                }
                
                if( reglaTotales > 990){
                    Swal.fire({
                            icon: 'warning',
                            title:'Aviso',
                            text: 'Al ingresar esa cantidad rebasa el limite',
                        })
                }else{
                    globalTotal = saldoActual += saldoIngresado
                    
                    if (saldoIngresado) {
                        Swal.fire({
                            title: 'Saldo ingresado?',
                            text: '$' + saldoIngresado + '.00 MXN',
                            icon: 'info',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Okay'
                          }).then((result) => {
                            if (result.isConfirmed) {
                                consulta()
                            }
                        })                      

                        // Swal.fire({
                        //     title:'Tu monto actual es',
                        //     text: '$' + globalTotal + '.00 MXN',
                        // }).then(() =>{
                        //     nuevoSaldo = globalTotal
                        //     console.log('segunda promesa, ' + nuevoSaldo)

                        // });

                    }
                }
                
            });

        }
    }
}

function retira() {
    var saldoIngresado = 0

    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === usuarioSeleccionado) {
            var saldoActual = cuentas[i].saldo
            Swal.fire({
                title: "¿Qué cantidad desea retirar?",
                input: 'text',
            }).then((result) => {
                saldoIngresado = result.value
                saldoIngresado = parseFloat(saldoIngresado)

                if(globalTotal == 0){
                    reglaTotales =  saldoActual - saldoIngresado
                }else{
                    reglaTotales = globalTotal - saldoIngresado
                }

                if (reglaTotales < 10) {
                    Swal.fire({
                        icon: 'warning',
                        title:'Aviso',
                        text: 'No puedes tener menos de $10.00 MXN en tu cuenta',
                    })
                } else {
                    globalTotal = saldoActual -= saldoIngresado

                    if (saldoIngresado) {
                        Swal.fire({
                            title: 'Monto a retirar',
                            text: '$' + saldoIngresado + '.00 MXN',
                            icon: 'info',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Okay'
                          }).then((result) => {
                            if (result.isConfirmed) {
                                consulta()
                            }
                        }) 

                    }
                }
            });

        }
    }
}