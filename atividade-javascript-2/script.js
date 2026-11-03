const consumo = Number(prompt("Qual o valor total da conta consumida na mesa?"))
const porcentagem = Number(prompt("Digite a procentagem da gorjeta"))
const pessoas = Number(prompt("Em quantas pessoas a conta vai ser dividida?"))

const gorjeta = consumo * (porcentagem / 100)
const total = consumo + gorjeta
const porPessoa = total / pessoas

alert(
    "--- Resumo da Conta --- \n" +
    `Consumo: R$ ${consumo.toFixed(2)} \n`  +
    `Gorjeta: R$ ${gorjeta.toFixed(2)} \n` +
    `Total com Gorjeta: R$ ${total.toFixed(2)} \n` +
    `Divisão por pessoa (${pessoas.toFixed(2)} pessoas): R$ ${porPessoa} \n` 
)