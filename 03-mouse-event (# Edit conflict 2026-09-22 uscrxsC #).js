const itemInfracao = document.querySelector("#infracao");
const painelDetalhes = document.querySelector("#painel-detalhes");


itemInfracao.addEventListener("mouseenter", function() {
    painelDetalhes.style.display = "block";
    
    itemInfracao.style.backgroundColor = "#ffe8a1";
    itemInfracao.style.transform = "scale(1.02)";
});

// -------------------------------------------------------------
// ESCUTADOR 2: Evento "mouseleave" (Rato sai da área)
// -------------------------------------------------------------
itemInfracao.addEventListener("mouseleave", function() {
    // 1. Esconde o painel de detalhes novamente
    painelDetalhes.style.display = "none";
    
    // 2. Restaura o estilo original do item
    itemInfracao.style.backgroundColor = "#fff3cd";
    itemInfracao.style.transform = "scale(1)";
});