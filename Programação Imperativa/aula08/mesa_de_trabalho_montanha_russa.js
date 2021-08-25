function podeSubir(altura, estaAcompanhado) {
    if (altura >= 1.40 && altura < 2) {
        return console.log("Acesso autorizado")
    } else if ((altura >= 1.20 && altura < 1.40) && estaAcompanhado) {
        return console.log("Acesso autorizado somente com acompanhante")
    } else {
        return console.log("Acesso negado")
    }
}

podeSubir(2.1, true)

/*

 Integrantes:
    Cesar Araujo, 
    Gustavo Branquinho, 
    Rodolfo Alves, 
    Sankler Gergman, 
    J.Felipe S. Barbosa

*/
