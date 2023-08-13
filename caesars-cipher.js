function rot13(str) {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let splitStr = str.split("");
  let newSentence = [];

  for (let i = 0; i < splitStr.length; i++) {
    let char = splitStr[i];
    let isUpperCase = char === char.toUpperCase();
    let charToUpperCase = isUpperCase ? char : char.toUpperCase();
    let charIndex = alphabet.indexOf(char.toUpperCase());

    if (charIndex !== -1) {
      let newIndex = (charIndex + 13) % 26;
      let newChar = alphabet[newIndex];

      newChar = charToUpperCase ? newChar : newChar.toUpperCase();
      newSentence.push(newChar);
    } else {
      newSentence.push(char);
    }
  }

  let result = newSentence.join("");
  return result;
}

rot13("SER");
