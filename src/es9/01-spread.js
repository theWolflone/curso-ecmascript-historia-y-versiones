const user = { username: "lxbo", age: 17, country: "CR" };
const {username, ...values} = user;
console.log(username);
console.log(values);