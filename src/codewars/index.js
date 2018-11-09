/* Recursion
  make a function that recieves a linkedlist node and returns the list as a string 
  eg 0 -> 1 -> 2 -> 3 -> null
*/

function stringify(list) {
  if(!list) return 'null'
  return  list.data + ' -> '+ stringify(list.next)
}