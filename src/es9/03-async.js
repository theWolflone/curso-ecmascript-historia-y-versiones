async function* another() {
      yield await Promise.resolve(1);
      yield await Promise.resolve(2);
      yield await Promise.resolve(3);
}

const other = another();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('End');

async function arrayNames(array) {
      for await (let value of array) {
            console.log(value);
      }
}

const names = arrayNames(['Luis', 'Juan', 'Pedro']);
console.log("End");