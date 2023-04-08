class SmartPhoneItem extends HTMLElement {
    set smartPhone(hp) {
        this._hp = hp;
        this.render();
    }


    render() {
        this.innerHTML =`
        <img class="foto-hp" src="${this._hp.foto}" alt="Foto">
        <div class="hp-info">
          <h2>${this._hp.phone_name}</h2>
          <p>${this._hp.description}</p>
        </div>
      `;
    }
}

customElements.define('smart-phone-item', SmartPhoneItem);