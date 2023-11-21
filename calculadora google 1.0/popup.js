// popup.js
document.getElementById("calculateButton").addEventListener("click", function() {
    // Pegando os valores do formulário
    var costOfProduct = parseFloat(document.getElementById("costOfProduct").value);
    var adCosts = parseFloat(document.getElementById("adCosts").value);
    var shippingCosts = parseFloat(document.getElementById("shippingCosts").value);
    var desiredMargin = parseFloat(document.getElementById("desiredMargin").value);

    // Convertendo a margem para um valor decimal
    var margin = desiredMargin / 100;

    // Realizando o cálculo
    var totalPrice = (costOfProduct + adCosts + shippingCosts) / (1 - margin);

    // Exibindo o resultado
    document.getElementById("price").textContent = totalPrice.toFixed(2);
});
