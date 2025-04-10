"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
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
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
});
console.log(`Man United won ${manUnitedWins} games`);
