import {
  LitElement, html, css, customElement, query, property,
} from 'lit-element';
import { IPerson } from '../types/example';

@customElement('card-element')
export class CardElement extends LitElement {
    static styles = [css`
    :host {
        display:block;
        clear:both;
        margin-bottom:10px;
    }
    h5 {
        font-size:1.3rem;
        margin-bottom:0;
    }
    #img {
        width:50px;
        height:50px;
        border-radius:50%;
        margin-right:10px;
        background-size:cover;
        background-image:var(--image-url);
        background-color:var(--color, #ccc);
        float:left;
        overflow:hidden;
    }
`];

    @property({ attribute: false })
    person!: IPerson;

    @query('#img')
    image: any;

    firstUpdated() {
      this.image.style.setProperty('--image-url', `url(${this.person.image})`);
    }

    makeFavorite() {
      const event = new CustomEvent('makeFavorite', { detail: this.person.name });
      this.dispatchEvent(event);
    }

    render() {
      return html`
            <img id="img" alt=${this.person.name} />
            <h5>${this.person.name}</h5>
            ${this.person.title ? html`${this.person.title}<br>` : ''}
            <a href="mailto:${this.person.email}">${this.person.email}</a>
            <button @click=${this.makeFavorite}>Make Favorite</button>
        `;
    }
}
