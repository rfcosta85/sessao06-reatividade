const cartaoVeiculo = document.querySelector("#cartao-veiculo");
const btnImprimir = document.querySelector("#btn-imprimir");
const modalDetalhes = document.querySelector("#modal-detalhes");
const btnFecharModal = document.querySelector("#btn-fechar-modal");
const chkProteger = document.querySelector("#chk-proteger");
const logTerminal = document.querySelector("#log-terminal");

function registrarLog(mensagem, cor = "#2ecc71") {
    logTerminal.innerHTML += `<br><span style="color:${cor}">> ${mensagem}</span>`;
    logTerminal.scrollTop = logTerminal.scrollHeight;
}

// -------------------------------------------------------------
// EVENTO NO PAI (Cartão) -> Abre a Janela Modal
// -------------------------------------------------------------
cartaoVeiculo.addEventListener("click", function() {
    registrarLog("🟦 [EVENTO PAI]: Cartão clicado -> Abrindo Modal!", "#3498db");
    modalDetalhes.style.display = "flex";
});

// -------------------------------------------------------------
// EVENTO NO FILHO (Botão Imprimir) -> Dispara a Impressão
// -------------------------------------------------------------
btnImprimir.addEventListener("click", function(event) {
    registrarLog("🟩 [EVENTO FILHO]: Imprimindo recibo do IUC...", "#2ecc71");

    // SE A CHECKBOX ESTIVER ATIVA, TRAVAMOS A PROPAGAÇÃO AQUI!
    if (chkProteger.checked) {
        event.stopPropagation();
        registrarLog("🛡️ [BLOQUEIO]: event.stopPropagation() ativado! O clique NÃO subiu para o cartão.", "#f1c40f");
    }
});

// Fechar a Janela Modal
btnFecharModal.addEventListener("click", function(event) {
    // Evita que o clique no botão de fechar (dentro do modal) gere novos comportamentos
    event.stopPropagation(); 
    modalDetalhes.style.display = "none";
});