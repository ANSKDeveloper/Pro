function openPage(event, pageName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.querySelectorAll(".sidebar nav ul li a");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    event.currentTarget.className += " active";
}

// Set the default open tab
document.getElementById("dashboard").style.display = "block";
document.querySelector(".sidebar nav ul li a").classList.add("active");

// Update date and time
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    document.getElementById('date-time').textContent = dateTimeString;
}
setInterval(updateDateTime, 1000);
updateDateTime();