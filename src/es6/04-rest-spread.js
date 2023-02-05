// arrays destructuring

let fruits = ["apple", "banana"];
let [a, b] = fruits;
// console.log(a, fruits[1]);



// object destructuring

let user = {username: 'Lobo', age: 17};
let {username, age} = user;
// console.log(username, user.age);



// spread operator

let person = {name: 'Santiago', age: 17};
let country= 'CR';
let data = {id: 1, ...person, country};
console.log(data);


// rest operator

function sum(num, ...values) {
  console.log(values);
  console.log(num+values[0]);
  return num+values[0];
      
}

sum(1, 1, 2, 3)


function solution(json1 = {
      name: 'Mr. Michi',
      food: 'Pescado',
    },
    json2 = {
      age: 12,
      color: 'Blanco',
    }) {
      return {...json1, ...json2};
    };
