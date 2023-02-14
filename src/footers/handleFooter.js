import { getCookie } from '../utils/getCookie.js';

export function handleFooter() {
  const standardFooter = document.querySelector('#standard-footer');
  const ccpaFooter = document.querySelector('#ccpa-footer');
  const _cookies = getCookie('wp_geo');

  const _cookie = _cookies.split('|')[1];
  // console.log({_cookies, _cookie})
  if (_cookie === 'CA' || _cookie === 'VA') {
    if (ccpaFooter || standardFooter) {
      ccpaFooter.style.display = 'block';
      standardFooter.style.display = 'none';
    }
  } else if (ccpaFooter || standardFooter) {
    ccpaFooter.style.display = 'none';
    standardFooter.style.display = 'block';
  }
  return _cookies;
}
