if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

const fs = require('fs'),
  filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
  let totalSumArray = [];
  console.log('OK: ' + filename);
  // console.log(data);

  const splitted = data.split(/\n\s*\n/);
  splitted.forEach((capture, i) => {
    const splittedArray = capture.split('\n');
    splittedArray.length;

    const sum = splittedArray.reduce((accumulator, value) => {
      return accumulator + parseInt(value);
    }, 0);

    totalSumArray.push(sum);
  });

  var largest = Math.max.apply(Math, totalSumArray);
  let i = totalSumArray.indexOf(Math.max(...totalSumArray));

  const threeLargest = totalSumArray
    .sort(function (a, b) {
      return b - a;
    })
    .slice(0, 3);
  // console.log(largest, i);
  console.log(threeLargest.reduce((a, b) => a + b, 0));
});
