function cardClick(numero) {

  localStorage.setItem("cardAtual", numero);

  window.location.href = "cardClicado.html";

}


/* ========================= */
/* CARREGAR CARDS */
/* ========================= */

window.addEventListener("load", () => {

  for(let i = 1; i <= 9; i++){

    const card = document.getElementById("card" + i);

    if(card){

      const imagemElemento =
        card.querySelector(".imagemCard");

      const textoElemento =
        card.querySelector(".lugarTextoPreview p");


      /* ========================= */
      /* IMAGEM */
      /* ========================= */

      const imagem =
        localStorage.getItem("imagemCard" + i);

      if(imagem){

        imagemElemento.src = imagem;

      }


      /* ========================= */
      /* TEXTO LATERAL */
      /* ========================= */

      const texto =
        localStorage.getItem("resumoCard" + i);

      if(texto){

        textoElemento.innerHTML =
          texto.replace(/\n/g, "<br>");

      }

    }

  }

});