"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader('football.csv');
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
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
});
console.log(`Man United won ${manUnitedWins} games`);
