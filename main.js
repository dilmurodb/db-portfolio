function showResume(block) {
    let elem1 = document.getElementById("projects")
    elem1.style.display = 'none'
    let elem3 = document.getElementById("contacts")
    elem3.style.display = 'none'
    let elem4 = document.getElementById("image")
    elem4.style.display = 'none'
    let elem2 = document.getElementById("resume")
    elem2.style.display = block
    let uncheck = document.getElementById("toggle1")
    uncheck.checked = false
}

function showContacts(block) {
    let elem1 = document.getElementById("projects")
    elem1.style.display = 'none'
    let elem2 = document.getElementById("resume")
    elem2.style.display = 'none'
    let elem4 = document.getElementById("image")
    elem4.style.display = 'none'
    let elem3 = document.getElementById("contacts")
    elem3.style.display = block
    let uncheck = document.getElementById("toggle1")
    uncheck.checked = false
}

function showProjects(block) {
    let elem2 = document.getElementById("resume")
    elem2.style.display = 'none'
    let elem3 = document.getElementById("contacts")
    elem3.style.display = 'none'
    let elem4 = document.getElementById("image")
    elem4.style.display = 'none'
    let elem1 = document.getElementById("projects")
    elem1.style.display = block
    let uncheck = document.getElementById("toggle1")
    uncheck.checked = false
}

function showImage(block) {
    let elem1 = document.getElementById("projects")
    elem1.style.display = 'none'
    let elem2 = document.getElementById("resume")
    elem2.style.display = 'none'
    let elem3 = document.getElementById("contacts")
    elem3.style.display = 'none'
    let elem4 = document.getElementById("image")
    elem4.style.display = block
}



const root_theme = document.querySelector(':root')
const backgroundColor = document.querySelector('body')

const lightBulbNight = document.querySelector('#night')
const lightBulbDay = document.querySelector('#day')

function changeToNightMode() {
    root_theme.style.setProperty('--main-color', '#ffffff')
    backgroundColor.style.setProperty('background-color', '#000000')
    lightBulbNight.style.setProperty('color', '#ffffff')
    lightBulbDay.style.setProperty('color', '#ffffff')
}

function changeToDayMode() {
    root_theme.style.setProperty('--main-color', '#000000')
    backgroundColor.style.setProperty('background-color', '#ffffff')
    lightBulbNight.style.setProperty('color', '#000000')
    lightBulbDay.style.setProperty('color', '#000000')
}