let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable;
const tc = (e) => {
    console.log(e);
}

// TABLEAUX
let array = ["Bordeaux", "Toulouse", "Nantes"];
// tc(array[1][2]);

let array2 = ["Bordeaux", 24, true, [1,2], {nom: "Denis"}];
//tc(array2[4].nom);

// let objet = {
//     pseudo: "Denis",
//     age: 33,
//     technos: ["Javascript", "React", "NodeJs"],
//     admin: false,
// };

// objet.adresse = "22 rue du code";
// tc(objet);

let data = [
    {
        pseudo: "Denis",
        age: 33,
        technos: ["Javascript", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Samia",
        age: 24,
        technos: ["CSS", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Nikola",
        age: 42,
        technos: ["PHP", "React", "NodeJs"],
        admin: true,
    },
];

// tc(data[2.pseudo])

// LES STRUCTURES DE CONTROLE

if(data[0].age > data[1].age) {
    tc(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
    // Valeur si faux
}

// WHILE

// let w = 0;

// while(w < 10) {
//     w++;
//     tc("La valeur de w est de :" + w);
// }

// Do while

// let d = 0;

// do {
//     d++;
//     tc(d);
// } while (d < 5);

// LES FOR

// for (const user of data) {
//     document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
// }

// for (i = 0; i < data.length; i++) {
//     tc(data[i].technos[0]);
//     document.body.innerHTML += `<h2> ${data[i].technos}</h2>`;
// }

// PROJECT

// const target = document.getElementById("target");
// let arrayExo = ["mara", "zana", "shani"];
// let wordIndex = 0;
// let letterIndex = 0;

// const createLetter = () => {
//     const letter = document.createElement("span");
//     target.appendChild(letter);

//     letter.textContent = arrayExo[wordIndex][letterIndex];

//     setTimeout(() => {
//         letter.remove();
//     }, 2800);
// };

// const loop = () => {
//     setTimeout(() => {
//         if(wordIndex >=arrayExo.length) {
//             wordIndex = 0;
//             letterIndex = 0;
//             loop();
//         } else if(letterIndex < arrayExo[wordIndex].length) {
//                 createLetter();
//                 letterIndex++;
//                 loop();
//         } else {
//             wordIndex++;
//             letterIndex = 0;
//             setTimeout(() => {
//                 loop();
//             }, 2800);
//         }
//     }, 100);
// };
// loop();

// LE SWITCH

// document.body.addEventListener("click", (e) => {
//     switch(e.target.id) {
//         case "javascript":
//             document.body.style.background = "yellow";
//             break;
//         case "php":
//             document.body.style.background = "blue";
//             break;
//         case "python":
//             document.body.style.background = "green";
//             break;
//         default:
//             null;
//     }
// });

// METHODE STRING

// type
let string2 = "Javascript est un langage orienté objet";
tc(typeof string2);

// calcule => eval
//tc(eval(54*85));

// transform string en int => parseInt
//tc(eval(parseInt("50")+50));

// verifier si pas un nombre => isNaN revois True si pas un nombre
//tc(isNaN(string2));

// Longueur de string
//tc(string2.length);

// trouvé l'index d'un caractere
//tc(string2.indexOf("l"));

//coupe un string
// let newString = string2.slice(5, 17);
// tc(newString);

//Decoupe a la valeur
//tc(string.split("i"));

//minuscule => .tolowerCase();
//majuscule => .toUpperCase();

// remplace string
//tc(string2.replace("Javascript", "php"));

//------------------------------------------

// Methode number

let number2 = 42.1245;
let numberString = "42.12 est un chiffre";

// pour les chiffre apres la virgule
// tc(number2.toFixed(1));

// parseInt sert aussi a recuperer un nombre entier dans une chaine de caractere
//tc(parseInt(numberString));

// parseFloat a recuperer un nombre a virgule dans une chaine de caractere
// tc(parseFloat(numberString));

// Math

// tc(Math.PI);

// arrondir
// tc(Math.round(4.4));

// arrondir au plus bas
// tc(Math.floor(4.9));

// arrondi superieur
// tc(Math.ceil(4.1));

// puissance
// tc(Math.pow(2, 7));

// racine
// tc(Math.sqrt(16));

// RANDOM
// tc(Math.random() * 50);

// RAMDOM ENTIER
// tc(Math.floor(Math.random() * 50));


//-------------------------------------
// METHODE ARRAYS

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];
let array5 = [22, 22, 22];

// concatener arrays
let newArray = array3.concat(array4);
// tc(newArray);

// spred operateur
// let newArray2 = [...array3, ...array4];
// tc(newArray2);

// concatener avec espace
//tc(array3.join(" "));

// slice

// tc(array3.slice(1));
// tc(newArray.slice(2,5));

// recupere l'index
//tc(array3.indexOf("Python"));

// ForEach
//array3.forEach((langages) => tc(langages));

// Le commun d'un array
//tc(array5.every((langage) => langage === 22));

// Revois true si element est present
//tc(array3.some((langage) => langage == "Php"));

// prend le premier element
// let shift = array3.shift();
// tc(shift);

// prend le dernier element
// tc(array3.pop());

// SPLICE remplace

// const restArray = array3.splice(1, 1, "c++");
// tc(array3);

// IMPORTANT

let arrayNumber2 = [4, 74, 28, 12, 1];

// aditionne un tableau
//tc(arrayNumber2.reduce((x, y) => x + y));

// Ajouter un element
// arrayNumber2.push("Salut");
// tc(arrayNumber2);

// FILTER, SORT, MAP

// Donne les chiffre superieur a 10
// tc(arrayNumber2.filter((number) => number > 10));

// Range les valeurs
//tc(arrayNumber2.sort());

// Plus petit au plus grand
//tc(arrayNumber2.sort((a, b) => a - b));
// Plus grand au plus petit
//tc(arrayNumber2.sort((a, b) => b - a));

// MAP
//arrayNumber2.map((number) => document.body.innerHTML += `<li> ${number}</li>`);

// Meilleur
// document.body.innerHTML = arrayNumber2
//     .map((number) => `<li> ${number}</li>`)
//     .join("");

//------------------------------------------------------------
// Methode objet
// Rangement objets

// document.body.innerHTML = data
//     //.filter((user) => user.admin === false)
//     .filter((user) => user.pseudo.includes("a"))
//     .sort((a, b) => b.age - a.age)
//     .map(
//         (user) =>
//         `
//         <div class="user-card">
//             <h2>${user.pseudo}</h2>
//             <p>Age : ${user.age}</p>
//             <p>Status : ${user.admin ? "Moderateur" : "Membre"}</p>
//         </div>
//         `
//  )
//  .join("");

//-------------------------------------
// LES DATES

// Date classique

let date = new Date();

// Timestamp

let timestamp = Date.parse(date);

// IsoString

let iso = date.toISOString();

// Premiere forme

// const dateParser = (chaine) => {
//     let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
//         year: "numeric",
//         month: "long", // ou "numeric"
//         day: "numeric",
//         // hour: "numeric",
//         // minute: "numeric",
//     });
//     return newDate;
// }

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long", // ou "numeric"
        day: "numeric",
        // hour: "numeric",
        // minute: "numeric",
    });
    return newDate;
}

// tc(dateParser(date));
// tc(dateParser(timestamp));
// tc(dateParser(iso));


//--------------------------------------------
// Destructuring

let moreData = {
    destVar: ["Element 1", "Element 2"]
}

const { destVar } = moreData;

// tc(moreData.destVar);
// tc(destVar);

// let array55 = [70, 80, 90];
// let [x1, y1, z1] = array55;
// console.log(x1, y1, z1);

const dateDestructuring = (chaine) => {
    let newDate = chaine.split("T")[0];
    let [y, m, d] = newDate.split("-");
    return [d, m, y].join("/");
};

// console.log(dateDestructuring(iso));


//-------------------------------
// Les Datasets


const h3js = document.getElementById("javascript");
//console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");

// h3.forEach((langage) => console.log(langage.dataset.lang));


//----------------------------------------
// Les Regex

let mail = "from_scratch33@gmail.com";
// console.log(mail.match(/Scratch/i));
// console.log(mail.match(/[abc]/i));
// console.log(mail.match(/[123]/));

// Tous les chiffres
// console.log(mail.match(/\d/));

// Matcher toutes les lettres
// console.log(mail.match(/[a-z]/));

// Controle de mail
// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

// Separateur de milliemes
let separator = 25415645614;
//console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));








