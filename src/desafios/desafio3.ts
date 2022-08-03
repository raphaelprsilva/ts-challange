// Resposta

export {};

let updateButton = document.getElementById('atualizar-saldo');
let cleanButton = document.getElementById('limpar-saldo')!;
let sumElement = document.getElementById('soma')! as HTMLInputElement;
let balanceField = document.getElementById('campo-saldo');

let totalBalance = 0;

limparSaldo();

function somarAoSaldo(soma: number) {
  if (balanceField) {
    totalBalance += soma;
    balanceField.innerHTML = totalBalance.toString();
    limparCampoSoma();
  }
}

function limparCampoSoma() {
  sumElement.value = '';
}

function limparSaldo() {
  if (balanceField) {
    totalBalance = 0;
    balanceField.innerHTML = totalBalance.toString();
  }
}

if (updateButton) {
  updateButton.addEventListener('click', () => {
    somarAoSaldo(Number(sumElement.value));
  });
}
cleanButton.addEventListener('click', () => {
  // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
  limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
