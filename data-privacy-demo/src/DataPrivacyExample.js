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
    this.loading = true;
    console.log(this.constructor.observedAttributes);
    if (!this.data.length) {
      this.fetchData();
    }
  }

  async fetchData() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const data = await response.json();
    this.data = data;
    this.loading = false;
  }

  render() {
    return html`
      ${this.loading ? html`<h2>Loading...</h2>` : ''}
      <h2>Here is some data:</h2>
      ${this.data.map(item => html` <div>${item}</div> `)}
    `;
  }
}
