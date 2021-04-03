let rowArr = new Array(3);
let countClick = 0;
let countWins_0 = 0;
let countWins_X = 0;

//creating a playing field on pure JavaScript
// function createGame() {
//     //create game arr
//     for (let i =0;i<rowArr.length;i++) {
//         rowArr[i] = new Array(3);
//     }
//     //creating a playing field
//     let html = "";
//     for(let i=0;i<rowArr.length;i++) {
//         for (let j=0;j<rowArr[i].length;j++) {
//             rowArr[i][j] = "";
//             html += `<button value="${i +" "+ j}"  class="btn_click">${rowArr[i][j]}</button>`
//             document.querySelector("#block_game").innerHTML = html;
//         }
//     }
//     countClick = 0
// }

//main logic on pure JavaScript
// function game () {
//     document.querySelector("#block_game").addEventListener("click",function(e) {
//         if (e.target.classList.contains("btn_click")) {
//             if (countClick % 2 === 0) {
//                 playerTurn("0",e);
//             } else if (countClick % 2 !== 0) {
//                 playerTurn("X",e)
//             }
//         } 
//     })  
// }

//function of player turn on pure JavaScript
// function playerTurn (val,e) {
//     let position = e.target.value;
//     let arr = position.split(" ");
//     rowArr[arr[0]][arr[1]] = val

//     if (e.target.innerText === "") {
//         countClick++;
//         e.target.innerText = val;

//         if (check(val) && val === "0") {
//             createGame();
//             document.querySelector("#wins_0").innerHTML = ++countWins_0;
//         } else if (check(val) && val === "X") {
//             createGame();
//             document.querySelector("#wins_X").innerHTML = ++countWins_X;
//         }
//     } else {
//         alert("you already input on button");
//     }
// }


//function of reset on pure JavaScript
// function resetGame() {
//     createGame();
//     countClick = 0
//     countWins_0 = 0;
//     countWins_X = 0;
//     document.querySelector("#wins_0").innerHTML = 0;
//     document.querySelector("#wins_X").innerHTML = 0;
// }


//reset of game on pure JavaScript
// document.querySelector("#btn_startNewGame").onclick = ()=> {
//     resetGame();
// };



//creating a playing field on jquery
function createGame() {
    //create game arr
    for (let i =0;i<rowArr.length;i++) {
        rowArr[i] = new Array(3);
    }
    //creating a playing field
    let html = "";
    for(let i=0;i<rowArr.length;i++) {
        for (let j=0;j<rowArr[i].length;j++) {
            rowArr[i][j] = "";
            html += `<button value="${i +" "+ j}"  class="btn_click">${rowArr[i][j]}</button>`
            $("#block_game").html(html);

        }
    }
    countClick = 0
}

//main logic on pure jquery
function game () {
    $("#block_game").on("click",function(e) {
        if (e.target.classList.contains("btn_click")) {
            if (countClick % 2 === 0) {
                playerTurn("0",e);
            } else if (countClick % 2 !== 0) {
                playerTurn("X",e)
            }
        } 
        checkDraw(countClick);
    })
   
}

//function of player turn on jquery
function playerTurn (val,e) {
    let position = e.target.value;
    let arr = position.split(" ");
    rowArr[arr[0]][arr[1]] = val

    if (e.target.innerText === "") {
        countClick++;
        e.target.innerText = val;

        if (check(val) && val === "0") {
            createGame();
            $("#wins_0").html(++countWins_0);
        } else if (check(val) && val === "X") {
            createGame();
            $("#wins_X").html(++countWins_X)
        }
    } else {
        alert("you already input on button");
    }
}

//check the winner
function check(val) {
    if ((rowArr[0][0] == val && rowArr[0][1] == val && rowArr[0][2] == val) 
    || (rowArr[1][0] == val && rowArr[1][1] == val && rowArr[1][2] == val) 
    || (rowArr[2][0] == val && rowArr[2][1] == val && rowArr[2][2] == val)

    || (rowArr[0][0] == val && rowArr[1][0] == val && rowArr[2][0] == val)
    || (rowArr[0][1] == val && rowArr[1][1] == val && rowArr[2][1] == val)
    || (rowArr[0][2] == val && rowArr[1][2] == val && rowArr[2][2] == val)

    || (rowArr[0][0] == val && rowArr[1][1] == val && rowArr[2][2] == val)
    || (rowArr[0][2] == val && rowArr[1][1] == val && rowArr[2][0] == val)) {
        return true;
    } 
};

function checkDraw(count) {
    if (count === 9) {
        alert(`Sorry but it's draw`);
        createGame();
    }
}


//function of reset on jqeury
function resetGame() {
    createGame();
    countClick = 0
    countWins_0 = 0;
    countWins_X = 0;
    $("#wins_0").html(0);
    $("#wins_X").html(0);
}


//reset of game on jquery
$("#btn_startNewGame").on("click",()=> {
    resetGame();
})


createGame();
game();

















