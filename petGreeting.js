const pet = {
  name: 'Booboo',
  species: 'cat',
  fear: 'birds',
  age: 3,
  greet: function() {
    return 'Hi, my name is ' + this.name + ' and I am a ' + this.species +
      '. I\'m terrified of ' + this.fear + ' and I\'m ' + this.age + ' years old.';
  }
};

console.log(pet.greet());