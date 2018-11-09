//  Bubble sort

function bubbleSort(arr) {
  let sorted = false;
  while(!sorted) {
    for(let i=0; i<arr.length-1; i++) {
      if(arr[i] <= arr[i+1]) continue;
      
      let temp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = temp
    }

    sorted = arr.every((num, i) => num <= arr[i+1] || !arr[i+1])
  }
  return arr;
}