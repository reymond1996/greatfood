cartao3 = document.querySelector('#cartao_poupanca_e--credito');



cartao3.ondblclickc = function () {
    let nome = ["Cartão de Credito e Poupança"];
    let lista = document.getElementById('lista');
    for (var i = 0; i < nomes.length; i++) {
        let item = document.createElement('h6');
        item.appendChild(document.createTextNode(nomes[i]));
        lista.appendChild(item);
    }
    var h6 = document.createElement(h6);
}