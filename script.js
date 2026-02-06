// Aspetta che il documento sia caricato
document.addEventListener('DOMContentLoaded', () => {
    // Prende il nome del file attuale dalla URL (es: contatti.html)
    const currentPage = window.location.pathname.split("/").pop();
    
    // Se siamo nella cartella principale senza nome file, è index.html
    const activeFileName = currentPage === "" ? "index.html" : currentPage;

    // Seleziona tutti i link del menu
    const menuLinks = document.querySelectorAll('#main-menu a');

    menuLinks.forEach(link => {
        // Se l'attributo href del link è uguale al file corrente
        if (link.getAttribute('href') === activeFileName) {
            link.classList.add('active');
        }
    });
});
// Gestione invio modulo
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impedisce il ricaricamento della pagina
        alert('Grazie! Il tuo messaggio è stato inviato correttamente.');
        form.reset(); // Pulisce i campi
    });
}
function calcolaRisparmio() {
    const prezzo = document.getElementById('price').value;
    const quantita = document.getElementById('quantity').value;
    const resultArea = document.getElementById('result');
    const totalSpan = document.getElementById('total-year');

    if (prezzo > 0 && quantita > 0) {
        // Calcolo: prezzo * pacchetti a settimana * 52 settimane
        const totaleAnno = (prezzo * quantita * 52).toFixed(2);
        
        totalSpan.innerText = totaleAnno;
        resultArea.classList.remove('hidden'); // Mostra il risultato
    } else {
        alert("Per favore, inserisci valori validi.");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("main-menu");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
const hamburger = document.getElementById('hamburger');
const mainMenu = document.getElementById('main-menu');

// Apre e chiude il menù al click
hamburger.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
    
    // Opzionale: trasforma le barre in una "X" quando è aperto
    hamburger.classList.toggle('open');
});

// Chiude il menù se si clicca fuori (consigliato per UX)
document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !mainMenu.contains(event.target)) {
        mainMenu.classList.remove('active');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mainMenu = document.getElementById('main-menu');

    if (hamburger && mainMenu) {
        hamburger.addEventListener('click', (e) => {
            // Impedisce al click di propagarsi al documento
            e.stopPropagation(); 
            mainMenu.classList.toggle('active');
            hamburger.classList.toggle('open');
            console.log("Menu cliccato!"); // Verifica nella console del browser (F12)
        });
    }

    // Chiude il menu se clicchi ovunque fuori dal menu stesso
    document.addEventListener('click', () => {
        mainMenu.classList.remove('active');
        hamburger.classList.remove('open');
    });
});