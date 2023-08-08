// nwabisa.js
export const privateFirstName = "Nwabisa";
export const privateSurname = "Gabe";
export const publicRole = "CEO";

const privateDisplay =
    privateFirstName + " " + privateSurname + " " + publicRole;
document.querySelector("#nwabisa").innerText = privateDisplay;
