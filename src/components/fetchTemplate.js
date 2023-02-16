import { BlizzagaComponent } from './blizzaga/Blizzaga.js';

export function fetchTemplate(mode) {
  // create element
  const blizzaga = document.createElement(
    '<blizzaga-component></blizzaga-component>'
  );
  // set mode
  blizzaga.mode = mode;
  // append to body
  document.body.appendChild('blizzaga-component', BlizzagaComponent);
}
