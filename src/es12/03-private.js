class user {
      constructor(name, age){
            this.name = name;
            this.age = age;

      }
      // metodos
      #speak(){
            return 'Hello';
      }
      greeting(){
            return `${this.speak()} ${this.name}`;
      }
      thank(){
            return `Thanks ${this.name}`;
      }
       // getters
      get #uAge(){
            return this.age;
      }

      // setters
      set #uAge(n){
            this.age = n;
      }
}

const bebeloper = new user ('Bebeloper', 30);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 31);