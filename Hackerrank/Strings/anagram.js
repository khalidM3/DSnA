/*  Anagram
make a function that recieves two strings and and returns the number of characters 
that are not the found in both strings
  link: https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
*/

function makeAnagram(a, b) {
  let tracker = {};
  let count = 0;

  for(let i=0; i<a.length; i++)
      tracker[a[i]] = ( ++tracker[a[i]] || 1 )

  for(let i=0; i<b.length; i++) {
      if( !tracker[b[i]] ) continue
      --tracker[b[i]]
      count += 2
  }
  return (a.length + b.length) - count
}