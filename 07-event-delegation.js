const listaInfracoes = document.querySelector("#lista-infracoes"); 
const campoNovaInfracao = document.querySelector("#campo-nova-infracao");
const btnAdicionar = document.querySelector("#btn-adicionar");


listaInfracoes.addEventListener("click", function(event) {
    
    const elementoClicado = event.target;

    if (elementoClicado.dataset.acao === "pagar") {
        
        
        const itemParaRemover = elementoClicado.closest(".item-infracao");
        
        itemParaRemover.remove();

        alert("Infração liquidada e removida do sistema com sucesso!");
    }
});


btnAdicionar.addEventListener("click", function() {
    const texto = campoNovaInfracao.value.trim();
    if (texto === "") return;

    const novoItem = document.createElement("li");
    novoItem.className = "item-infracao";
    novoItem.innerHTML = `
        <span>⚠️ ${texto}</span>
        <button class="btn-pagar" data-acao="pagar">Liquidar</button>
    `;

    listaInfracoes.appendChild(novoItem);
    campoNovaInfracao.value = "";
    
});