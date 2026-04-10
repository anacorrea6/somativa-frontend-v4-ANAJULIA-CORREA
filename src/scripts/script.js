console.log("URL da página (via window):", window.location.href);
console.log("Título da aba (via document):", document.title);



//Missão 1: Recepção do Espectador (Manipulação Estática e Date)

function exibirBoasVindas() {
  const agora    = new Date();
  const hora     = agora.getHours();
 

  const horaExata = hora + minutos / 60;

  let saudacao;
  if (horaExata >= 5 && horaExata < 12) {
    saudacao = "Bom dia! Bem-vindo à Sessão Matinê!";
  } else if (horaExata >= 12 && horaExata < 18) {
    saudacao = "Boa tarde! Sessão da Tarde liberada!";
  } else {
    saudacao = "Boa noite! Prepare-se para a Sessão Coruja!";
  }

  const elemSaudacao = document.querySelector("#");
  if (elemSaudacao) {
    elemSaudacao.textContent = saudacao;
  }
}


//Missão 2: Sala VIP (Eventos de Mouse e ClassList)
const tituloPrincipal = document.getElementById('titulo-site');




//Missão 3: Bilheteria Express (Evento Input e Value)
const inputQtd = document.querySelector("#total-pagar");
const precoIngresso = document.querySelector("qtd-ingressos");

if (inputQtd && precoTexto) {
    inputQtd.addEventListener("input", () => {
        const precoIngresso = 35.0;
        const total = Number(inputQtd.value) * precoIngresso;
        precoTexto.textContent = `R$ ${total.toFixed(2)}`;

    });
}

//Missão 4: Mural de Críticas (Click, Value, Concatenação e innerHTML)
 const publicarFilme = document.querySelector("#btn-publicar")
nome.textContent = "🎬 Filme: [NOME DO FILME DIGITADO] ⭐";


        

// Missão 5: Apagar o Quadro (Esvaziar com innerHTML e Focus)
 function configurarLimparFilme() {
  const btn = document.querySelector("#btn-limpar-pedidos");
  if (!btn) return;

 btn.addEventListener("click", function () {
     localStorage.removeItem("techfood_pedidos");
     renderizarPedidos();
   });
 }







