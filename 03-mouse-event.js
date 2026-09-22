const itemInfracao = document.querySelector("#infracao");
const painelDetalhes = document.querySelector("#painel-detalhes");


itemInfracao.addEventListener("mouseenter", function() {
    painelDetalhes.style.display = "block";
    
    itemInfracao.style.backgroundColor = "#ffe8a1";
    itemInfracao.style.transform = "scale(1.02)";
});

itemInfracao.addEventListener("mouseleave", function() {
    painelDetalhes.style.display = "none";
    
    itemInfracao.style.backgroundColor = "#fff3cd";
    itemInfracao.style.transform = "scale(1)";
});