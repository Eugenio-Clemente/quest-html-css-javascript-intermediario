const formulario = document.querySelector("#formulario");

const campoInput = document.querySelectorAll("#campo-input");

const mensagemErro = document.querySelectorAll(".campo-obrigadorio");

formulario.addEventListener("submit", (item) => {
  item.preventDefault();

  for (let i = 0; i < mensagemErro.length; i++) {
    const erro = mensagemErro[i];
    const campo = campoInput[i]
    if (campo.value == "") {
      erro.classList.add("erro-na-verificacao");
      campo.classList.add("erro-na-verificacao");
      campo.classList.remove("verificado");
    } else if (campo.value != "") {
      campo.classList.add("verificado");
      erro.classList.remove("erro-na-verificacao");
    }
  }
});
