import { html, css, LitElement } from 'lit';
import { footerStyles } from './Footer.styles.js';
import { templateA } from './Footer_A.js';

export class FooterWPDP extends LitElement {
  static styles = [
    footerStyles,
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

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateA.content.cloneNode(true));
  }

  render() {
    return html` <h2 class="text-dark-mode">${this.mode}</h2> `;
  }
}
