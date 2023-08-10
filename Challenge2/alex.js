// alex.js
 const privateFirstName = "Alex";
 const privateSurname = "Naidoo";
export const role = "Head of Marketing";

const privateDisplay =
    privateFirstName + " " + privateSurname + " " + role;
document.querySelector("#alex").innerText = privateDisplay;
