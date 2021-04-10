/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
import './card.element';
import { LitElement, html, customElement } from 'lit-element';
import { people } from '../types/example';

@customElement('main-app')
export class MainAppElement extends LitElement {
    people = people;

    onMakeFavorite(event: any) {
      // eslint-disable-next-line no-console
      console.log('current favorite', event.detail);
    }

    render() {
      return html`
            <h1>List of people</h1>
            ${this.people.map((person) => html`
                <card-element .person=${person} @makeFavorite=${this.onMakeFavorite}></card-element>
            `)}
        `;
    }
}
