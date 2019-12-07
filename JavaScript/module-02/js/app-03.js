function findLongestWord(string) {
  let biggestWord = '';
  let arrString = string.split(' ');
  for (const itemWord of arrString) {
    if (itemWord.length > biggestWord.length) {
      biggestWord = itemWord;
    }
    continue;
  }
  return biggestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
