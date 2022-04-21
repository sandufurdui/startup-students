function showEvents() {
    var element = document.getElementById("eventListbg");
    element.classList.remove("hidden");
}
function hideEvents() {
    var element = document.getElementById("eventListbg");
    element.classList.add("hidden");
}

function hideEventDetails(elem) {
    document.getElementById("eventList").classList.remove("hidden");
    elem.classList.add("hidden");
}
function showEventDetails(elem) {
    document.getElementById("eventList").classList.add("hidden");
    var final = "event" + elem.id;
    document.getElementById(final).classList.remove("hidden");
}




function showProjects() {
    var element = document.getElementById("eventListbg");
    element.classList.remove("hidden");
}

function hideProjects() {
    var element = document.getElementById("eventListbg");
    element.classList.add("hidden");
}

function hideProjectDetails(elem) {
    document.getElementById("eventList").classList.remove("hidden");
    elem.classList.add("hidden");
}

function showProjectDetails(elem) {
    document.getElementById("projectList").classList.add("hidden");
    var final = "project" + elem.id;
    document.getElementById(final).classList.remove("hidden");
}