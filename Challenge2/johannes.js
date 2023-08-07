// johannes.js
export const privateFirstName = "Alex";
export const privateSurname = "Naidoo";
export const publicRole = "Head of Marketing";

private firstname = "Johannes"
private surname = "Potgieter"
public role = "Intern"

private display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display