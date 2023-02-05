function* iterate(array){
      for (let value of array){
        yield value;
      }
}

const it = iterate(['a', 'b', 'c', 'd']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* getId() {
      let id = 0;
      while (true) {
            yield ++id;
      }
}

const gid = getId();
console.log(gid.next().value);
console.log(gid.next().value);
console.log(gid.next().value);
console.log(gid.next().value);