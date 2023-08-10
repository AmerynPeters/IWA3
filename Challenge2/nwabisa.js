// nwabisa.js
export const privateFirstName = "Nwabisa";
export const privateSurname = "Gabe";
export const role = "CEO";

const privateDisplay =
    privateFirstName + " " + privateSurname + " " + role;
document.querySelector("#nwabisa").innerText = privateDisplay;
