const validacion = document.getElementById('valid')
validacion.style.display = 'none'
const ingresar = document.getElementById('validacion')
//ingresar.style.display = 'none'

const nombre = document.getElementById('name')
const email = document.getElementById('email')
const clave = document.getElementById('password')
const form = document.getElementById('ingresar')
const parrafo = document.getElementById('warnings')

form.addEventListener("click", e=>{ 
    e.preventDefault()
    let warnings=""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.value.length<6){

       warnings+=`el nombre no es valido <br>`
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `el email no es valido <br>`
        entrar = true
    }

    
    if(clave.value.length<8){
    warnings+=`la contraseña no es valida <br>`
    entrar =true
    }

    if(entrar==true){
        parrafo.innerHTML= warnings
    }

    else{
        validacion.style.display = 'grid'
        ingresar.style.display = 'none'
    }

})



