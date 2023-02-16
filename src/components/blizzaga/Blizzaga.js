import { html, css, LitElement } from 'lit';
import { blizzagaStyles } from './blizzagaStyles.js';
import { templateStandard } from './blizzaga.template.js';
import { templateAlt } from './blizzaga-alt.template.js';

export class BlizzagaComponent extends LitElement {
  static styles = [
    blizzagaStyles,
    css`
      .text-dark-mode {
        color: #fff;
      }
    `,
  ];

  static get properties() {
    return {
      mode: { attribute: true },
    };
  }

  constructor() {
    super();
    // attach shadowRoot
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateStandard.content.cloneNode(true));
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this.mode);
    if (this.mode === 'short') {
      this.shadowRoot.appendChild(templateAlt.content.cloneNode(true));
      this.shadowRoot.querySelector('#standard-footer').remove(); // remove footer from constructor()
    } else {
      this.shadowRoot.querySelector('#standard-footer').remove(); // remove footer from constructor()
      this.shadowRoot.appendChild(templateStandard.content.cloneNode(true));
    }
  }

  firstUpdated() {
    this.standardFooter = this.renderRoot.querySelector('#standard-footer');
    console.log(this.standardFooter);
  }

  render() {
    return html`<h2 class="text-dark-mode">${this.mode}</h2>`;
  }
}
