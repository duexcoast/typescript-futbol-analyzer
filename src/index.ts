import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  // if we don't specify the encoding, we'll return a
  // buffer by default.
  encoding: 'utf-8',
});

console.log(matches);
