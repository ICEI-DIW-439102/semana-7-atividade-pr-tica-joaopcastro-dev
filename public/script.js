// Nome
let nome = prompt("Digite seu nome");

// renda
let renda = Number(prompt("Digite sua renda mensal"));
while (isNaN(renda)) {
  renda = Number(prompt("Valor inválido. Digite um número para a renda mensal:"));
}

// quantidade de despesas (1 a 5)
let qtd = Number(prompt("Quantas despesas você quer informar? (1 a 5)"));
while (isNaN(qtd)) {
  qtd = Number(prompt("Valor inválido. Digite um número entre 1 e 5:"));
}

// limites
if (qtd < 1) qtd = 1;
if (qtd > 5) qtd = 5;

// Lançamento de despesas
let totalDespesas = 0;

for (let i = 1; i <= qtd; i++) {
  let despesa = Number(prompt(`Digite o valor da Despesa ${i}:`));

  while (isNaN(despesa)) {
    despesa = Number(prompt(`Valor inválido. Digite um número para a Despesa ${i}:`));
  }

  totalDespesas += despesa;
}

// Análisando
let mensagem = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  if (sobra >= renda * 0.3) {
    mensagem = "✅ Ótimo: boa margem de sobra.";
  } else {
    mensagem = "🙂 Ok: dá para melhorar a sobra.";
  }
}

// Saídas
let resultado = `
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Situação: ${mensagem}
`;

alert(resultado);
console.log(resultado);