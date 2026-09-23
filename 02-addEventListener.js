const inputMatricula = document.querySelector("#input-matricula");
const btnBuscar = document.querySelector("#btn-buscar");
const painelResultado = document.querySelector("#painel-resultado");

inputMatricula.addEventListener("input", function() {
    const textoDigitado = inputMatricula.value;
    
    painelResultado.innerHTML = `<em>A pesquisar por: <strong>${textoDigitado}</strong>...</em>`;
});


btnBuscar.addEventListener("click", function() {
    const matricula = inputMatricula.value.trim();
    const PADRAO_MATRICULA = /^[A-Z]{2}-\d{2}-[A-Z]{2}$/;
    
    if (matricula === "" || !PADRAO_MATRICULA.test(matricula.toUpperCase())) {
        painelResultado.innerHTML = `<span style="color: red;">⚠️ Por favor, introduza uma matrícula válida.</span>`;
    } else {
        painelResultado.innerHTML = `
            <div style="background: #e8f8f5; padding: 10px; border-radius: 4px;">
                ✅ Consulta concluída para a matrícula <strong>${matricula.toUpperCase()}</strong>.
            </div>
        `;
    }
});