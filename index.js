var botoes = document.querySelectorAll(".p")
var regras = document.querySelector(".regras")
var regras2 = document.querySelector(".regras2")
var container = document.querySelector(".container")
var conteudo = document.querySelector(".conteudo")
var conteudo2 = document.querySelector(".conteudo2")
var youPick = document.querySelector(".youPick")
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

botoes.forEach(e =>{
    e.addEventListener('click',(c)=>{
        console.log(gerarNumero())
        c = mudarTela(e)
        if(result >= 67 && result <= 100){
            youPick.innerHTML = `
            <div class="youPick">
            <div>You Picked</div>
            <div class="bordaTresStepDois p">
              <div class="opc rock">
                <img class="icone" src="./images/icon-scissors.svg" alt="icon">
              </div>
            </div>
            `
            console.log("tesoura")
        }
        if(result >= 34 && result <=66){
            youPick.innerHTML = `
            <div class="youPick">
            <div>You Picked</div>
            <div class="bordaUmStepDois p">
              <div class="opc rock">
                <img class="icone" src="./images/icon-paper.svg" alt="icon">
              </div>
            </div>
            `
            console.log("papel")
        }
        if(result <= 33){
            youPick.innerHTML = `
            <div class="youPick">
            <div>You Picked</div>
            <div class="bordaDoisStepDois p">
              <div class="opc rock">
                <img class="icone" src="./images/icon-rock.svg" alt="icon">
              </div>
            </div>
            `
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
