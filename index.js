// SELECTEURS

// document.querySelector('h4').style.background = 'yellow';
// const baliseHTML = document.querySelector('h4');

// Click event

const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');

questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle('question-click');
});

btn1.addEventListener('click', () => {
    response.classList.add('show-response');
});
btn2.addEventListener('click', () => {
    response.style.visibility = "visible";
    response.style.background = "red";
});

// MOUSE EVENT

const mousemove = document.querySelector('.mousemove');
window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.background = "pink";
});

response.addEventListener('mouseover', () => {
    response.style.transform = "rotate(2deg)";
});

const tc = (a) => {
    console.log(a);
};

// KEYPRESS EVENT

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById("key");

// FONCTION AUDIO
const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".flac";
    audio.play();
}

// document.addEventListener('keypress', (e) => {
//     key.textContent = e.key;
//     if( e.key === "a") {
//         keypressContainer.style.background = "red";
//         ring(e.key);
//     } else if ( e.key === "z" ) {
//         keypressContainer.style.background = "green";
//         ring(e.key);
//     } else {
//         keypressContainer.style.background = "tomato";
//         ring(e.key);
//     }
// });

// SCROLL 

const nav = document.querySelector("nav");
window.addEventListener('scroll', () => {
    if(window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

// FORMULAIRE

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let langage = "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
    langage = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(cgv.checked) {
        document.querySelector("form > div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${langage}</h4>
        `;
    } else {
        alert('Veuillez accepter les CGV');
    }
});

// LOAD EVENT

// window.addEventListener("load", () => {
//     tc("document chargé !!!!");
// });

// FOREACH

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});

// addEventListener vs oneclick
// addEventListener = plusieur event
// oneclick = 1 seul ecrase le precedent

// document.body.onscroll = () => {
//     console.log('click');
// };
// document.body.onscroll = () => {
//     console.log('scroll');
// };

// Bubbling => fin(addEventListener est de base en Bubblig)
document.addEventListener("click", () => {
    console.log('cliclicli');
});

// Usecapture => sur true => le passe en premier(est sur false par defaut(Bubbling))
document.addEventListener("click", () => {
    console.log('cliclicsdfsdfsdfli');
}, true);

// Stop progragation
// Empeche les autres event au click
// questionContainer.addEventListener("click", (e) => {
//     alert("test test");
//     e.stopPropagation();
// });

//removeEventListener exist

// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// ouvrir un pop up
// window.open('http://google.com', "cours js", "height=600", "width=800");

// evenement adossés a window:

// alert("hello");

// confirm
btn2.addEventListener("click", () => {
    confirm("Voulez vous vraiment ???");
});

// prompt message avec reponse

btn1.addEventListener("click", () => {
    let answer = prompt("entrez votre nom ??");
    console.log(answer);
    questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

// timer compte a rebours

setTimeout(() => {
    //temps avant l'execution = 2000
    questionContainer.style.borderRadius = "300px";
}, 2000);

//execute un code en interval

// let interval = setInterval(() => {
//     document.body.innerHTML += 
//     `
//         <div class="box">
//             <h2>Nouvelle Boite !</h2>
//         </div>
//     `
// }, 1000);

// document.body.addEventListener("click", () => {
//     clearInterval(interval);
// });

// remove 

// document.body.addEventListener("click", (e) => {
//     e.target.remove();
//     clearInterval(interval);
// });

// Location

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
    // location.href = "http://twitter.fr";
// }

// navigator

//console.log(navigator.userAgent);
// voir geolocalisation

// History

//console.log(history);
//window.history.back();
// history.go(-2);


// set property

window.addEventListener("mousemove", (e) => {
    nav.style.setProperty('--x', e.layerX + "px");
    nav.style.setProperty('--y', e.layerY + "px");
});