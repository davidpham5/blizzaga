import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { BlizzagaComponent } from '../src/components/blizzaga/Blizzaga.js';

window.customElements.define('blizzaga-component', BlizzagaComponent);

describe('Blizzaga', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(
      html`<blizzaga-component title="Hey there"></blizzaga-component>`
    );

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<blizzaga-component></blizzaga-component>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(
      html`<blizzaga-component title="attribute title"></blizzaga-component>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(
      html`<blizzaga-component title="hello world"></blizzaga-component>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
