const nombre = document.getElementById("name")
const email = document.getElementById("email")

const comentario = document.getElementById("comentario")

/*
const pass = document.getElementById("password")
*/
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


/* el form cuando se encie queremos q se ejecute algo */ 
form.addEventListener("submit", e=>{
    /* con esto prevenimos todo lo q viene por default, de esta manera se quedara estatico*/
    e.preventDefault()
    /*let warnings = "" esto va a ser igual a texto*/ 
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    parrafo.innerHTML = ""
    /*El nombre.value.lenght nos dice cuantas letras hay*/
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }

    if(comentario.value.length <6){
        warnings += `El comentario no es valido <br>`
        entrar = true
    }



/*Si la variable entrar es verdadera ejecutara  los textos de advertencias como se :El nombre no es valido*/
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})


