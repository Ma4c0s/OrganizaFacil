/* IMAGEM */

const imagemUpload = document.getElementById("imagemUpload");
const previewImagem = document.getElementById("previewImagem");
const textoImagem = document.getElementById("textoImagem");

/* CAMPOS */

const tituloCard = document.getElementById("tituloCard");
const conteudoCard = document.getElementById("conteudoCard");
const resumoCard = document.getElementById("resumoCard");

/* CARD ATUAL */

const cardAtual = localStorage.getItem("cardAtual");

let alterado = false;


/* ========================= */
/* IMAGEM */
/* ========================= */

imagemUpload.addEventListener("change", function() {

  const arquivo = this.files[0];

  if (arquivo) {

    const leitor = new FileReader();

    leitor.onload = function(e) {

      previewImagem.src = e.target.result;

      previewImagem.style.display = "block";

      textoImagem.style.display = "none";

      /* SALVAR IMAGEM */

      localStorage.setItem(
        "imagemCard" + cardAtual,
        e.target.result
      );

    };

    leitor.readAsDataURL(arquivo);

  }

});


/* ========================= */
/* CARREGAR DADOS */
/* ========================= */

window.addEventListener("load", () => {

  const tituloSalvo =
    localStorage.getItem("tituloCard" + cardAtual);

  const conteudoSalvo =
    localStorage.getItem("conteudoCard" + cardAtual);

  const resumoSalvo =
    localStorage.getItem("resumoCard" + cardAtual);

  const imagemSalva =
    localStorage.getItem("imagemCard" + cardAtual);


  /* TÍTULO */

  if(tituloSalvo){
    tituloCard.value = tituloSalvo;
  }

  /* CONTEÚDO */

  if(conteudoSalvo){
    conteudoCard.value = conteudoSalvo;
  }

  /* RESUMO */

  if(resumoSalvo){
    resumoCard.value = resumoSalvo;
  }

  /* IMAGEM */

  if(imagemSalva){

    previewImagem.src = imagemSalva;

    previewImagem.style.display = "block";

    textoImagem.style.display = "none";

  }

});


/* ========================= */
/* DETECTAR ALTERAÇÕES */
/* ========================= */

tituloCard.addEventListener("input", () => {
  alterado = true;
});

conteudoCard.addEventListener("input", () => {
  alterado = true;
});

resumoCard.addEventListener("input", () => {
  alterado = true;
});


/* ========================= */
/* SALVAR */
/* ========================= */

function salvarCard(){

  /* TÍTULO */

  localStorage.setItem(
    "tituloCard" + cardAtual,
    tituloCard.value
  );

  /* CONTEÚDO */

  localStorage.setItem(
    "conteudoCard" + cardAtual,
    conteudoCard.value
  );

  /* RESUMO */

  localStorage.setItem(
    "resumoCard" + cardAtual,
    resumoCard.value
  );

  alterado = false;

  alert("Card salvo com sucesso!");

}


/* ========================= */
/* AVISO AO SAIR */
/* ========================= */

window.addEventListener("beforeunload", function (e) {

  if(alterado){

    e.preventDefault();

    e.returnValue = "";

  }

});




function imprimirPDF(){

  window.print();

}