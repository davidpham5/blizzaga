/**
 * @fileoverview This file contains the "short footer design" template for the footer.
 * @type {string} type - The type of footer to be rendered, either 'standard' or 'ccpa'.
 */

export const handleTemplate = type => {
  const ccpaFooter = type === 'ccpa';

  const template = `
    <footer id="${
      ccpaFooter ? 'ccpa-footer' : 'standard-footer'
    }" class="background-white w-100 font-xxxxs font-xxxs-ns">
      <ul class="${
        !ccpaFooter ? 'm-100 pt-xs pb-xs ' : ''
      } mw-1200 flex center justify-between h-100 pt-xs pb-xs list-unstyled ma-auto pa-0 flex-column flex-ns-row gray-dark">
        <li class="${
          !ccpaFooter ? 'flex justify-center' : ''
        } flex-1 order-1-ns order-2 flex-start">
          <a class="dib-ns db gray-dark pa-xxs pl-md pr-md" target="_blank" href="https://www.washingtonpost.com/privacy-policy/2011/11/18/gIQASIiaiN_story.html?utm_term=.98a6edd372fc" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </li>
        <li class="flex-1 justify-center order-2-ns order-1">
          <div class="flex justify-center pt-xxs pb-xxs">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14.04" viewBox="0 0 18 28">
              <path fill="#6bab2e" d="M5 12h8V9c0-2.203-1.797-4-4-4S5 6.797 5 9v3zm13 1.5v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 010 22.5v-9A1.5 1.5 0 011.5 12H2V9c0-3.844 3.156-7 7-7s7 3.156 7 7v3h.5a1.5 1.5 0 011.5 1.5z"></path>
            </svg>
            <span class="pl-xs gray-dark">Secure &amp; Encrypted</span>
          </div>
        </li>
        ${
          ccpaFooter
            ? `
              <li class="flex-1 order-3">
                <a class="dib-ns db gray-dark pa-xxs pl-md pr-md" href="https://helpcenter.washingtonpost.com/hc/en-us">
                  Need Help?
                </a>
              </li>
              <li class="flex-1 order-3">
                <a class="dib-ns db gray-dark pa-xxs pl-md pr-md" target="_blank" href="https://www.washingtonpost.com/privacy-policy/2011/11/18/gIQASIiaiN_story.html#CALIFORNIA?tid=ft_ccpa_notice" rel="noopener noreferrer" data-cy="CA-notice-of-collection">
                  CA Notice of Collection
                </a>
              </li>
              <li id="privacy-choices" class="flex-1 order-3 dn">
                <a class="dib-ns db gray-dark pa-xxs flex justify-center items-self-start" target="_blank" href="https://www.washingtonpost.com/my-post/privacy-settings?tid=ft_sell_info" rel="noopener noreferrer">
                  Your Privacy Choices
                  <img src="https://subscribe.washingtonpost.com/static/dns-icons/privacyoptions29x14.png" alt="California Consumer Privacy Act (CCPA) Opt-Out Icon">
                </a>
              </li>
              `
            : `<li class="flex justify-center flex-1 order-3">
                  <a class="dib-ns db gray-dark pa-xxs pl-md pr-md" href="https://helpcenter.washingtonpost.com/hc/en-us">
                    Need Help?
                  </a>
              </li>`
        }
      </ul>
  </footer>
  `;
  return template;
};
// const doNotSell = `<a class="dib-ns db gray-dark pa-xxs" target="_blank" data-cy='do-not-sell' href="https://www.washingtonpost.com/my-post/privacy-settings?tid=ft_sell_info" rel="noopener noreferrer">
// Do Not Sell My Info
// </a>`;
