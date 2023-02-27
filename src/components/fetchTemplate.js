export function fetchTemplate(mode, replaceBlizzaga) {
  const Blizzaga = document.createElement('blizzaga-component');
  Blizzaga.setAttribute('mode', mode);
  if (replaceBlizzaga) {
    replaceBlizzaga.replaceWith(Blizzaga);
  } else {
    document.body.appendChild(Blizzaga);
  }
}
