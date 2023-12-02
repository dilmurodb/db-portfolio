function showResume(block) {
    let elem1 = document.getElementById("projects")
    elem1.style.display = 'none'
    let elem3 = document.getElementById("contacts")
    elem3.style.display = 'none'
    let elem2 = document.getElementById("resume")
    elem2.style.display = block
}

function showContacts(block) {
    let elem1 = document.getElementById("projects")
    elem1.style.display = 'none'
    let elem2 = document.getElementById("resume")
    elem2.style.display = 'none'
    let elem3 = document.getElementById("contacts")
    elem3.style.display = block
}

function showProjects(block) {
    let elem2 = document.getElementById("resume")
    elem2.style.display = 'none'
    let elem3 = document.getElementById("contacts")
    elem3.style.display = 'none'
    let elem1 = document.getElementById("projects")
    elem1.style.display = block
}