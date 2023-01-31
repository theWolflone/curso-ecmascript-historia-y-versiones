var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);


const animal = 'Dog';
animal = 'Cat';
console.log(animal);
// Error: Cannot assign to 'animal' because it is a constant.

const fruits = () => {
      if(true){
            var fruit1 = 'Apple'; //function scope, var is global
            let fruit2 = 'Kiwi'; //block scope
            const fruit3 = 'Banana'; //block scope
            console.log(fruit2);
            console.log(fruit3);
      }
      console.log(fruit1)
      console.log(fruit2)
      console.log(fruit3)
};