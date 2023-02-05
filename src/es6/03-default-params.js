function newUser(name, age, country) {
  var name = name || 'Oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
};

// newUser();
// newUser('Santiago', '17', 'CR');

function newAdmin(name='Oscar', age=32, country='CL') {
  console.log(name, age, country);
};
  
newAdmin();
newAdmin('Santiago', '17', 'CR');