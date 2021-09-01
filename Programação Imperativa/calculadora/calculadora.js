// Nível I

function adicionar(x, y) {
    return x + y
}

function subtracao(x, y) {
    return x - y
}

function multiplicacao(x, y) {
    return x * y
}

function divisao(x, y) {
    return x / y
}

// Nível II

console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log("Função Adicionar 10, 5: ", adicionar(10, 5))
console.log("Função Subtração 10, 5: ", subtracao(10, 5))
console.log("Função Multiplicação 10, 5: ", multiplicacao(10, 5))
console.log("Função Divisão 10, 5: ", divisao(10, 5))
console.log("Função Divisão 10, 0: ", divisao(10, 0))

// Nível III

function quadradoDoNumero(x) {
    return multiplicacao(x, x)
}

function mediaDeTresNumeros2(x, y, z) {
    let soma1 = adicionar(x, y)
    let somaTotal = adicionar(soma1, z)
    return divisao(somaTotal, 3)
    
}

function calculaPorcentagem(x, y) {
    return (multiplicacao(x, divisao(y, 100)))
}

function geradorDePorcentagem(x, y) {
    return multiplicacao(divisao(x, y), 100)
}
