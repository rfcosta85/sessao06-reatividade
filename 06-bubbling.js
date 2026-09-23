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


cartaoVeiculo.addEventListener("click", function() {
    registrarLog("🟦 [EVENTO PAI]: Cartão clicado -> Abrindo Modal!", "#3498db");
    modalDetalhes.style.display = "flex";
});


btnImprimir.addEventListener("click", function(event) {
    registrarLog("🟩 [EVENTO FILHO]: Imprimindo recibo do IUC...", "#2ecc71");

    if (chkProteger.checked) {
        event.stopPropagation();
        registrarLog("🛡️ [BLOQUEIO]: event.stopPropagation() ativado! O clique NÃO subiu para o cartão.", "#f1c40f");
    }
});

btnFecharModal.addEventListener("click", function(event) {
    event.stopPropagation(); 
    modalDetalhes.style.display = "none";
});