const boardWidth = 10 // constante de columnas del tablero
const boardHeight = 20 // constante de filas del tablero

const main = document.createElement('main'); // contenedor main elemento html principal que contendrá todo el juego
document.body.appendChild(main)
main.classList.add('main')

const boardContainer = document.createElement('div') // constante contenedora que genera en el DOM la cuadricula de juego
main.appendChild(boardContainer)
boardContainer.classList.add('boardContainer')

const displayContainer = document.createElement('div') // creamos elemnto html contador de puntos y auxiliar con info de pieaz actual
main.appendChild(displayContainer)
displayContainer.classList.add('displayContainer')



function createGrid(n){ // esta funcion pinta tantos divs como metas por parametro, esto lo hace gracias al bucle for
    for (let i = 0; i < n; i++){
        const divGrid = document.createElement('div')
        divGrid.classList.add('divGrid')
        boardContainer.appendChild(divGrid)
        const divGridSon = document.createElement('div')
        divGridSon.classList.add('divGridSon')
        divGrid.appendChild(divGridSon)
    }
}

createGrid(200)

function createGameOver (n){
    for (let i = 0; i < n; i++){
        const gameOver = document.createElement('div')
        gameOver.classList.add('taken')
        boardContainer.appendChild(gameOver)
    }
}

createGameOver(10)

//cada una de las piezas es un array de arrays que son las posiciones del tablero que ocuparan
const tetroS = [
    [1,2,boardWidth,boardWidth+1],[0,boardWidth,boardWidth+1, boardWidth*2+1],
    [1,2,boardWidth,boardWidth+1],[0,boardWidth,boardWidth+1, boardWidth*2+1]
]

const tetroI = [
    [0,1,2,3],[1, boardWidth+1,boardWidth*2+1,boardWidth+3+1],
    [0,1,2,3],[1, boardWidth+1,boardWidth*2+1,boardWidth+3+1]
]

const TetroL = [
    [0,1,2,boardWidth],[0,1,boardWidth+1,boardWidth*2+1],[2,boardWidth,boardWidth+1,boardWidth+2],
    [0,boardWidth,boardWidth*2,boardWidth*2+1]
]

const TetroZ = [
    [0,1,boardWidth+1,boardWidth+2],[1,boardWidth,boardWidth+1,boardWidth*2],
    [0,1,boardWidth+1,boardWidth+2],[1,boardWidth,boardWidth+1,boardWidth*2]  
]

const TetroO = [
    [0,1,boardWidth,boardWidth+1],[0,1,boardWidth,boardWidth+1],
    [0,1,boardWidth,boardWidth+1],[0,1,boardWidth,boardWidth+1]
]

const TetroJ = [
    [0,1,2,boardWidth+2],[1,boardWidth+1,boardWidth*2,boardWidth*2+1],
    [0,boardWidth,boardWidth+1,boardWidth+2],[0,1,boardWidth,boardWidth*2]
]

const TetroT = [
    [0,1,2,boardWidth+1],[1,boardWidth,boardWidth+1,boardWidth*2+1],
    [1,boardWidth,boardWidth+1,boardWidth+2],[0,boardWidth,boardWidth+1,boardWidth*2]
]

const tetrominos = [tetroS, tetroI, TetroL, TetroZ, TetroO, TetroJ, TetroT] //lista con todas las piezas

const pieza = document.querySelectorAll('.boardContainer > div')
const currentTetrominoe = ''; //constante que define la pieza que esta cayendo en este momento. Se genera aleatoriamente con una funcion
let currentPosition = 4;
let initRotation = 0;
let random= Math.floor(Math.random()*tetrominos.length)// variable que genera un numero aleatorio del 0 al 6
//lo que hacemos es introducir la variable random como valor para la busqueda del
//primer array lista de piezas
let currentTetro = tetrominos[random][initRotation] 

//funcion para seleccionar una pieza y su rotacion aleatoria

//dibujar la primera pieza en su primera rotacion, la pieza será generada aleatoriamente
//

function drawTetrominoeInMainBoard() {
    currentTetro.forEach(index => { 
    pieza [currentPosition+index].classList.add('tetrominoe')
    })
}

drawTetrominoeInMainBoard()

//seleccionar un tetronimo de manera random y su rotacion

function undrawTetrominoeInMainBoard(){
    currentTetro.forEach(index =>{
    pieza [currentPosition+index].classList.remove('tetrominoe')
    })
}

function freeze(){
    if(currentTetro.some(index=> pieza[currentPosition+index+boardWidth].classList.contains('taken'))){
        currentTetro.forEach(index=> pieza[currentPosition+index].classList.add('taken'))
        random= Math.floor(Math.random()*tetrominos.length)
        currentTetro = tetrominos[random][initRotation]
        currentPosition= 4
        drawTetrominoeInMainBoard()
    }
}



//Hace que la pieza baje cada segundo una fila automaticamente
timerId= setInterval(moveDown,1000)

//mover hacia abajo

function moveDown(){
    undrawTetrominoeInMainBoard()// borra la actual pieza
    currentPosition += boardWidth//actualiza el valor de la posicion actual sumandole 10 que es el valor de la varibale boardWidht
    // lo que hará que la posición baje una fila
    drawTetrominoeInMainBoard()// pinta de nuevo la figura con la posición actualizada
    freeze()
}



// funcion mover a la derecha hasta llegar al limite del tablero o si hay otra pieza
/*function moveRight() {
    undrawTetrominoeInMainBoard();
    const isAtRightEdge = currentTetro.some(index => (currentPosition+index) % width === 10)

    if(!isAtRightEdge) currentPosition +=1
    if(currentTetro.some(index => pieza[currentPosition+index].classList.contains('taken'))){
        currentPosition -=1
    }
        
    drawTetrominoeInMainBoard()
}*/




