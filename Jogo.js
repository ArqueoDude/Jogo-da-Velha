let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let vezDoJogador = 0;
let simbolos = [ 'naruto','sasuke']
let fimDeJogo = false;


function movimento(posicao) {

    if (fimDeJogo) {
        return;
    }

    if (tabuleiro[posicao] == '') {
        tabuleiro[posicao] = simbolos[vezDoJogador];

        fimDeJogo = eVitoria();

        if (fimDeJogo == false) {
            if (vezDoJogador == 0) {
            vezDoJogador = 1;
            } else {
            vezDoJogador = 0;
            }
        }
    }   

    return fimDeJogo; 
}

function eVitoria() {

    let condicaoVitoria =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i < condicaoVitoria.length; i++) {
        let seq = condicaoVitoria[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (tabuleiro[pos1] == tabuleiro[pos2] &&
            tabuleiro[pos1] == tabuleiro[pos3] &&
            tabuleiro[pos1] != '') {

                return true 
            }
    }
    return false;
}