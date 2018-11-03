/*     Anagram
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


/*    Alternating Characters
  Make a function that returns the count of adjacent matching characters
  eg ABABABABAB should return 0
     AAAA should return 3
*/

function alternatingCharacters( s ) {
  let count = 0
  for(let i=0; i<s.length; i++)
    if( s[i] == s[i+1] ) count++
  return count
}