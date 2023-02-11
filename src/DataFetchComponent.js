import { html, LitElement } from 'lit';
import { footerStyles } from './_Footers/Footer.styles.js';
import { templateB } from './_Footers/Footer_B.js';

export class DataFetchComponent extends LitElement {
  static styles = footerStyles;

  static get properties() {
    return {
      data: { type: Array },
      loading: { type: Boolean },
      song: { attribute: true },
    };
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateB.content.cloneNode(true));

    this.data = [];
    console.log(this.constructor.observedAttributes);
    if (!this.data.length) {
      this.fetchData();
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  async fetchData() {
    this.loading = true;
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const data = await response.json();
      this.data = data.slice(0, 20);
      this.loading = false;
      // this.song = 'test'
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return html`
      ${this.loading ? html`<h2>Loading...</h2>` : ''}
      <h2>Here is some data:</h2>
      <h3>${this.song}</h3>
      <ul>
        ${this.data.map(
          item => html`
            <li>
              <h4>${item.title}</h4>
            </li>
          `
        )}
      </ul>
    `;
  }
}
