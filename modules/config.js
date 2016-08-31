module.exports = {
  buttons: [
    [
      [...document.querySelectorAll(".row1-one-inner-row1 > td > button")],
      [...document.querySelectorAll(".row1-one-inner-row2 > td > button")],
      [...document.querySelectorAll(".row1-one-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row1-two-inner-row1 > td > button")],
      [...document.querySelectorAll(".row1-two-inner-row2 > td > button")],
      [...document.querySelectorAll(".row1-two-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row1-two-inner-row1 > td > button")],
      [...document.querySelectorAll(".row1-two-inner-row2 > td > button")],
      [...document.querySelectorAll(".row1-two-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row1-three-inner-row1 > td > button")],
      [...document.querySelectorAll(".row1-three-inner-row2 > td > button")],
      [...document.querySelectorAll(".row1-three-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row1-three-inner-row1 > td > button")],
      [...document.querySelectorAll(".row1-three-inner-row2 > td > button")],
      [...document.querySelectorAll(".row1-three-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row2-one-inner-row1 > td > button")],
      [...document.querySelectorAll(".row2-one-inner-row2 > td > button")],
      [...document.querySelectorAll(".row2-one-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row2-two-inner-row1 > td > button")],
      [...document.querySelectorAll(".row2-two-inner-row2 > td > button")],
      [...document.querySelectorAll(".row2-two-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row2-two-inner-row1 > td > button")],
      [...document.querySelectorAll(".row2-two-inner-row2 > td > button")],
      [...document.querySelectorAll(".row2-two-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row2-two-inner-row1 > td > button")],
      [...document.querySelectorAll(".row2-two-inner-row2 > td > button")],
      [...document.querySelectorAll(".row2-two-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row2-two-inner-row1 > td > button")],
      [...document.querySelectorAll(".row2-two-inner-row2 > td > button")],
      [...document.querySelectorAll(".row2-two-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row2-two-inner-row1 > td > button")],
      [...document.querySelectorAll(".row2-two-inner-row2 > td > button")],
      [...document.querySelectorAll(".row2-two-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row2-three-inner-row1 > td > button")],
      [...document.querySelectorAll(".row2-three-inner-row2 > td > button")],
      [...document.querySelectorAll(".row2-three-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row3-one-inner-row1 > td > button")],
      [...document.querySelectorAll(".row3-one-inner-row2 > td > button")],
      [...document.querySelectorAll(".row3-one-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row3-two-inner-row1 > td > button")],
      [...document.querySelectorAll(".row3-two-inner-row2 > td > button")],
      [...document.querySelectorAll(".row3-two-inner-row3 > td > button")]
    ],
    [
      [...document.querySelectorAll(".row3-three-inner-row1 > td > button")],
      [...document.querySelectorAll(".row3-three-inner-row2 > td > button")],
      [...document.querySelectorAll(".row3-three-inner-row3 > td > button")]
    ],
  ],
  boards: [
    [
      [false,false,false],
      [false,false,false],
      [false,false,false],
    ],
    [
      [false,false,false],
      [false,false,false],
      [false,false,false],
    ],
    [
      [false,false,false],
      [false,false,false],
      [false,false,false],
    ],
    [
      [false,false,false],
      [false,false,false],
      [false,false,false],
    ],
    [
      [false,false,false],
      [false,false,false],
      [false,false,false],
    ],
    [
      [false,false,false],
      [false,false,false],
      [false,false,false],
    ],
    [
      [false,false,false],
      [false,false,false],
      [false,false,false],
    ],
    [
      [false,false,false],
      [false,false,false],
      [false,false,false],
    ],
    [
      [false,false,false],
      [false,false,false],
      [false,false,false],
    ],
  ],
  bigBoard: [
    [false,false,false],
    [false,false,false],
    [false,false,false],
  ],
  wins: {
    X: 0,
    O: 0,
    ties: 0
  },
  winner: document.getElementById('winner'),
  whosTurn: document.getElementById('whos-turn'),
}
