let login
let senha

let loginCerto = "Kemilly"
let senhaCerta = "Catapimbas"

//enquanto a senha que o usuário inserir for diferente da 
// senha certa continuaremos pedindo para que ele insira a senha novamente.
// Do = faça e while = enqunato. o que dá nome a estrutura dowhile, ou seja, faça enquanto.
// Dowhile executa o código uma vez antes de fazer a comparação
// peça a senha pelo menos uma vez, e caso o usuário não 
do {
    login = prompt("seu email:")
    senha = prompt("sua senha:")
} while (login != loginCerto && senha != senhaCerta);


//while (senha != senhaCerta) {
  //  senha = prompt("sua senha:")
//}