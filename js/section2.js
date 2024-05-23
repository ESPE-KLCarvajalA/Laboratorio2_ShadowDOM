
class SeccionGaleria extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
        
            <div class="gallery">
                <img src="https://via.placeholder.com/200" alt="Gallery Image 1">
                <img src="https://via.placeholder.com/200" alt="Gallery Image 2">
                <img src="https://via.placeholder.com/200" alt="Gallery Image 3">
                <img src="https://via.placeholder.com/200" alt="Gallery Image 4">
                <img src="https://via.placeholder.com/200" alt="Gallery Image 5">
                <img src="https://via.placeholder.com/200" alt="Gallery Image 6">
            </div>
        `;
    }
}

customElements.define('seccion-galeria', SeccionGaleria);