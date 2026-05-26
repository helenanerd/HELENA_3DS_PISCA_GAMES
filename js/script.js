function verificarLogin(){
let login = document.getElementById("login").value;
let senha = document.getElementById("senha").value;

if (login==="moranguinho" && senha=== "senha123"){
    alert("Bem vindo!");
    window.location.href="gaymes.html";
} 
else {
    alert("senha incorreta!");
}

login = document.getElementById("login").value='';
senha = document.getElementById("senha").value='';

}