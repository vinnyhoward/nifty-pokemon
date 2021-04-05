import {
  LitElement, html, customElement, property,
} from 'lit-element';

@customElement('app-view')
export default class App extends LitElement {
  @property()
  name = 'Vince Howard';

  @property({ type: Number })
  count = 0;

  constructor() {
    super();
    this.count = 0;
  }

  foo(): string {
    return this.name;
  }

  private handleClick() {
    this.count += 1;
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this.handleClick} part="button">
        Current Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }
}
