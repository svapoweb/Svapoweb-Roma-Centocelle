document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('main-menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('active');
            console.log("Menu attivato");
        });

        // Chiudi il menù se clicchi fuori
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
    }
});