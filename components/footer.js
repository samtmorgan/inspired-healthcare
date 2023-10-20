class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <footer>
            I am footer 👋 | © Inspired Healthcare 2023 | Privacy
        </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
