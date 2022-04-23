const first = document.querySelector(".first-para");
first.style.background = "red";

const second = document.querySelector(".second-para");
second.style.background = "blue";

const third = document.querySelector(".third-para");
third.style.background = "yellow";


first.addEventListener("click", () => {
    first.classList.toggle('boxe');
});

second.addEventListener("click", () => {
    second.style.background = "tomato";
});

const testObjet = {
    nom: "helena",
    prenom: "Larusse",
    age: 18,
    etrange: [45,45,45]
};

console.log(testObjet.age);