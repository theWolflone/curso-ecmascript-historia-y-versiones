// flat
const array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(array.flat(2));

// flatMap
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2]));
