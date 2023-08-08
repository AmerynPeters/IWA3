// alex.js
export const privateFirstName = "Alex";
export const privateSurname = "Naidoo";
export const publicRole = "Head of Marketing";

const privateDisplay =
    privateFirstName + " " + privateSurname + " " + publicRole;
document.querySelector("#alex").innerText = privateDisplay;
