let credencial = "PJ"

if (credencial == "visitante") {
    console.log("Você só pode ior onde o seu anfitrião for.");
}
else if (credencial == "estagiário") {
    console.log("Você pode acessar as baias de trabalho e refeitório.");
 
}
else if (credencial == "aprendiz") {
    console.log("Você pode acessar as áreas de lazer, baias e refeitório.");
 
}
else if (credencial == "CLT") {
    console.log("Você pode acessar tudo exceto a diretoria.");
 
}
else if (credencial == "CEO") {
    console.log("O céu é o limite.");
 
}
else if (credencial == "Desligada") {
    console.log("LILI CANTOU! VOA FIH.");
}
else{
    console.log("Credencial inválida. ACESSO NEGADO!");
}