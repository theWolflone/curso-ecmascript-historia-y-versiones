const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const fnAsync2 = async () => { 
      const something = await fnAsync();
      console.log(something);
      console.log("Hello");
}
console.log("Before");

fnAsync2();

console.log("After");