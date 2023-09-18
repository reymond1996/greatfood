var quantidade_input = document.querySelector('#qtd');
var totalpreco = document.querySelector('#total');


quantidade_input.oninput = function () {
    var preco = document.querySelector('#preco').textContent;
    preco = preco.replace('R$', '');
    preco = preco.replace(',', '.');
    preco = parseFloat(preco);
    var quantidade = quantidade_input.value;
    var total = quantidade * preco;
    total = 'R$' + total.toFixed(2)
    total.replace(".", ".");
    totalpreco.value = total;

}