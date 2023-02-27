import { BlizzagaComponent } from './src/components/blizzaga/Blizzaga.js';
import { handleBlizzaga } from './src/components/blizzaga/handleBlizzaga.js';
import { preexistingBlizzaga } from './src/components/blizzaga/preexistingBlizzaga.js';

window.customElements.define('blizzaga-component', BlizzagaComponent);

const hasBlizzaga = preexistingBlizzaga();
console.log({ hasBlizzaga });
export { BlizzagaComponent, handleBlizzaga };
