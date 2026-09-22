const botaoPagar = document.querySelector("#btn-pagar");
const painelConfirmacao = document.querySelector("#painel-confirmacao");
const statusBadge = document.querySelector(".badge");

botaoPagar.addEventListener("click", function(event) {
    
    const valor = parseFloat(botaoPagar.dataset.preco);

    statusBadge.innerText = "Pago";
    statusBadge.classList.add("badge-pago"); 

    painelConfirmacao.innerHTML = `
        <strong>Pagamento Concluído!</strong><br>
        Valor processado: <strong>€${valor.toFixed(2)}</strong><br>
        <small>Status atualizado para: Pago</small>
    `;

    painelConfirmacao.style.display = "block";

    botaoPagar.disabled = true;
    botaoPagar.innerText = "Processado";
    botaoPagar.style.backgroundColor = "#95a5a6";
});