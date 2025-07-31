let time = new Date()

let box1 = document.querySelector(".box1")
box1.innerHTML = `<h1>${time.getFullYear()}</h1>`

let box2 = document.querySelector(".box2")
let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
box2.innerHTML = `<h1>${months[time.getMonth()]}</h1>`

let box3 = document.querySelector(".box3")
let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']   
box3.innerHTML = `<h1>${days[time.getDay()]}</h1>`

let box4 = document.querySelector(".box4")
box4.innerHTML = `<h1>${time.getDate()}</h1>`