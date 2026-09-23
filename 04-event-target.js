const listaInfracoes = document.querySelectorAll(".infracao-card");
const painelSelecao = document.querySelector("#painel-selecao");

// O 'index' nos dá a posição numérica (0, 1, 2...)
listaInfracoes.forEach(function(cartao, index) {
    
    cartao.addEventListener("click", function(event) {
        
        // 1. Onde o clique efetivamente tocou (pode ser o span, o botão, o div...)
        const alvoRealDoClique = event.target.tagName; // Retorna ex: "BUTTON", "SPAN", "DIV"
        
        // 2. O container pai capturado pelo .closest()
        const elementoClicado = event.target.closest(".infracao-card");

        const tipoInfracao = elementoClicado.dataset.tipo;
        const valorInfracao = elementoClicado.dataset.valor;

        painelSelecao.innerHTML = `
            <strong>Infração Selecionada:</strong><br>
            • Posição na lista (Índice): <strong>#${index}</strong> (Elemento ${index + 1} de ${listaInfracoes.length})<br>
            • Tipo: <strong>${tipoInfracao}</strong><br>
            • Valor a Pagar: <strong>€${valorInfracao}</strong><br>
            <hr style="border: 0.5px solid #eee; margin: 8px 0;">
            <small style="color: #7f8c8d;">
                🎯 <strong>Onde o mouse tocou:</strong> <code>&lt;${alvoRealDoClique.toLowerCase()}&gt;</code><br>
                🏠 <strong>Onde o .closest() subiu:</strong> <code>.infracao-card</code>
            </small>
        `;

        painelSelecao.style.display = "block";
    });
});