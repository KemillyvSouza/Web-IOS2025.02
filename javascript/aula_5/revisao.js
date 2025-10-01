let dinheiro = 10
let precoSorvete = 2.50
let saborEscolhido = "chocolate"

console.log("Boa noite! Bem-vindo à soverteria do Ceará!");

if (dinheiro >= precoSorvete){
    // Se o cliente tem dinheirosuficiente
    console.log("Temos os seguintes sabores: Chocolate, morango e céu-azul");
    if (saborEscolhido == "chocolate"|| "morango" || "céu-azul") {
        console.log("Aqui está seu sorvete de " + saborEscolido);
    }
    else{
        console.log("Não temos esse sabor escolhidos, desculpe-me");
    }
}
else{
    console.log("Tá pobrinho, amigo 😕");
}