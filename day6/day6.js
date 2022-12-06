const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8').trim();

const getCharacters = (length) => {
  let count = 0;
  let markerArr = [];
  for (let el of data.split('')) {
    markerArr.push(el);
    count += 1;
    if (markerArr.length < length) continue;

    if (new Set(markerArr).size === markerArr.length) break;

    markerArr.shift();
  }
  return count;
};

console.log('PART 1 -> ', getCharacters(4));
console.log('PART 2 -> ', getCharacters(14));
