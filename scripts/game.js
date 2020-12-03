// Iniciar variáveis
let board = ['', '', '', '', '', '', '', '', ''];//representação do tabuleiro, cada quadrado.
let playerTime = 0;//representação de cada jogador onde 0 representa o jogador 1 e 1 o jogador 2
let gameOver = false; //Variavel armazena o status do jogo, se acabou ou não
let symbols = ['o', 'x'] //simbolos representantes de cada jogador bola e cruz
let winStates = [//variavel que armazena as sequencias de vitoria caso sejam iguais os conteudos
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//handleMove, função responsável por verificar se a posição no tabuleiro está vazia
//se estiver, incluir o simbolo na posição correta do tabuleiro, e trocar a vez do jogador.
function handleMove(position) {
    //if responsável por verificar e finalizar o jogo caso a variavel seja true
    //isso resolve a questão do jogo terminar e depois ser possível continuar jogando.
    if (gameOver) {
        return
    }

    if (board[position] == '') {

        board[position] = symbols[playerTime]

        gameOver = isWin();

        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0
        }
    }
    return gameOver
}

//função responsável por verificar se há um vencedor após cada jogada ela é acionada.
//Lógica do jogo da velha, o mesmo termina quando um jogador consegue colocar 3 elementos iguais
//em sequencia, seja ela horizontal, vertical ou diagonal.
//então temos 8 opções de vitoria, 3 horizontais, 3 verticais e 2 diagonais
//mapeando as opções de vitoria, conseguimos fazer a verificação de acordo com os simbolos
//que são inclusos no tabuleiro a cada jogada.
let sequenceWin
function isWin() {

    //for para percorrer o array winstates
    //usando o i de indice, armazenamos cada array dentro de winstates na variavel seq.
    //e ai verificamos se essas posições tem conteúdos iguais
    for (var i = 0; i < winStates.length; i++) {
        let seq = winStates[i]

        //variaveis para armazenar os conteudos de cada posição      
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        //meu if verifica se a posição do meu tabuleiro usando o pos1 no caso a primeira posição do seq
        //como indice ou seja verifico se a posição em especifico é igual as demais posições 2 e 3      
        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            sequenceWin = seq
            return true
        }
    }
    return false
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];//representação do tabuleiro, cada quadrado.
    playerTime = 0;//representação de cada jogador onde 0 representa o jogador 1 e 1 o jogador 2
    gameOver = false; //Variavel armazena o status do jogo, se acabou ou não
    reloadSquares()
}