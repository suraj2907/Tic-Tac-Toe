console.log("Welcome to Tic Tac Toe ");
let music = new Audio("music.mp3");
let turna = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X"
 let gameend = false

//function for change turn 
const changeturn = () =>{
    return turn === "X"? "0" : "X"
}

// function to check for a win

const checkwin = () =>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
       [0,1,2 , 5, 5,0],
       [3,4,5 , 5,15,0],
       [6,7,8 , 5,25,0],
       [0,3,6 , -5,15,90],
       [1,4,7 , 5,15,90],
       [2,5,8 , 15,15,90],
       [0,4,8 , 5,15,45],
       [2,4,6 , 5,15,135]
    ]
    
wins.forEach( e => {
    
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ) {
    document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  Won" ;
    gameend = true;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "90px"
    document.querySelector('.line').style.width = "20vw"
    document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
    }
})

}




//Game Logic 

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click' , () => {
        if(boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            turna.play();
            checkwin();
            if(!gameend){
                document.getElementsByClassName("info")[0].innerText = "Turn for  " + turn;
            }
        }
    })
})


//adding eclick on reset button
reset.addEventListener('click', ()=> {
    let boxtext = document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element => {
      element.innerText ="";
    });
    turn = "X"
    gameend= false;
    document.querySelector('.line').style.width = "0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for  " + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0px"
})

