const fs = require('fs');
const filename = process.argv[2];

fs.readFile(filename, 'utf8', function (err, data) {
  console.log('OK: ' + filename);

  const splitted = data.split(/\r?\n|\r|\n/g);

  const newArr = splitted.map((el) => {
    return el.split(/[-,]/);
  });

  let pairCount = 0;

  newArr.forEach((arr) => {
    const lMin = Number(arr[0]);
    const lMax = Number(arr[1]);
    const rMin = Number(arr[2]);
    const rMax = Number(arr[3]);

    if (lMin <= rMin && lMax >= rMax) {
      pairCount += 1;
    } else if (rMin <= lMin && rMax >= lMax) {
      pairCount += 1;
    } else if (rMin <= lMax && lMin <= rMax) {
      pairCount += 1;
    }
  });
  console.log(pairCount);
});
