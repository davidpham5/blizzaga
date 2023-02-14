import { html, css, LitElement } from 'lit';
import { footerStyles } from './footerStyles.js';
import { templateStandard } from './FooterStandard.js';

// import {getCookie} from '../utils/getCookie.js';

export class FooterDP extends LitElement {
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
    this.cookie = '';
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateStandard.content.cloneNode(true));
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
