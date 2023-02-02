import { html, css, LitElement } from 'lit';

const templateFooter = `
  <footer id="standard-footer" class="background-white w-100 font-xxxxs font-xxxs-ns">
    <ul class="w-100 mw-1200 flex flex-column justify-between h-100 pt-xs pb-xs list-unstyled ma-auto pa-0 flex-ns-row gray-dark">
      <li class="flex justify-center flex-1 order-1-ns order-2">
        <a class="dib-ns db gray-dark pa-xxs pl-md pr-md" target="_blank" href="https://www.washingtonpost.com/privacy-policy/2011/11/18/gIQASIiaiN_story.html?utm_term=.98a6edd372fc" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </li>
      <li class="flex justify-center flex-1 order-2-ns order-1">
        <div class="flex justify-center pt-xxs pb-xxs">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14.04" viewBox="0 0 18 28">
            <path fill="#6bab2e" d="M5 12h8V9c0-2.203-1.797-4-4-4S5 6.797 5 9v3zm13 1.5v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 010 22.5v-9A1.5 1.5 0 011.5 12H2V9c0-3.844 3.156-7 7-7s7 3.156 7 7v3h.5a1.5 1.5 0 011.5 1.5z"></path>
          </svg>
          <span class="pl-xs gray-dark">Secure &amp; Encrypted</span>
        </div>
      </li>
      <li class="flex justify-center flex-1 order-3">
        <a class="dib-ns db gray-dark pa-xxs pl-md pr-md" href="https://helpcenter.washingtonpost.com/hc/en-us">
          Need Help?
        </a>
      </li>
    </ul>
  </footer>
`;
const template = document.createElement('template');
template.innerHTML = templateFooter;
export class DataPrivacyDemo extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .background-white {
      background: #fff;
    }
    .gray-dark {
      color: #666;
    }

    .w-100 {
      width: 100%;
    }
    .h-100 {
      height: 100%;
    }

    .font-xxxxs {
      font-size: 0.75rem;
    }
    .center {
      text-align: center;
    }

    .db {
      display: block;
    }
    .flex {
      display: flex;
    }
    .flex-column {
      flex-direction: column;
    }
    .flex-row {
      flex-direction: row;
    }
    .justify-between {
      justify-content: space-between;
    }
    .justify-center {
      justify-content: center;
    }
    .flex-1 {
      flex: 1;
    }

    ol,
    ul {
      padding-left: 2.5rem;
      margin: 0.625rem 0;
    }
    .list-unstyled {
      list-style-type: none;
    }

    .ma-auto {
      margin: auto;
    }
    .mw-1200 {
      max-width: 1200px;
    }

    .pr-md {
      padding-right: 24px;
    }
    .pl-md {
      padding-left: 24px;
    }
    .pa-0 {
      padding: 0;
      padding-top: 0px;
      padding-bottom: 0px;
    }
    .pb-xs {
      padding-bottom: 8px;
    }
    .pt-xs {
      padding-top: 8px;
    }
    .pt-xxs {
      padding-top: 4px;
    }
    .pa-xxs {
      padding: 4px;
      padding-right: 4px;
      padding-left: 4px;
    }

    .order-1 {
      order: 1;
    }
    .order-2 {
      order: 2;
    }
    .order-3 {
      order: 3;
    }

    @media only screen and (min-width: 768px) {
      .md\:flex-row {
        flex-direction: row;
      }
      .flex-ns-row {
        flex-direction: row;
      }
      .font-xxxs-ns {
        font-size: 0.875rem;
      }
      .order-1-ns {
        order: 1;
      }
      .dib-ns {
        display: inline-block;
      }
    }
  `;

  static get properties() {
    return {
      header: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
    const root = shadowRoot.getElementById('root');
    console.log({ root });
  }

  connectedCallback() {
    // invoked when a component is added to the document's DOM.
    super.connectedCallback();
  }

  firstUpdated() {
    this.root = this.renderRoot.querySelector('#root');
    console.log({ root: this.root });
  }

  __increment() {
    this.counter += 1;
  }

  __decrement() {
    this.counter -= 1;
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <h2>
        ${this.header} how many times can I click the button ${this.counter}!
      </h2>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__decrement}>decrement</button>
    `;
  }
}
