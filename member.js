function skillsMember() {
  const member = {
    name: 'John',
    age: 25,
    skills: ['html', 'css', 'js'],
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };

  return member;
}