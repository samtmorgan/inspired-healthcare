class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header>
  <div class="headerBrandWrapper">
    <img
      alt="Blue Inspired Healthcare logo"
      height="40px"
      src="assets/android-chrome-512x512.png"
    />
    <h1>Inspired Healthcare</h1>
  </div>

  <nav>
    <ul>
      <div class="navListWrapper">
        <li>
          <a class="navItemWrapper hover-underline-animation" href="index.html">
            Home
          </a>
        </li>
        <li>
          <a class="navItemWrapper hover-underline-animation" href="team.html">
            Our team
          </a>
        </li>
        <li>
          <a class="navItemWrapper hover-underline-animation" href="#">
            Services
          </a>
        </li>
        <li>
          <a class="navItemWrapper hover-underline-animation" href="#">
            Contact
          </a>
        </li>
      </div>
    </ul>
  </nav>
</header>
    `;
  }
}

customElements.define("header-component", Header);
