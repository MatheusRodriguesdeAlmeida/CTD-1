/*

Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 
      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 
- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

*/

function pipoca(tempo) {
      if (tempo < 10) {
            console.log("Tempo insuficiente!");
      } else if (tempo > 20 && tempo <= 30) {
            console.log("Sua comida queimou!");
      } else if (tempo > 30) {
            console.log("KABUUMMM!!! Seu micro-ondas queimou! ;'(");
      } else {
            console.log("Prato pronto! Bom apetite!");
      }
}

function macarrao(tempo) {
      if (tempo < 8) {
            console.log("Tempo insuficiente!");
      } else if (tempo > 16 && tempo <= 24) {
            console.log("Sua comida queimou!");
      } else if (tempo > 24) {
            console.log("KABUUMMM!!! Seu micro-ondas queimou! ;'(");
      } else {
            console.log("Prato pronto! Bom apetite!");
      }
}

function carne(tempo) {
      if (tempo < 15) {
            console.log("Tempo insuficiente!");
      } else if (tempo > 30 && tempo <= 45) {
            console.log("Sua comida queimou!");
      } else if (tempo > 45) {
            console.log("KABUUMMM!!! Seu micro-ondas queimou! ;'(");
      } else {
            console.log("Prato pronto! Bom apetite!");
      }
}

function feijao(tempo) {
      if (tempo < 12) {
            console.log("Tempo insuficiente!");
      } else if (tempo > 24 && tempo <= 36) {
            console.log("Sua comida queimou!");
      } else if (tempo > 36) {
            console.log("KABUUMMM!!! Seu micro-ondas queimou! ;'(");
      } else {
            console.log("Prato pronto! Bom apetite!");
      }
}

function brigadeiro(tempo) {
      if (tempo < 8) {
            console.log("Tempo insuficiente!");
      } else if (tempo > 16 && tempo <= 24) {
            console.log("Sua comida queimou!");
      } else if (tempo > 24) {
            console.log("KABUUMMM!!! Seu micro-ondas queimou! ;'(");
      } else {
            console.log("Prato pronto! Bom apetite!");
      }
}



function microondas(prato, tempo) {
      switch (prato) {
            case "Pipoca":
                  console.log(`Você selecionou ${prato} por ${tempo} segundos:`)
                  pipoca(tempo);
                  break;
            case "Macarrão":
                  console.log(`Você selecionou ${prato} por ${tempo} segundos:`)
                  macarrao(tempo);
                  break;
            case "Carne":
                  console.log(`Você selecionou ${prato} por ${tempo} segundos:`)
                  carne(tempo);
                  break;
            case "Feijão":
                  console.log(`Você selecionou ${prato} por ${tempo} segundos:`)
                  feijao(tempo);
                  break;
            case "Brigadeiro":
                  console.log(`Você selecionou ${prato} por ${tempo} segundos:`)
                  brigadeiro(tempo);
                  break;
            default:
                  console.log("Prato inexistente.");
      }
}

microondas("Pipoca", 10);
microondas("Macarrão", 5);
microondas("Carne", 40);
microondas("Feijão", 50);
microondas("Bacon", 15);
