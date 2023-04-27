function calculaVeiculo (){
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outNome = document.getElementById("outNome");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");
;
    var veiculo = inVeiculo.value; 
    var preco = Number(inPreco.value);
    var entrada = preco * 0.50 ;
    var saldo = (preco * 0.50)/12 ;

    outNome.textContent = "Promoção:  "+veiculo; 
    outEntrada.textContent = "A entrada será de R$ "+entrada
    outParcela.textContent = "+ 12X de R$: " +saldo


}

var btButton = document.getElementById("btButton");

btButton.addEventListener("click", calculaVeiculo); 