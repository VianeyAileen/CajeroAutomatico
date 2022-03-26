var cuentas = [
    { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
    { nombre: "Manuel", saldo: 290, password: 'l33t' },
    { nombre: "Luis", saldo: 67, password: '123' }
  ];

var user = document.getElementById('username')
var password = document.getElementById('password')
var continuar = document.getElementById('btn_continuar')

continuar.addEventListener('click', validarUser);
password.addEventListener('click', validarPassword);

function validarUsuario() {
    switch (user.value) {
        case 'Hiromi':
                window.location.href = '../vistas/password.html';
            break;

        case 'Manuel':
            window.location.href = '../vistas/password.html';
            break;

        case 'Luis':
            location.href = '../vistas/password.html';
            break;
    
        default:
            console.log('El usuario no existe')
            break;
    }
}

// Hiromi
// function validarContrasena() {
//     cuentas.forEach(function (cuenta) {
//         if (password.value === cuenta.password) {
            
//         }
        
//     });



//Jonathan
    var usuarioElegido;
    function validarUser(){
        cuentas.forEach(function(cuenta){
            if(cuenta.nombre === user.value){
               usuarioElegido = cuenta;
               window.location.href =  '../vistas/password.html';
            }
        });
    }

    function validarPassword(){
        if(usuarioElegido.password == password.value){
            window.location.href =  '../vistas/home.html';
        }
    }


/////Omar

    function pruebaValidarC()
    {
        
        for(var i=0; i<cuentas.length; i++){
            if(cuentas[i].nombre === user.value){
                if(cuentas[i].password === password.value){
                    window.location.href =  '../vistas/home.html';   
                }
            }
            
        }
    }
    

    
