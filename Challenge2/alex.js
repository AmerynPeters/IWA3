// alex.js
const privateFirstName = "Alex";
const privateSurname = "Naidoo";
const publicRole = "Head of Marketing";

const privateDisplay =
    privateFirstName + " " + privateSurname + " " + publicRole;
document.querySelector("#alex").innerText = privateDisplay;
