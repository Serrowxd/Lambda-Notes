const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ',
};

function telephoneWords(str) {
  const words = [];
  function recurse(currentWord, index) {
    if (currentWord.length === str.length) {
      words.push(currentWord);
      return;
    }
    const currentLetters = phoneDigitsToLetters[str[index]];
    for (let i = 0; i < currentLetters.length; i++) {
      recurse(currentWord + currentLetters[i], index + 1);
    }
  }
  recurse('', 0);
  return words;
}
