"use strict";
// Pour instal => npm i -g typescript
// ex : tsc index.ts pour compil
// tsc --init => creer json ts
// tsc -w pour le watch(compil auto)
// Variable
let num1 = 24;
// TS
let num2;
// union number ou string
let numOrString;
// Array
let array = ["chien", "chat", "poisson"];
array[1] = "cheval";
// TS
let tableau = [];
let tableau1 = []; // number ou boolean
tableau1.push(false);
tableau1.push(54);
console.log(tableau1);
const zidane = {
    id: 0,
    name: "Zidane",
    jersey: 45
};
console.log(zidane);
// Les classes
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
;
const prince = new Singer(45, "gre", true);
console.log(prince);
// Fonction
const sayMyName = (name) => {
    console.log(`Bonjour ${name}`);
};
sayMyName("ducon");
const ageDuCapitaine = (age, size) => {
    if (size) {
        console.log(`La taille du capitaine est de ${size}cm et il est agé de : ${age}`);
    }
    else {
        console.log(`Le capitaine est agé : ${age} ans`);
    }
};
ageDuCapitaine(45, 180);
// Enum & tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
;
console.log(Role.ADMIN);
;
const user1 = {
    name: "Julien",
    attributes: [false, "author"],
    role: Role.ADMIN
};
if (user1.role === Role.ADMIN) {
    console.log("connection spéciale");
}
