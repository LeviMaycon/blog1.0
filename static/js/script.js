let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById("theme-switch")

document.addEventListener('DOMContentLoaded', hightLight);

let menuItems = document.querySelectorAll(".menu a");
let currentUrl = window.location.href


function hightLight() {
    menuItems.forEach(items => {
        items.addEventListener('click', function( ){
            menuItems.forEach(item => item.classList.remove('active'))

            this.classList.add('active')
        })
    })
}

const menuLeft = document.getElementsByClassName("menu-left")
const menuRight= document.getElementsByClassName("menu-right")



const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()
    else disableDarkmode()


themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})



