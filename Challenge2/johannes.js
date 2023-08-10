// johannes.js
export const privateFirstName = "Johannes";
export const privateSurname = "Potgieter";
export const role = "Intern";

const privateDisplay =
    privateFirstName + " " + privateSurname + " " + role;
document.querySelector("#johannes").innerText = privateDisplay;
