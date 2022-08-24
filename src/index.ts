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

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins: number = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} games`);
