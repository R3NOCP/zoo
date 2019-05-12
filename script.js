function Monkey(name, food, age, specie) {
  this.monkeyName = name;
  this.monkeyFood= food;
  this.monkeyAge = age;
  this.monkeySpecie= specie;
}

Monkey.prototype.loves = "Bananas";

var monkey01 = new Monkey("Mike", "Bananas", 38, "Gorilla");
document.getElementById("monkeys").innerHTML =
"Monkey " + monkey01.monkeyName + ' loves ' + monkey01.loves  + ' his age is ' + monkey01.monkeyAge;
