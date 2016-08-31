import userMove from './user-move'
import { buttons } from './config'

export default function addOnclicks(){
  let num = 0
  let row = 0
  let column = 0
  let count = 0

  buttons.forEach(array => {
    array.forEach(item => {
      item.forEach(button => {
        if(column === 3){
          column = 0
          row++
        }
        if(row === 3){
          row = 0
        }
        if(count === 9){
          num++
          count = 0
        }
        column++
        count++

        button.onclick = function(num, row, column) {
          return () => userMove(num, row, column - 1)
        }(num, row, column)
      })
    })
  })
}
