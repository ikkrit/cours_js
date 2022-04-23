// Pour instal => npm i -g typescript
// ex : tsc index.ts pour compil
// tsc --init => creer json ts
// tsc -w pour le watch(compil auto)

// Variable

let num1 = 24;
// TS
let num2:number;
// union number ou string
let numOrString: number | string;

// Array

let array = ["chien", "chat", "poisson"];
array[1] = "cheval";
// TS
let tableau: string[] = [];
let tableau1: (number | boolean)[] = []; // number ou boolean
tableau1.push(false);
tableau1.push(54);

console.log(tableau1);

// Les objets

// TS
interface Player {
    id?: number,
    name?: string,
    jersey?: number
}

const zidane:Player = {
    id: 0,
    name: "Zidane",
    jersey: 45
};

console.log(zidane);

// Les classes

class Singer {
    id?: number;
    name?: string;
    alive?: boolean;

    constructor(id?:number, name?:string, alive?:boolean) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
};

const prince= new Singer(45,"gre", true);
console.log(prince);


// Fonction

const sayMyName = (name: string) => {
    console.log(`Bonjour ${name}`);
}
sayMyName("ducon");

const ageDuCapitaine = (age: number | string, size?: number):void => {
    if(size) {
        console.log(`La taille du capitaine est de ${size}cm et il est agé de : ${age}`);
    } else {
        console.log(`Le capitaine est agé : ${age} ans`)
    }
}

ageDuCapitaine(45,180);


// Enum & tuple

enum Role {ADMIN, PREMIUM, BASIC};
console.log(Role.ADMIN);

interface User {
    name: string;
    attributes: [number | boolean, string];
    role: Role;
};

const user1:User = {
    name: "Julien",
    attributes: [false, "author"],
    role: Role.ADMIN
};

if(user1.role === Role.ADMIN) {
    console.log("connection spéciale");
}


