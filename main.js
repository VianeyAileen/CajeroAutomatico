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


var usuarioSeleccionado;

continuar.addEventListener('click', validarUsuario);
continuar.addEventListener('click', pruebaValidarC);
btnConsulta.addEventListener('click', consulta);
btnIngresa.addEventListener('click', ingresa);


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

function pruebaValidarC()
{
    
    for(var i=0; i<cuentas.length; i++){
        if(cuentas[i].nombre === usuarioSeleccionado){
            if(cuentas[i].password === password.value){
                //window.location.href =  '../vistas/home.html';   
                vistaHome.style.display = "block";
                vistaLogin.style.display = "none";

            }else{
                console.log("Contraseña incorrecta");
                password.value = '';
                password.focus();
            }
            
        }
        
    }
}

function consulta(){
        var saldo;
        for(var i=0; i<cuentas.length; i++){
            if(cuentas[i].nombre === usuarioSeleccionado){
              // usuario = i;
               saldo = cuentas[i].saldo;
                
            }
            
        }
        Swal.fire({
            icon: 'info',
            title: 'Tu saldo actual es:',
            text: '$' + saldo + '.00 MXN',
        })
}

function ingresa() {
    var saldoIngresado = 0;
    var saldoIngresadoo = 0;
    for(var i=0; i<cuentas.length; i++){
        if(cuentas[i].nombre === usuarioSeleccionado){
            const { value: saldo } = Swal.fire({
                title: 'Ingresa el monto',
                input: 'text',
                inputPlaceholder: 'Monto'
            })   

            console.log({value:saldo})
            saldoIngresado = saldo;
            saldoIngresadoo = parseFloat(saldoIngresado)
            console.log(saldoIngresadoo)



            
            if(saldo){
                console.log(saldo)
                cuentas[i].saldo+=saldoIngresado;
                Swal.fire(`Saldo actual: ${saldo}`)
            }
        }            
    }
}

/*
console.log('entre')
            var saldoNuevo = saldo
            saldoIngresado = parseFloat(saldoNuevo)
            console.log(saldo)
            cuentas[i].saldo+=saldoIngresado;
            Swal.fire(`Saldo actual: ${saldo}`)
*/