/* Bubble Sort 
  sort an array of numbers using bubblesort and print the the number of swaps needed and the first
  and last element via stdout
  link: https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
*/

function countSwaps(arr) {
  let sorted = false;
  let count = 0;
  while(!sorted) {
    for(let i=0; i<arr.length-1; i++) {
      if(arr[i] <= arr[i+1]) continue;
      
      let temp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = temp
      count++
    }

    sorted = arr.every((num, i) => num <= arr[i+1] || !arr[i+1])
  }
    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${arr[0]}`)
    console.log(`Last Element: ${arr[arr.length - 1]}`)
    return;
  }