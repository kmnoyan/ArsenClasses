function main(arrayOfStrings) {
  [inputCount, ...remainingArray] = arrayOfStrings;

  let englishAlphabet = [...Array(26)].map((_, i) =>
    String.fromCharCode(i + 97)
  );

  let dictionaryObject = {};
  let firstCharIndex = 0;
  let secondCharIndex = 1;
  let dictionaryWordIndex = 1;
  for (let i = 0; i <= 673; i++) {
    if (firstCharIndex != secondCharIndex) {
      dictionaryObject[
        englishAlphabet[firstCharIndex] + englishAlphabet[secondCharIndex]
      ] = dictionaryWordIndex;
      dictionaryWordIndex++;
    }
    secondCharIndex++;
    if (secondCharIndex === englishAlphabet.length) {
      secondCharIndex = 0;
      firstCharIndex++;
    }
  }
  remainingArray.forEach((word) => console.log(dictionaryObject[word]));
}

main([7, "ab", "ac", "az", "ba", "bc", "zx", "zy"]);
