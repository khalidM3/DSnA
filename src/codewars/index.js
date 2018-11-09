/* Recursion
  make a function that recieves a linkedlist node and returns the list as a string 
  eg 0 -> 1 -> 2 -> 3 -> null
*/

function stringify(list) {
  if(!list) return 'null'
  return  list.data + ' -> '+ stringify(list.next)
}


/* Currying
make a funciton add that can be curried to add the 
eg. add(1) = 1; add(1)(1) = 2; add(1)(2)(3) = 6 etc; 
*/

function add(n){
  var fn = function(x) {
    return add(n + x);
  }
  
  fn.valueOf = function() {
    return n;
  };
  
  return fn;
}

let num = add(1)(2)(3)


/* Recursion
  A boy told the king to give him one grain of rice for the first sqr on a chess board then 2 on
  the second and 4 on the third etc. Write a function given a grain amount, returns the square number
  the last grain is on. eg 
 */

function squaresNeeded(grains){
  function recc(square = 1, sqGrains = 1) {
    if(sqGrains > grains) return square - 1;
    if(square > 64) return;
    return recc(square + 1, sqGrains * 2)
  }
  return recc()
}

// better answer: const squaresNeeded = grains => Math.ceil(Math.log2(grains+1)) ;