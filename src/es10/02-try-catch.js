try {
     hello() // ReferenceError: hello is not defined
} catch (error) {
      console.log(error);
}

try {
      anotherFn()
} catch (error) {
      console.log('Esto es un error');
}