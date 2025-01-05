class NavigationComonent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="gnb-container">
        <div class="gnb">
          <nav class="nav-container">
            <a href="#" class="nav home on">
              <span class="icon"></span>
              <span class="title">홈</span>
            </a>
            <a href="#" class="nav howto">
              <span class="icon"></span>
              <span class="title">사용방법</span>
            </a>
            <a href="#" class="nav my">
              <span class="icon"></span>
              <span class="title">내 eSIM</span>
            </a>
            <a href="#" class="nav menu">
              <span class="icon"></span>
              <span class="title">메뉴</span>
            </a>
          </nav>
        </div>
      </div>
                `;
  }
}

window.customElements.define("nav-component", NavigationComonent);
