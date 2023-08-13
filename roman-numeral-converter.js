function convertToRoman(num) {
  const numeralMapping = [
    { arabic: 1000, roman: "M" },
    { arabic: 900, roman: "CM" },
    { arabic: 500, roman: "D" },
    { arabic: 400, roman: "CD" },
    { arabic: 100, roman: "C" },
    { arabic: 90, roman: "XC" },
    { arabic: 50, roman: "L" },
    { arabic: 40, roman: "XL" },
    { arabic: 10, roman: "X" },
    { arabic: 9, roman: "IX" },
    { arabic: 5, roman: "V" },
    { arabic: 4, roman: "IV" },
    { arabic: 1, roman: "I" },
  ];

  if (num < 1 || num > 3999) {
    return "Invalid output. enter number between 1 - 3999";
  }

  let result = "";
  for (let i = 0; i < numeralMapping.length; i++) {
    while (num >= numeralMapping[i].arabic) {
      result += numeralMapping[i].roman;
      num -= numeralMapping[i].arabic
    }
  }
  return result
}

convertToRoman(36);
