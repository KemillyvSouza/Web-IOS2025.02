// Abaixo de 18,5: Baixo peso.
// Entre 18,5 e 24,9: Peso normal (ou eutrófico).
// Entre 25 e 29,9: Sobrepeso.
// 30 ou mais: Obesidade.

let pessoas = 10

for (let vezes = 1; vezes <= pessoas ; vezes++) {
    
    let peso = Number(prompt("seu peso"))
    let altura = Number(prompt("sua altura"))
    let imc = peso / (altura * altura)

    if (imc <= 18.5) {
        alert("você está abaixo do peso "  )
    } else if (imc <= 24.9) {
        alert("você está no peso ideal")
    } else if (imc <= 29.9) {
        alert("você está sobrepeso")
    } else  {
        alert("você está obeso")
    }
} 

  