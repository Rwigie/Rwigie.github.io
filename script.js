function toggleMenu() {
    /* Targeting menu-links, hamburger-icon */
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    
    /* Every click open or close class */
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}