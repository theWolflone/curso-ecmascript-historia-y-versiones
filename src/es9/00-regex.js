const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = regex.exec('2018-04-30');
console.table(match);