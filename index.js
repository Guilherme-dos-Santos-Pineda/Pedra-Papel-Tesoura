var botoes = document.querySelectorAll(".p")

function gerarNumero(){
    return Math.random()
}

botoes.forEach(e =>{
    e.addEventListener('click',()=>{
        console.log(gerarNumero())
    })
})
