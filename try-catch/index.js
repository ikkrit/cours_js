//"use strict";

try {
    // Test un block de code
    maFonction();
} catch (err) {
    //console.log(err);
}

function isValidJSON(txt) {
    try {
        JSON.parse(txt);
        return true;
    } catch {
        return false;
    }
};

// console.log(isValidJSON());

// Finally

try {
    // Test un block de code
    maFonction();
} catch (err) {
    //console.log(err);
} finally {
    //console.log("On est arrivé au bout !");
}

// Throw

function isNumber(num) {
    if(isNaN(num)) {
        throw "Not a number !";
    } else {
        console.log("C'est un nombre");
    }
    // Du code
};

try {
    //isNumber("a");
} catch (err) {
    //console.log(err);
}

//--------------------------------------------
// Strict mode (en haut de page)
//      "use strict";

// voiture = "toyota";
// console.log(voiture);


