import { fetchTemplate } from '../fetchTemplate.js';

/**
 * @description - Handle preexisting blizzaga and fetches data-privacy blizzaga
 * @param {boolean} preexisting - preexisting blizzaga
 * @param {HTML Element} standardBlizzaga - standard blizzaga | null
 * @param {HTML Element} ccpaBlizzaga - ccpa blizzaga | null
 * @returns {void}
 * @examples handleHasBlizzaga(true, <blizzaga id="standard-blizzaga"></blizzaga>, null)
 * */
function handleHasBlizzaga(preexisting, standardBlizzaga, ccpaBlizzaga) {
  if (preexisting) {
    if (standardBlizzaga) {
      fetchTemplate('standard', standardBlizzaga);
    } else if (ccpaBlizzaga) {
      fetchTemplate('ccpa', ccpaBlizzaga);
    } else {
      fetchTemplate('standard');
    }
  }
}

/**
 * @description - Find and replace preexisting blizzaga and replace with blizzaga
 * @returns {preexisting: boolean, standardBlizzaga: boolean, ccpaBlizzaga: boolean}
 * @examples blizzaga#standard-blizzaga, blizzaga#ccpa-blizzaga
 * */

export function preexistingBlizzaga() {
  const standardBlizzaga = document.querySelector('#standard-blizzaga');
  const ccpaBlizzaga = document.querySelector('#ccpa-blizzaga');
  let preexisting = false;

  // check for preexisting blizzaga and toggle preexisting boolean
  if (standardBlizzaga) {
    preexisting = true;
    handleHasBlizzaga(preexisting, standardBlizzaga, ccpaBlizzaga);
  } else if (ccpaBlizzaga) {
    preexisting = true;
    handleHasBlizzaga(preexisting, standardBlizzaga, ccpaBlizzaga);
  } else {
    preexisting = false;
    fetchTemplate('standard');
  }

  return {
    preexisting,
    standardBlizzaga, // if standard-blizzaga exists, pass it on to fetchTemplate()
    ccpaBlizzaga, // if ccpa-blizzaga exists, pass it on to fetchTemplate()
  };
}
