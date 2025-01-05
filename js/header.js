class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="header">
        <div class="logo"></div>
        <div class="btns">
          <a href="#" class="search"></a>
        </div>
      </header>
                `;
  }
}

window.customElements.define("header-component", HeaderComponent);
