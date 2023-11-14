document.addEventListener("DOMContentLoaded", () => {
    const aElements = document.querySelectorAll('.single-menu a');

    aElements.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão do <a> de abrir uma pagina em branco
            const cafeNome = element.closest('.single-menu').querySelector('h4').innerText.trim();
            const linkWhatsApp = `https://wa.me/5581992821891?text=Eu%20gostaria%20de%20comprar%20esse%20café%20${cafeNome}`;
            window.open(linkWhatsApp, '_blank');
        });
    });
});
