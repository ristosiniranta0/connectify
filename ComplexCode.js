/* ComplexCode.js */

// This code is a simulation of a virtual pet game where users can interact with a digital pet

class Pet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.hunger = 0;
    this.happiness = 100;
    this.energy = 100;
  }

  feed(food) {
    this.hunger -= food;
    if (this.hunger < 0) this.hunger = 0;
    this.happiness += 10;
    if (this.happiness > 100) this.happiness = 100;
    this.energy -= 5;
    if (this.energy < 0) this.energy = 0;
  }

  play() {
    this.hunger += 5;
    this.happiness += 20;
    if (this.happiness > 100) this.happiness = 100;
    this.energy -= 10;
    if (this.energy < 0) this.energy = 0;
  }

  sleep() {
    this.hunger += 5;
    this.happiness -= 10;
    if (this.happiness < 0) this.happiness = 0;
    this.energy += 30;
    if (this.energy > 100) this.energy = 100;
  }

  getStatus() {
    return `Name: ${this.name}, Species: ${this.species}, Hunger: ${this.hunger}, Happiness: ${this.happiness}, Energy: ${this.energy}`;
  }
}

const pet1 = new Pet("Bobby", "Dog");
const pet2 = new Pet("Mittens", "Cat");
const pet3 = new Pet("Fido", "Dog");

pet1.feed(20);
pet2.play();
pet3.sleep();

console.log(pet1.getStatus());
console.log(pet2.getStatus());
console.log(pet3.getStatus());
// Continue simulating interactions with the pets...

// More code can be added to expand the functionality of the virtual pet game