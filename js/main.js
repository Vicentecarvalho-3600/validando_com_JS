const form = document.querySelector("#from");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

// console.log(form, nameInput, emailInput, passwordInput, jobSelect, messageInput);

form.addEventListener("submit", (event) =>{

    event.preventDefault();
    // verficar se esta vazio.
    if(nameInput.value === ""){
        alert("por favor, preencha seu Nome!");
        return;
    }

    if(emailInput.value === ""|| !isEmailValid(emailInput.value)){
        alert("por favor, preencha seu E-mail!");
        return;
    }

    if(!isPasswordValid(passwordInput, 8)){
        alert("A senha precisa ser no mímimo 8 digitos.");
        return;
    }

    if(jobSelect.value === ""){
        alert("Por favor selecione sua situação.")
        return;
    }

    if(messageTextarea.value === ""){
        
    }
// 
    // se todos os campos estiverem corretamente preenchidos, envie form
    form.submit();
})

// funcao de validar email
function isEmailValid(email){

    // cria um regex para valida
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/
    );
    
    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

function isPasswordValid(password, minDigits){
    if(password.lenght >= minDigits){
        return true;
    }

    return false;
}