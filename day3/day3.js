const fs = require("fs");
const filename = process.argv[2];

fs.readFile(filename, "utf8", function (err, data) {
  console.log("OK: " + filename);

  let alphaString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const splitted = data.split(/\r?\n|\r|\n/g);

  //* PART 1
  let sum = 0;

  splitted.forEach((line) => {
    const firstHalf = line.slice(0, line.length / 2);
    const secondHalf = line.slice(line.length / 2, line.length);

    let matchAlpha = "";
    // firstHalf.forEach((char) => {
    //     if(secondHalf.indexOf(char) !== -1)
    // })
    for (let i in firstHalf) {
      secondHalf.includes(firstHalf[i]) ? (matchAlpha = firstHalf[i]) : false;
    }

    sum += alphaString.indexOf(matchAlpha) + 1;
  });

  console.log("Part 1 ->", sum);

  //* PART 2

  let sum2 = 0;
  for (let i = 0; i < splitted.length; i += 3) {
    let rucksackA = splitted[i];
    let rucksackB = splitted[i + 1];
    let rucksackC = splitted[i + 2];

    const rucksackAChars = rucksackA.split("");
    let matchAlpha2 = "";

    rucksackAChars.forEach((char) => {
      if (rucksackB.includes(char) && rucksackC.includes(char))
        matchAlpha2 = char;
    });
    sum2 += alphaString.indexOf(matchAlpha2) + 1;
  }
  console.log("Part 2 ->", sum2);
});
