//* 1 for rock -> A,X
//* 2 for paper -> B, Y
//* 3 for scissors -> C,Z

//* LOSS -> 0
//* DRAW -> 3
//* WIN -> 6

const fs = require("fs"),
  filename = process.argv[2];
fs.readFile(filename, "utf8", function (err, data) {
  console.log("OK: " + filename);

  let scorePartA = 0;
  let scorePartB = 0;

  const splitted = data.split(/\r?\n|\r|\n/g);

  //Part A
  const combinationA = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6,
  };

  //Part B
  const combinationB = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7,
  };

  splitted.forEach((_, i) => {
    scorePartA += combinationA[splitted[i].trim()];
    scorePartB += combinationB[splitted[i].trim()];
  });

  console.log("Part A ->", scorePartA);
  console.log("Part B ->", scorePartB);
});
