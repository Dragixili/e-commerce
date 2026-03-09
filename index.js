document.addEventListener("DOMContentLoaded", (event) => {
    const menu_ouverture = document.querySelector(".hamburger");
    const close = document.querySelector(".close");
    const menu = document.querySelector(".menu_mobile");
    menu_ouverture.addEventListener("click", (event) => {
        menu.classList.add("open");
    });
    close.addEventListener("click", (event) => {
        menu.classList.remove("open");
    });
});