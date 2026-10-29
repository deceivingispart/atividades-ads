const total = parseFloat(prompt("Qual o valor total da conta consumida na mesa?"))
const divisao = prompt("Em quantas pessoas a conta vai ser dividida?")

const res = total / divisao

alert(
    "Resumo da Conta \n" +
    `Consumo: R$ ${total.toFixed(2)}\n` +
    `Divisão por pessoa (${divisao} pessoas) R$ ${res.toFixed(2)}`
)