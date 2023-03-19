var botoes = document.querySelectorAll(".p")
var regras = document.querySelector(".regras")
var regras2 = document.querySelector(".regras2")
var container = document.querySelector(".container")
var conteudo = document.querySelector(".conteudo")
var conteudo2 = document.querySelector(".conteudo2")
var youPick = document.querySelector(".youPick")
var theHousePicked = document.querySelector(".theHousePicked")
var mensagemEPlayAgain = document.querySelector(".mensagemEPlayAgain")
var mesage = document.querySelector(".mesage")
var playAgain
var paper = document.querySelector(".paper")
var rock = document.querySelector(".rock")
var scissor = document.querySelector(".scissor")
var x = document.querySelector(".x")
var numero = document.querySelector(".numero")
var a = 0
var score = 0
var result
var suaVez
var vezDaMaquina

function verificarVencedor(){
  if(suaVez == 'bordaTres' && vezDaMaquina == 'papel'){
    console.log('Voce selecionou Tesoura')
    console.log('Voce ganhou')
    mesage.innerText = 'YOU WIN'
    score++
    numero.innerText = `${score}`
  }
  if(suaVez == 'bordaTres' && vezDaMaquina == 'pedra'){
    console.log('Voce selecionou Tesoura')
    console.log('Voce Perdeu')
    mesage.innerText = 'YOU LOSE'
  }
  if(suaVez == 'bordaTres' && vezDaMaquina == 'tesoura'){
    console.log('Voce selecionou Tesoura')
    console.log('Voce empatou')
    mesage.innerText = 'EMPATE'
  }

  if(suaVez == 'bordaDois' && vezDaMaquina == 'tesoura'){
    console.log('Voce selecionou Pedra')
    console.log('Voce ganhou')
    mesage.innerText = 'YOU WIN'
    score++
    numero.innerText = `${score}`
  }
  if(suaVez == 'bordaDois' && vezDaMaquina == 'papel'){
    console.log('Voce selecionou Pedra')
    console.log('Voce perdeu')
    mesage.innerText = 'YOU LOSE'
  }
  if(suaVez == 'bordaDois' && vezDaMaquina == 'pedra'){
    console.log('Voce selecionou Pedra')
    console.log('Voce empatou')
    mesage.innerText = 'EMPATE'
  }

  if(suaVez == 'bordaUm' && vezDaMaquina == 'pedra'){
    console.log('Voce selecionou Papel')
    console.log('Voce ganhou')
    mesage.innerText = 'YOU WIN'
    score++
    numero.innerText = `${score}`
  }
  if(suaVez == 'bordaUm' && vezDaMaquina == 'tesoura'){
    console.log('Voce selecionou Papel')
    console.log('Voce perdeu')
    mesage.innerText = 'YOU LOSE'
  }
  if(suaVez == 'bordaUm' && vezDaMaquina == 'papel'){
    console.log('Voce selecionou Papel')
    console.log('Voce empatou')
    mesage.innerText = 'EMPATE'
  }
}
// GERAR NUMERO COMEÇO
function gerarNumero(){
    let nr = 100
    result = Math.round(Math.random() * nr)
    return result
}
function pedra(){
  youPick.innerHTML = `
  <div>You Picked</div>
  <div class="bordaDoisStepDois">
    <div class="opcStepDois rock">
      <img class="icone2" src="./images/icon-rock.svg" alt="icon">
    </div>
  </div>
  `
}
function papel(){
  youPick.innerHTML = `
  <div>You Picked</div>
  <div class="bordaUmStepDois">
    <div class="opcStepDois rock">
      <img class="icone2" src="./images/icon-paper.svg" alt="icon">
    </div>
  </div>
  `
}
function tesoura(){
  youPick.innerHTML = `
  <div>You Picked</div>
  <div class="bordaTresStepDois">
    <div class="opcStepDois rock">
      <img class="icone2" src="./images/icon-scissors.svg" alt="icon">
    </div>
  </div>
  `
}
function hole(){
  theHousePicked.innerHTML = `
  <div>The House Picked</div>
  <div class='buraco'></div>`
}
botoes.forEach(e =>{
    e.addEventListener('click',(c)=>{
        console.log(gerarNumero())
        c = mudarTela(e)
        mensagemEPlayAgain.style.display = 'none'
        setTimeout(()=>{
          
          mensagemEPlayAgain.innerHTML=`
          <div class="mesage"></div>
          <div class="playAgain" onclick="jogarNovamente()"> PLAY AGAIN </div>
          `
          setTimeout(()=>{
            mesage = document.querySelector(".mesage")
            verificarVencedor()
          },100)
          
          
          mensagemEPlayAgain.style.display = 'flex'
        },2700)
        playAgain = document.querySelector(".playAgain")
        if(result >= 67 && result <= 100){
          hole()
            setTimeout(()=>{
              theHousePicked.innerHTML = `
              <div>The House Picked</div>
              <div class="bordaTresStepDois">
                <div class="opcStepDois rock">
                  <img class="icone2" src="./images/icon-scissors.svg" alt="icon">
                </div>
              `
              vezDaMaquina = 'tesoura'
            },1200)
            console.log("tesoura")
            
        }

        if(result >= 34 && result <=66){
          hole()
          setTimeout(()=>{
            theHousePicked.innerHTML = `
            <div>The House Picked</div>
            <div class="bordaUmStepDois">
              <div class="opcStepDois rock">
                <img class="icone2" src="./images/icon-paper.svg" alt="icon">
              </div>
            `
            vezDaMaquina = 'papel'
          },1200)
            console.log("papel")
        }

        if(result <= 33){
          hole() 
          setTimeout(()=>{
            theHousePicked.innerHTML = `
            <div>The House Picked</div>
            <div class="bordaDoisStepDois">
              <div class="opcStepDois rock">
                <img class="icone2" src="./images/icon-rock.svg" alt="icon">
              </div>
            `
            vezDaMaquina = 'pedra'
          },1200)
            console.log("pedra")
        }
    })
    
    a = 1
})
// GERAR NUMERO FIM
 
function mudarTela(i){
    if(a == 1){
        console.log(i)
        suaVez = i.classList[0]
        conteudo.style.display = 'none'
        conteudo2.style.display = 'flex'
    }
}
function jogarNovamente(){
  conteudo.style.display = 'flex'
  conteudo2.style.display = 'none' 
}
// APARECER E SUMIR REGRAS COMEÇO
regras.addEventListener("click", ()=>{
    container.style.filter = 'blur(3px)'
    regras2.style.display = 'block'
})
x.addEventListener('click', ()=>{
    container.style.filter = 'blur(0px)'
    regras2.style.display = 'none'
})

// document.addEventListener('click',(e)=>{
//     if(container.style.filter == "blur(3px)" && e.target.classList[0] == 'opc'){
//         container.style.filter = 'blur(0px)'
//         regras2.style.display = 'none'
//     }else{
//         console.log("hiiiiii")
//     }
// })

// APARECER E SUMIR REGRAS FIM





