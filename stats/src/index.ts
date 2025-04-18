import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;

// for (let match of matches) {
//   if (match[1] === 'Man United' && match[5] === 'H') {
//     manUnitedWins++;
//     console.log(match[1]);
//   } else if (match[2] === 'Man United' && match[5] === 'A') {
//     manUnitedWins++;
//     console.log(match[2]);
//   }
// }
reader.data.forEach((match) => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
});

console.log(`Man United won ${manUnitedWins} games`);
