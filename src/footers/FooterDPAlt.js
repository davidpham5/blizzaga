import { html, css, LitElement } from 'lit';
import { footerStyles } from './footerStyles.js';
import { templateAlt } from './FooterAlt.js';

export class FooterDPAlt extends LitElement {
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
    shadowRoot.appendChild(templateAlt.content.cloneNode(true));
  }

  connectedCallback() {
    super.connectedCallback();
    // const _cookies = getCookie('wp_geo')

    // const _cookie = _cookies.split('|')[1]
    // console.log({_cookies, _cookie})
    // console.log({handleFooter: handleFooter()}, 'hello')
  }

  render() {
    return html`<h2 class="text-dark-mode">${this.mode}</h2>`;
  }
}
