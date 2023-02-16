export const handleTemplate = isCcpaEnabled => {
  const template = `
    <footer id="ccpa-footer" class="background-white w-100 font-xxxxs font-xxxs-ns">
      <ul class="${
        !isCcpaEnabled ? 'm-100 pt-xs pb-xs ' : ''
      } mw-1200 flex center justify-between h-100 pt-xs pb-xs list-unstyled ma-auto pa-0 flex-column flex-ns-row gray-dark">
        <li class="${
          !isCcpaEnabled ? 'flex justify-center' : ''
        } flex-1 order-1-ns order-2 flex-start">
          <a class="dib-ns db gray-dark pa-xxs pl-md pr-md" target="_blank" href="https://www.washingtonpost.com/privacy-policy/2011/11/18/gIQASIiaiN_story.html?utm_term=.98a6edd372fc" rel="noopener noreferrer">
            Privacy Policy
          </a>
          ${
            isCcpaEnabled
              ? `<a class="dib-ns db gray-dark pa-xxs pl-md pr-md" href="https://helpcenter.washingtonpost.com/hc/en-us">
              Need Help?
            </a>
            `
              : ''
          }
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
          isCcpaEnabled
            ? `<li class="flex-1 order-3">
              <a class="dib-ns db gray-dark pa-xxs pl-md pr-md" target="_blank" href="https://www.washingtonpost.com/privacy-policy/2011/11/18/gIQASIiaiN_story.html#CALIFORNIA?tid=ft_ccpa_notice" rel="noopener noreferrer">
                CA Notice of Collection
              </a>
              <a class="dib-ns db gray-dark pa-xxs" target="_blank" href="https://www.washingtonpost.com/my-post/privacy-settings?tid=ft_sell_info" rel="noopener noreferrer">
                  Do Not Sell My Info
                </a>
              </li>
            `
            : `
              <li class="flex justify-center flex-1 order-3">
                <a class="dib-ns db gray-dark pa-xxs pl-md pr-md" href="https://helpcenter.washingtonpost.com/hc/en-us">
                  Need Help?
                </a>
              </li>
            `
        }
      </ul>
  </footer>
  `;
  return template;
};