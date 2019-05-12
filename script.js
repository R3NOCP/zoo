
// Monkeys
function Monkey(name, food, age, sex, specie) {
  this.monkeyName = name;
  this.monkeyFood= food;
  this.monkeyAge = age;
  this.monkeySex = sex;
  this.monkeySpecie= specie;
}

Monkey.prototype.loves = "Bananas";
Monkey.prototype.sound = "hoo hoo hooo";

var monkey01 = new Monkey("Mike", "Bananas", 38, "male", "Gorilla");
document.getElementById("monkeys").innerHTML =
monkey01.monkeyName + ' loves ' + monkey01.loves  + ' his age is ' + monkey01.monkeyAge;


// Lions
function Lion(name, food, age, sex, specie) {
  this.lionName = name;
  this.lionFood= food;
  this.lionAge = age;
  this.lionSex = sex;
  this.lionSpecie= specie;
}

Lion.prototype.loves = "fresh meat";
Lion.prototype.sound = "Roarrrr";

var lion01 = new Lion("Lion01", "Animals", 8, "male", "Lion");
document.getElementById("lions").innerHTML =
lion01.lionName + ' loves ' + lion01.loves  + ' his age is ' + lion01.lionAge;
