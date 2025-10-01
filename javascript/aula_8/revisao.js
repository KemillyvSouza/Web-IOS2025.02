let login = prompt("Insira o seu e-mail:")
let senha = prompt ("Insira sua senha:")

let loginCerto = "kemilly@gmail.com"
let senhaCerta = "catapimbas"

// validar se login é o login certo e se a senha tambem é
if (login == loginCerto && senha == senhaCerta) {
    alert ("Credencial Validada")

    alert ("Opção 1: Crédito\n Opção 2: Consignado\n Opção 3: Empréstimo\n Opção 4: Renegociar\n Opção 0: falar com atendimento")
 
    let opcao = Number (prompt ("escolha uma opção:"))   
    switch (opcao) {
        case 1:
            alert ("Você selecionou Crédito. Redirecionando ao canal responsável!")
            break;
        case 2:
            alert ("Você selecionou 'Consignado'. Redirecionando ao canal responsável!")
            break;           
        case 3:
            alert ("Você gostaria de realizar um empréstimo. Redirecionando ao canal responsável!")
            break;    
        case 4:
            alert ("Você gostaria de renegociar. Redirecionando ao canal responsável!")
            break;   
  
  
            case 0:
            alert ("Você quer falar com um de nossos atendentes. Redirecionando ao canal responsável!")
            break;  
        default:
            alert ("Opção inválida. Encerrando atendimento")
            break;
    }
}
// Se o login e a senha que o usuário inseriu não forem iguais a que temos, ele nao pode fazer login no app
else{
    alert ("login ou senha incorretos!")
}