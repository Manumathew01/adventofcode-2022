const fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err, data) {
  const splitted = data.split(/\r?\n|\r|\n/g);
  splitted.splice(0, 10);

  let stack = [
    ['B', 'L', 'D', 'T', 'W', 'C', 'F', 'M'],
    ['N', 'B', 'L'],
    ['J', 'C', 'H', 'T', 'L', 'V'],
    ['S', 'P', 'J', 'W'],
    ['Z', 'S', 'C', 'F', 'T', 'L', 'R'],
    ['W', 'D', 'G', 'B', 'H', 'N', 'Z'],
    ['F', 'M', 'S', 'P', 'V', 'G', 'C', 'N'],
    ['W', 'Q', 'R', 'J', 'F', 'V', 'C', 'Z'],
    ['R', 'P', 'M', 'L', 'H'],
  ];

  const commands = splitted.map((el) => {
    return el.split(' ');
  });

  let stackTop = '';
  commands.forEach((command) => {
    qty = Number(command[1]);
    startIndex = Number(command[3] - 1);
    endIndex = Number(command[5] - 1);

    let removed = stack[startIndex].splice(stack[startIndex].length - qty, qty);
    //FOR PART 1
    stack[endIndex] = stack[endIndex].concat(removed.reverse());
    //* FOR PART 2 .reverse() is not required
  });
  stack.forEach((item) => {
    if (item.length !== 0) stackTop += item.at(-1);
  });
  console.log(stackTop);
});
