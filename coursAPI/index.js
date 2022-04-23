// XMLHttpRequest

function reqListener() {
    //console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
//req.send();

//-------------------------------------------------------
// FETCH

// fetch("URl").then((response) => {
//     console.log(response);
// }).catch((err) => console.log(err));

fetch("data.txt")
    .then((res) => res.text())
    //.then((data) => console.log(data));

//fetch("data.json").then((res) => res.json()).then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
    method: "GET",
    headers: myHeaders,
    Mode: "cors",
    cache: "default"
};

// fetch("data.json", init).then((res) => console.log(res));

//-----------------------------------------------------------------
// CRUD => Create (POST), read (GET), update (PUT), delete (DELETE)
//-----------------------------------------------------------------

const init2 = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pseudo: "From Scratch",
        message: "Yo les gens !"
    }),
    mode: "cors",
    Credential: "same-origin",
};

document.querySelector('form').addEventListener("submit", () => {
    fetch('http://localhost:3000/posts', init2).then(() =>
    console.log("data envoyée")
    );
});

//-------------------------------------------------
// Asynchrone
//-------------------------------------------------

// setTimeout(() => {
//     console.log("test");
// }, 2000);

// Promise

// fetch("mon lien").then((res) => res);

// async/await

// async function fetchData() {
//     await fetch("mon lien")
//     // attend que le await soit exécut" avant de faire la suite
//     executeFonction();
//     await console.log("coucou");
//     console.log("coucou");
// }

// Version fléché

// const fetchData2 = async () => {
//   await fetch("mon lien")
//   // attend que le await soit exécut" avant de faire la suite
//   executeFonction();
//   await console.log("coucou");
//   console.log("coucou");
// };

//--------------------------------------------------------------------
// LE JSON
//--------------------------------------------------------------------

// Méthode .json() => méthode qui s'auto-resout
// en renvoyant le Body de la requete

// fetch("data.json").then((res) => res.json()).then((data) => {
//     // stringify => convertit en JSON
//     let settings = JSON.stringify(data);
//     // Parse => transforme json en objet js
//     console.log(JSON.parse(settings));
// });


//----------------------------------------------------------------------
// WEB API
//----------------------------------------------------------------------

//---------------
// CLIENT STORAGE
//---------------

// local Storage
//--------------
// inspecteur => Stockage => stockage local
// localStorage.data = "Je stock la data";
// console.log(localStorage);
// afficher dans le body
// document.body.textContent = localStorage.data;
// Supprimer
// localStorage.removeItem("data");
// remplacer
// localStorage.user = "Denis";
// Storage object
// const obj = {
//     name: "Denis",
//     age: 22,
// };

// Il faut passer des chaines de caractéres
// localStorage.user = obj;
// localStorage.user = JSON.stringify(obj);
// Affichage body
// console.log(JSON.parse(localStorage.user));

// Session Storage
//----------------

// sessionStorage.dataSetting = "55px";
// Affichage body
// document.body.textContent = sessionStorage.dataSetting;
// Suprimer
// sessionStorage.clear();

// Cookies
//--------

document.cookie = "userName=deLaMortQuiTu";

// Bonne Pratique

document.cookie = "pseudo=FS;path=/;max-age=450000; secure; samesite"






