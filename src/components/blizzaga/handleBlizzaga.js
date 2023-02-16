import { getCookie } from '../../utils/getCookie.js';
import { fetchTemplate } from '../fetchTemplate.js';

export function handleBlizzaga() {
  const standardFooter = document.querySelector('#standard-footer');
  const ccpaFooter = document.querySelector('#ccpa-footer');
  const _cookies = getCookie('wp_geo');

  const _cookie = _cookies.split('|')[1];
  console.log({ _cookies, _cookie });
  if (_cookie === 'CA' || _cookie === 'VA') {
    fetchTemplate('long');
  } else if (ccpaFooter || standardFooter) {
    fetchTemplate('short');
  }
  return _cookies;
}
