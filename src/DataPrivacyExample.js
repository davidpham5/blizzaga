import { html, css, LitElement } from 'lit';

export class DataPrivacyExample extends LitElement {
  static styles = css`
    body {
      background-color: --wpdp-background-color;
      color: --wpdp-text-color;
    }
    :host {
      display: block;
      padding: 25px;
  `;

  static get properties() {
    return {
      data: { type: Array },
      loading: { type: Boolean },
    };
  }

  // watch attributes
  static get observedAttributes() {
    return ['song'];
  }

  connectedCallback() {
    super.connectedCallback();
    this.data = [];

    console.log(this.constructor.observedAttributes);
    if (!this.data.length) {
      this.fetchData();
    }
  }

  async fetchData() {
    this.loading = true;
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const data = await response.json();
    this.data = data;
    console.log(this.data);
    this.loading = false;
  }

  render() {
    return html`
      ${this.loading ? html`<h2>Loading...</h2>` : ''}
      <h2>Here is some data: ${this.data.id}</h2>

      ${this.data.map(item => html` <div>${item.title}</div> `)}
    `;
  }
}
