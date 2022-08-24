import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    // if we don't specify the encoding, we'll return a
    // buffer by default.
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

let manUnitedWins: number = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} games`);
