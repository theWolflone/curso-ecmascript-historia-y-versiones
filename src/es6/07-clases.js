// declarando
class User{

}
// instancia de una clase
// const user = new User();

class user {
      // metodos
      greeting(){
            return 'Hello';
      }
      thank(){
            return 'Thanks';
      }
};

const lxbo= new user();
console.log(lxbo.greeting());
const lxbo2= new user();
console.log(lxbo2.thank());

// constructor

class user {
      // Constructor
      constructor(){
            console.log("User created");
      }
      // metodos
      greeting(){
            return 'Hello';
      }
      thank(){
            return 'Thanks';
      }
}

const alberto = new user();

// this

class user{
      constructor(name){
            this.name = name;
      }
      // metodos
      speak(){
            return 'Hello';
      }
      greeting(){
            return `${this.speak()} ${this.name}`;
      }
      thank(){
            return `Thanks ${this.name}`;
      }
      
}

const santiago = new user('Santiago');
console.log(santiago.thank());

// setters getters

class user {
      constructor(name, age){
            this.name = name;
            this.age = age;

      }
      // metodos
      speak(){
            return 'Hello';
      }
      greeting(){
            return `${this.speak()} ${this.name}`;
      }
      thank(){
            return `Thanks ${this.name}`;
      }
       // getters
      get uAge(){
            return this.age;
      }

      // setters
      set uAge(n){
            this.age = n;
      }
}

const bebeloper = new user ('Bebeloper', 30);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 31);