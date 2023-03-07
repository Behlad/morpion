var player = "X";

var squares = document.querySelectorAll(".square");



function handleClick(e) {

  var square = e.target;

  

  if (square.textContent === "") {

    square.textContent = player;

    

    if (checkForWin()) {

      alert(player + " a gagné !");

      resetBoard();

    } else if (checkForDraw()) {

      alert("Match nul !");

      resetBoard();

    } else {

      player = player === "X" ? "O" : "X";

    }

  }

}



function checkForWin() {

  var winningCombos = [

    [0, 1, 2],

    [3, 4, 5],

    [6, 7, 8],

    [0, 3, 6],

    [1, 4, 7],

    [2, 5, 8],

    [0, 4, 8],

    [2, 4, 6]

  ];

  

  return winningCombos.some(function(combo) {

    return combo.every(function(square) {

      return squares[square].textContent === player;

    });

  });

}



function checkForDraw() {

  return Array.from(squares).every(function(square) {

    return square.textContent !== "";

  });

}



function resetBoard() {

  Array.from(squares).forEach(function(square) {

    square.textContent = "";

  });

  

  player = "X";

}



Array.from(squares).forEach(function(square) {

  square.addEventListener("click", handleClick);

});
