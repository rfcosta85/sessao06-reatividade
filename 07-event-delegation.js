const listaInfracoes = document.querySelector("#lista-infracoes"); 
const campoNovaInfracao = document.querySelector("#campo-nova-infracao");
const btnAdicionar = document.querySelector("#btn-adicionar");

// -------------------------------------------------------------
// DELEGAÇÃO DE EVENTOS: Apenas 1 escutador na lista PAI (<ul>)
// -------------------------------------------------------------
listaInfracoes.addEventListener("click", function(event) {
    
    // Inspecionamos quem realmente foi clicado através do event.target
    const elementoClicado = event.target;

    // Verificamos se o clique foi em algum botão com o atributo data-acao="pagar"
    if (elementoClicado.dataset.acao === "pagar") {
        
        // Localizamos o item <li> mais próximo do botão clicado
        const itemParaRemover = elementoClicado.closest(".item-infracao");
        
        // Removemos o item da árvore do DOM
        itemParaRemover.remove();

        alert("Infração liquidada e removida do sistema com sucesso!");
    }
});

// -------------------------------------------------------------
// ADICIONANDO NOVOS ITENS DINAMICAMENTE
// -------------------------------------------------------------
btnAdicionar.addEventListener("click", function() {
    const texto = campoNovaInfracao.value.trim();
    if (texto === "") return;

    // Criamos o novo HTML
    const novoItem = document.createElement("li");
    novoItem.className = "item-infracao";
    novoItem.innerHTML = `
        <span>⚠️ ${texto}</span>
        <button class="btn-pagar" data-acao="pagar">Liquidar</button>
    `;

    // Inserimos na lista PAI
    listaInfracoes.appendChild(novoItem);
    campoNovaInfracao.value = "";
    
});