import { html, css, LitElement } from 'lit';
import { blizzagaStyles } from './blizzagaStyles.js';
import { handleTemplate } from './blizzaga-alt.template.js';

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
    this.template = document.createElement('template');
    this.template.innerHTML = handleTemplate('standard'); // standard footer as default template

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this.mode);
    const standardTemplate = document.createElement('template');

    if (this.mode === 'ccpa') {
      this.template.innerHTML = handleTemplate('ccpa');
      const template = this.shadowRoot.appendChild(
        this.template.content.cloneNode(true)
      );
      standardTemplate.replaceWith(template);
    }
  }

  firstUpdated() {
    // this.standardFooter = this.renderRoot.querySelector('#standard-footer');
    // console.log(this.standardFooter);
  }

  render() {
    return html`<h2 class="text-dark-mode">${this.mode}</h2>`;
  }
}
