const campoNif = document.querySelector("#campo-nif");
const btnConsultar = document.querySelector("#btn-consultar");
const resultadoNif = document.querySelector("#resultado-nif");

function realizarConsulta() {
    const nif = campoNif.value.trim();

    if (nif.length !== 9 || isNaN(nif)) {
        resultadoNif.style.display = "block";
        resultadoNif.style.backgroundColor = "#fadbd8";
        resultadoNif.style.color = "#78281f";
        resultadoNif.innerHTML = "⚠️ Por favor, introduza um NIF válido com 9 dígitos.";
    } else {
        resultadoNif.style.display = "block";
        resultadoNif.style.backgroundColor = "#d4efdf";
        resultadoNif.style.color = "#145a32";
        resultadoNif.innerHTML = `✅ NIF <strong>${nif}</strong> consultado com sucesso no sistema do IMT!`;
    }
}

btnConsultar.addEventListener("click", realizarConsulta);


campoNif.addEventListener("keydown", function(event) {    
    if (event.key === "Enter") {
        realizarConsulta();
    }
});