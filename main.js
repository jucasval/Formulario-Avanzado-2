var form = document.getElementById("form");
var usuario = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    var usuarioValue = usuario.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();

    if (usuarioValue === "") {
        setErrorFor(usuario, "El campo usuario es obligatorio");
    } else {
        setSuccessFor(usuario);
    }

    if (emailValue === "") {
        setErrorFor(email, "El campo email es obligatorio");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Introduzca un email válido");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "El campo password es obligatorio");
    } else {
        setSuccessFor(password);
    }

    if (password2Value === "") {
        setErrorFor(password2, "El campo password es obligatorio");
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "Las passwords no coinciden");
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    var formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
}

