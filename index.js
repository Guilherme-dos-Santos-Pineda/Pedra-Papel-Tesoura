var botoes = document.querySelectorAll(".p")
var regras = document.querySelector(".regras")
var regras2 = document.querySelector(".regras2")
var container = document.querySelector(".container")
var conteudo = document.querySelector(".conteudo")
var conteudo2 = document.querySelector(".conteudo2")
var youPick = document.querySelector(".youPick")
var theHousePicked = document.querySelector(".theHousePicked")
var paper = document.querySelector(".paper")
var rock = document.querySelector(".rock")
var scissor = document.querySelector(".scissor")
var x = document.querySelector(".x")
var a = 0
var result
var suaVez


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
            },2000)
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
          },2000)
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
          },2000)
            console.log("pedra")
        }
    })
    
    a = 1
})
// GERAR NUMERO FIM
 
function mudarTela(i){
    if(a == 1){
        console.log(i)
        suaVez = i
        conteudo.style.display = 'none'
        conteudo2.style.display = 'flex'
    }
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





