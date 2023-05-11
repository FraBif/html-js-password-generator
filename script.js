const userName = prompt (`Insert your Name`)
const userSurname = prompt (`Insert your Surname`)
const favColor = prompt (`Insert your Favourite Color`)
const password = userName + userSurname + favColor + "21"
document.getElementById('password-container').innerHTML = password