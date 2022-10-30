// display homepage
let home = document.querySelector(".contaner-homepage")
let about = document.querySelector(".container-about")
let service = document.querySelector(".container-service")


// button
let HomeButton = document.getElementById("Home_button")
let AboutButton = document.getElementById("About_button")
let ServiceButton = document.getElementById("Service_button")
let ContactButton = document.getElementById("Contact_button")


// function button
function Home_click() {
    home.style.display = "block"

    about.style.display = 'none'
    service.style.display = 'none'

    // color
    document.getElementById("Home_button").style.color = "#e66c8a"
    document.getElementById("About_button").style.color = "#1d1145"
    document.getElementById("Service_button").style.color = "#1d1145"
}
function About_click() {
    about.style.display = 'block'

    home.style.display = "none"
    service.style.display = 'none'

    // color
    document.getElementById("About_button").style.color = "#e66c8a"
    document.getElementById("Home_button").style.color = "#1d1145"
    document.getElementById("Service_button").style.color = "#1d1145"
}
function Service_click() {
    service.style.display = 'block'

    home.style.display = "none"
    about.style.display = 'none'

    // color
    document.getElementById("Service_button").style.color = "#e66c8a"
    document.getElementById("Home_button").style.color = "#1d1145"
    document.getElementById("About_button").style.color = "#1d1145"
}


HomeButton.addEventListener('click', Home_click)
AboutButton.addEventListener('click', About_click)
ServiceButton.addEventListener('click', Service_click)