class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `<h2>Spesifikasi SmartPhone</h2>`;
    }
  }
   
  customElements.define('app-bar', AppBar);