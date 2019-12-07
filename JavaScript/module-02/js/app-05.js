// first solution

const checkForSpamFirst = function(inputParam) {
  const lowerStrict = inputParam.toLowerCase();
  const arrLowerStrict = lowerStrict.split(' ');
  for (const arrLowerStrictItem of arrLowerStrict) {
    if (
      arrLowerStrictItem.includes('spam') ||
      arrLowerStrict.includes('sale')
    ) {
      return true;
    }
  }
  return false;
};

console.log(checkForSpamFirst('Latest technology news')); // false

console.log(checkForSpamFirst('JavaScript weekly newsletter')); // false

console.log(checkForSpamFirst('Get best sale offers now!')); // true

console.log(checkForSpamFirst('[SPAM] How to earn fast money?')); // true

// or second solution

const checkForSpamSecond = function(inputParam) {
  const lowerStrict = inputParam.toLowerCase();
  const arrLowerStrict = lowerStrict.split('');
  for (let i = 0; i < arrLowerStrict.length; i += 1) {
    if (
      arrLowerStrict[i] === 's' &&
      arrLowerStrict[i + 1] === 'p' &&
      arrLowerStrict[i + 2] === 'a' &&
      arrLowerStrict[i + 3] === 'm'
    ) {
      return true;
    } else if (
      arrLowerStrict[i] === 's' &&
      arrLowerStrict[i + 1] === 'a' &&
      arrLowerStrict[i + 2] === 'l' &&
      arrLowerStrict[i + 3] === 'e'
    ) {
      return true;
    }
  }
  return false;
};

console.log(checkForSpamSecond('Latest technology news')); // false

console.log(checkForSpamSecond('JavaScript weekly newsletter')); // false

console.log(checkForSpamSecond('Get best sale offers now!')); // true

console.log(checkForSpamSecond('[SPAM] How to earn fast money?')); // true
