//após carregar o documento html, este evento é responsável por selecionar todos os elemntos html
//com classe ".square" e incluir dentro de uma list(squares), o foreach percorre a lista.
//incluindo o evento de click que por sua vez inclui o acionamento a função handleClick

document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

//função responsável por acionar a função handlemove, mandando como parâmetro o id do elemento html
//esse id = o position.
//Após a execução do handleMove, acionamos a função update
//event.target = square pois o mesmo é enviado como parametro para a função.

function handleClick(event) {
    if (handleMove(event.target.id)) {

        setTimeout(() => {
            let player = "Caveira"
            if(playerTime == 0){
                player = "Caveira"
            }else{
                player = "Xis"
            }
            alert("Player " + player + " Win the Game Sequence " + sequenceWin )
        }, 10)
    }
    updateSquares(event.target.id)
}

//após o simbolo incluso na posição clicada no tabuleiro.
//Nós selecionamos todas as posições com classe ".square" e incluir dentro de uma list.
//O foeach percorre, e para cada "square ou elemento".
//symble recebe o board[indice = square.id]ou seja o id do elemento html como indice.
//isso vai representar o conteúdo do symbol, 'o' ou 'x'
//se o symbolo selecionado for = vazio então incluimos a tag div com a classe = ao simbolo.
//tudo isso dentro da tag ou seja o square

function updateSquares(position) {
    let square = document.getElementById(position.toString())
    symbol = board[square.id]
    square.innerHTML = `<div class='${symbol}'></div>`
}

let restart = document.getElementById("restart").addEventListener('click', restartGame)

function reloadSquares() {

    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        symbol = board[square.id]
        if (symbol == '') {
            square.innerHTML = `<div class='${''}'></div>`
        }

    })
}