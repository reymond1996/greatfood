var quantidade_input = document.querySelector('#qtd');
var totalpreco = document.querySelector('#total');


quantidade_input.oninput = function () {
    var preco = document.querySelector('#preco').textContent;
    var unidade = document.querySelector('#unidade').textContent;
    preco = preco.replace('R$', '');
    preco = preco.replace(',', '.');
    preco = parseFloat(preco);
    var quantidade = quantidade_input.value;
    var total = quantidade * preco;
    unidadeCarga = total / unidade;
    unidadeCarga = 'R$' + unidadeCarga.toFixed(2)
    unidadeCarga.replace(".", ".");
    totalpreco.value = unidadeCarga;

}