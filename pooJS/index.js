const obj = {
    // index:value
    pseudo: "From Scratch",
    ville: "Bordeaux",
    admin: false,

    // direBonjour() {
    //     console.log("Bonjour je suis " + this.pseudo);
    // }

    direBonjour: function () {
        console.log("Bonjour je suis " + this.pseudo);
    }
}

// Ajouter
// obj.age = 24;
// obj["admin"] = true;

// Supprimer paramètre
// delete obj.ville;

// Checker si propriété existe
// console.log("age" in obj);

// Parcourir l'objet
// for(const key in obj) {
//     console.log(key + " : " + obj[key]);
// }

// console.log(obj.direBonjour());

// Obtenir les clés

// const keys = Object.keys(obj);
// console.log(keys);

// Obtenir les valeurs
// const values = Object.values(obj);
// console.log(values);

// const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
    taille: "1m80",
    poids: "75kg",
}

// Fusionner objets
// Si même clé le dernier ecrase l'autre
// const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

// Empecher les modifications
// const newObj = Object.freeze(obj);

// Peut modifier , mais pas créer de nouveaux atributs
// const newObj = Object.seal(obj);
// newObj.pseudo = "test";
// newObj.adresse = "42 avenue du code";

// console.log(newObj);


//-----------------------------------------------------------
// Construire objet
//-----------------------------------------------------------

// Fonction constructeur

function User(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;

    this.getCity = function() {
        console.log(this.pseudo+" habite a "+ this.ville);
    }
}

const user1 = new User('Ikkrit', 'Lyon');
const user2 = new User('Denis', 'Nantes');

// console.log(user2.getCity());

// Factory functions
//------------------------------------------


// function User3(pseudo, ville) {
//     return {
//         pseudo,
//         ville
//     }
// }

// const user4 = User3('FS', "nice");
// console.log(user4);

// CLASS
//--------------------------------------------

class Utilisateur {
    constructor(pseudo, ville) {
        this.pseudo = pseudo;
        this.ville = ville;
    }
    sayMyName = function() {
        console.log("Bonjour je suis un " + this.pseudo);
    }
}

const user5 = new Utilisateur('Samia', "Lyon");

// Ajouter methode a prototype (plus rapide)
Utilisateur.prototype.sayCity = function () {
    console.log("J'habite à " + this.ville);
}
console.log(user5.sayCity());

let array = [1,2,3];

// Ajouter plusieurs methodes a prototype
Object.assign(Utilisateur.prototype, {
    methode1() {
        // La methode
    },
    methode2() {
        // La methode
    }
});

// Heritage
//---------

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    saySomething(text) {
        console.log(this.name + " dit : " + text);
    }
}

class Dog extends Animal {
    run() {
        console.log("Le chien cour !");
    }
}

class Cat extends Animal {
    hunt() {
        console.log("J'ai tué un oiseau");
    }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin);

