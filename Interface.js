document.addEventListener( 'DOMContentLoaded', () => {

    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', atoDeClicar);
    })

})

function atoDeClicar(event) {

    let quadrado = event.target;
    let posicao = quadrado.id;

    if (movimento(posicao)) {
        
        setTimeout(() => {
            alert("O jogo acabou! - O vencedor foi " + simbolos[vezDoJogador])}, 
            10);
    };
    atualizarQuadrados();
    

}

function atualizarQuadrados() {
    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((quadrado) => {
        let posicao = quadrado.id;
        let simbolo = tabuleiro[posicao];

        if (simbolo != '') {
            quadrado.innerHTML = `<div class='${simbolo}'></div>`
        }
    } )
}



// function linhaVitoria(){

//     for(let i = 0; i < TicTacToe_Square.length; i++){


//         game_Content = ['', '', '','', '', '','', '', ''];
//         game_Content.findFull = findFull;

//         TicTacToe_Square[i].classList.remove("X");
//         TicTacToe_Square[i].classList.remove("O");  

//         if (showEarnings(['0', '3', '6']) || showEarnings(['1', '4', '7']) || showEarnings(['2', '5', '8'])){

//             win_Risk_1.innerHTML -= `<div class="win-Risk-Horizontal"></div>`;
//             win_Risk_1.style = 'font-size: 0';

//         }

//         else if (showEarnings(['0', '1', '2'],) || showEarnings(['3', '4', '5']) || showEarnings(['6', '7', '8'])){
        
//             win_Risk_1.innerHTML -= `<div class="win-Risk-Vertical"></div>`;
//             win_Risk_1.style = 'font-size: 0';
        
//         }

//         else if (showEarnings(['0', '4', '8'])){

//             win_Risk_2.innerHTML -= `<div class="win-Risk-Diagonal-1"></div>`
//             win_Risk_2.style = 'font-size: 0';

//         }

//         else if (showEarnings(['2', '4', '6'])){

//             win_Risk_2.innerHTML -= `<div class="win-Risk-Diagonal-2"></div>`
//             win_Risk_2.style = 'font-size: 0';

//         }
//     }
// }