// Prática de Estruturas Condicionais

/* 
    1 - Escreva uma função utilizando uma estrutura básica IF/ELSE que verifique uma senha. A senha válida é o número 1234. Devemos ser impressas as seguintes mensagens: 
        - ACESSO PERMITIDO caso a senha seja válida.
        - ACESSO NEGADO caso a senha seja inválida.
*/

function ePermitido(senha) {
    if (senha === 1234) {
        return console.log("ACESSO PERMITIDO");
    } else {
        return console.log("ACESSO NEGADO");
    }
}

ePermitido(1234)

/*
    2 - Escreva uma função utilizando a estrutura IF/ELSE IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é o menor OU se são iguais.
*/

function eMaior(x, y) {
    if (x > y) {
        console.log(`${x} é maior do que ${y}`);
    } else if (x < y) {
        console.log(`${y} é maior do que ${x}`);
    } else {
        console.log(`${x} e ${x} são iguais`);
    }
}

eMaior(6, 8)

/*
    3 - Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.
        - Exemplo: quando envio o número 9, o retorno será: 'SETEMBRO'
*/

function month(n) {
    switch (n) {
        case 1:
            console.log("JANEIRO");
            break;
        case 2:
            console.log("FEVEREIRO");
            break;
        case 3:
            console.log("MARÇO");
            break;
        case 4:
            console.log("ABRIL");
            break;
        case 5:
            console.log("MAIO");
            break;
        case 6:
            console.log("JUNHO");
            break;
        case 7:
            console.log("JULHO");
            break;
        case 8:
            console.log("AGOSTO");
            break;
        case 9:
            console.log("SETEMBRO");
            break;
        case 10:
            console.log("OUTUBRO");
            break;
        case 11:
            console.log("NOVEMBRO");
            break;
        case 12:
            console.log("DEZEMBRO");
            break;
        default:
            console.log("NÚMERO INVÁLIDO")
    }
}

month(9);

/*
    4 - Reescreva função do exercício 1, utilizando o operador ternário.
*/

function acesso(n) {
    return console.log(n === 1234 ? "ACESSO PERMITIDO" : "ACESSO NEGADO")
}
acesso(12345)