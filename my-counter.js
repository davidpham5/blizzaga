import { LitElement, html, css } from "lit-element"

export default class MyCounter extends LitElement {
  // set up styles
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
      .button-container {
        display: flex;
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        border: none;
        background: #eee;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 4px;
        margin-right: 4px;
      }
    `
  }

  static properties = {
    count: { state: false }
  }
  // set up properties
  // you can think of static as a private method that belongs to the class
  static get properties() {
    return {
      /**
       * @property {string} name
       * @description The name to say hello to
       * @type {string}
      */
      name: { type: String },

      /**
     * The number of times the button has been clicked.
     * @type {number}
     */
      count: {type: Number, state: true},
    }
  }

  constructor () {
    super();
    this.greeting = "Hello World";
    this.name = 'David';
    this.count = 0;
  }

  // set up render()
  render() {
    return html`
      <h1>${this.sayHello(this.name)}</h1>
      <div class="button-container">
        <button @click=${this._plus}>➕</button>
        <button @click=${this._minus}>➖</button>
      </div>
      <div>You've clicked ${this.count} times</div>
    `
  }

  // set up event handlers
  _plus() {
    this.count++
    this.dispatchEvent(new CustomEvent('count-increased'))
  }

  _minus() {
    this.count--
    this.dispatchEvent(new CustomEvent('count-decreased'))
  }

  // define sayHello()
  sayHello(greeting) {
    return `${this.greeting}, ${this.name}`
  }
}
// add lit's custom element
customElements.define('my-counter', MyCounter);
