function gerar() {
    let nomes = ["Cartão de Credito"];
    let lista = document.getElementById('lista');
    for (var i = 0; i < nomes.length; i++) {
        let item = document.createElement('h6');

        let x = document.getElementById("cartao_basic").value;
        document.getElementById("lista").innerHTML = x;

        item.appendChild(document.createTextNode(nomes[i]));
        lista.appendChild(item);
    }


}
function gerar() {
    let nomes = ["Cartão Premium"];
    let lista = document.getElementById('lista2');
    for (var i = 0; i < nomes.length; i++) {
        let item = document.createElement('h6');

        let x = document.getElementById("cartaovioleta_premium").value;
        document.getElementById("lista2").innerHTML = x;

        item.appendChild(document.createTextNode(nomes[i]));
        lista.appendChild(item);
    }


}
// function gerar2() {
//     let nomes2 = ["Cartão Premium"];
//     let lista2 = document.getElementById('lista2');
//     for (var c = 0; c < nomes2.length; c++) {
//         let item2 = document.createElement('h6');

//         let v = document.getElementById("cartaovioleta_premium").value;
//         document.getElementById("lista2").innerHTML = v;

//         item2.appendChild(document.createTextNode(nomes2[c]));
//         lista2.appendChild(item2);
//     }
// }


function gerar3() {
    let nomes3 = ["Cartão Poupança e Corrente"];
    let lista3 = document.getElementById('lista3');
    for (var ix = 0; ix < nomes3.length; ix++) {
        let item3 = document.createElement('h6');

        let xv = document.getElementById("cartao_poupanca_e--credito").value;
        document.getElementById("lista3").innerHTML = xv;

        item3.appendChild(document.createTextNode(nomes3[ix]));
        lista3.appendChild(item3);
    }
}