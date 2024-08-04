document.addEventListener("DOMContentLoaded", function() {
    const menumobile = document.getElementById('menumobile');

    function toggleMenu(event) {
        if(event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expended', 'true');
        if(active){

            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');

        } else{

            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');

        }
    }

    menumobile.addEventListener('click', toggleMenu);
    menumobile.addEventListener('touchstart', toggleMenu);
});
