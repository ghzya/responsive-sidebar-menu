const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    // close all (implemented with array) the opened sub-menu
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')  // implemented for dropdown-button
    })
}

function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle('show') // implemented for sub-menu
    button.classList.toggle('rotate')

    // open the sidebar & rotate the toggle-btn
    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}