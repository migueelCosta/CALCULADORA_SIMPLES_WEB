function somar() {
  const input_01 = Number(document.getElementById("primeiro_numero").value);
  const input_02 = Number(document.getElementById("segundo_numero").value);
  const campoResultado = document.getElementById("resultado");
  const formula_soma = input_01 + input_02;
  campoResultado.textContent = formula_soma.toFixed(2);
}

function subtrair() {
  const input_01 = Number(document.getElementById("primeiro_numero").value);
  const input_02 = Number(document.getElementById("segundo_numero").value);
  const campoResultado = document.getElementById("resultado");
  const formula_subtracao = input_01 - input_02;
  campoResultado.textContent = formula_subtracao.toFixed(2);
}

function multiplicar() {
  const input_01 = Number(document.getElementById("primeiro_numero").value);
  const input_02 = Number(document.getElementById("segundo_numero").value);
  const campoResultado = document.getElementById("resultado");
  const formula_multiplicacao = input_01 * input_02;
  campoResultado.textContent = formula_multiplicacao.toFixed(2);
}

function dividir() {
  const input_01 = Number(document.getElementById("primeiro_numero").value);
  const input_02 = Number(document.getElementById("segundo_numero").value);
  const campoResultado = document.getElementById("resultado");
  const formula_divisao = input_01 / input_02;
  campoResultado.textContent = formula_divisao.toFixed(2);
}

// Todas as funçoes seguem a mesma lógica, apenas troquei os operadores lógicos
// Primeiro identifico os INPUTS, depois uso Number() para converter o texto do campo em número real
// Depois acontece o cálculo(SOMAR,SUBTRAIR ETC...)
// Por final tem o OUTPUT(saída do resultado).
