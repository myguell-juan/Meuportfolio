document.addEventListener("DOMContentLoaded", function() {
    const menumobile = document.getElementById('menumobile');

    function toggleMenu() {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }

    menumobile.addEventListener('click', toggleMenu);
});
