import { buttons, boards } from './config'

let currentValue
let win = false

export default function userMove(num, row, column) {
  if(currentValue === 'X'){
    currentValue = 'O'
  }
  else {
    currentValue = 'X'
  }

  console.log("num: " + num, "row: " + row, "column:" + column);

  boards[num][row][column] = currentValue
  console.log(boards);
}
