const palindromeWords = [
    "aibohphobia",
    "common",
    "bib",
    "bob",
    "deified",
    "anagram",
    "detartrated",
    "dewed",
    "malayalam",
    "noon",
    "noun",
    "racecar",
    "stats",
    "kayak",
    "deed",
    "unique",
  ];
  
  const transformedWords = palindromeWords.map(function (word) {
    const reversedWord = word.split("").reverse().join("");
  
    if (word === reversedWord) {
      return true;
    }
  
    return false;
  });
  
  console.log(transformedWords);  