import './smartPhone-item.js';

class ListHp extends HTMLElement{
    set smartPhone(hp) {
        this._hp = hp;
        this.render();
    }

    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
    
    render() {
        this.innerHTML = '';
        this._hp.forEach(hp => {
            const smartPhoneItemElement = document.createElement('smartPhone-item');
            smartPhoneItemElement.hp = hp;


            this.appendChild(smartPhoneItemElement);
        });
    }
}

customElements.define('list-hp', ListHp);
