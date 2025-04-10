import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

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
