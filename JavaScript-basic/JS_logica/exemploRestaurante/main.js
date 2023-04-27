function calculandoValor(){
    var inValor = document.getElementById("inValor")
    var inConsumo = document.getElementById("inConsumo")
    var valorAPagar = document.getElementById("valorAPagar")

    var precoKilo = Number(inValor.value)
    var inConsumo= Number(inConsumo.value)

    var preco = (precoKilo/1000) * inConsumo

    valorAPagar.textContent = "Valor a pagar : R$" +preco
}

var btPreco = document.getElementById("btPreco")
btPreco.addEventListener("click", calculandoValor)
