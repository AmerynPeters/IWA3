// johannes.js
export const privateFirstName = "Johannes";
export const privateSurname = "Potgieter";
export const publicRole = "Intern";

const privateDisplay =
    privateFirstName + " " + privateSurname + " " + publicRole;
document.querySelector("#johannes").innerText = privateDisplay;
