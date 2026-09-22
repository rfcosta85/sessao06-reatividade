const listaInfracoes = document.querySelectorAll(".infracao-card");
const painelSelecao = document.querySelector("#painel-selecao");

listaInfracoes.forEach(function(cartao) {
    
    cartao.addEventListener("click", function(event) {
        
        const elementoClicado = event.target.closest(".infracao-card");

        const tipoInfracao = elementoClicado.dataset.tipo;
        const valorInfracao = elementoClicado.dataset.valor;

        painelSelecao.innerHTML = `
            <strong>Infração Selecionada:</strong><br>
            • Tipo: <strong>${tipoInfracao}</strong><br>
            • Valor a Pagar: <strong>€${valorInfracao}</strong><br>
            <small style="color: #16a085;">Elemento capturado via <code>event.target</code>!</small>
        `;

        painelSelecao.style.display = "flex";
    });
});