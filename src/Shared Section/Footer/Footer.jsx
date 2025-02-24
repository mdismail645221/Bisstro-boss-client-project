import React from "react";

const Footer = () => {
  return (
    <footer>
      <div id="footer-wrapper">
        <div className="footer-top flex justify-center">
          <div className="footer-left bg-[#1F2937] text-white basis-[50%] flex justify-end p-12">
            <div className="footer-left-content-body">
              <h3 className="footer-title">CONTACT US</h3>
              <p className="footer-address">
                123 ABS Street, Uni 21, Bangladesh
              </p>
              <p className="footer-phone">+88 123456789</p>
              <p className="footer-short-start-time">
                Mon - Fri: 08:00 - 22:00
              </p>
              <p className="footer-short-end-time">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
          <div className="footer-right basis-[50%] flex flex-col gap-3 justify-start p-12 bg-[#111827] text-white">
            <h3 className="footer-title footer-social-title">Follow US</h3>
            <p className="footer-social-content">Join us on social media</p>
            <div className="social-icons-wrapper flex items-center gap-3">
              <span className="fb">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M20.2105 35V19.036H25.5668L26.3704 12.8127H20.2105V8.84007C20.2105 7.03885 20.7087 5.81134 23.2945 5.81134L26.5872 5.80998V0.243652C26.0178 0.169654 24.0632 0 21.7882 0C17.0376 0 13.7853 2.89969 13.7853 8.22372V12.8127H8.41278V19.036H13.7853V35H20.2105Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M25.342 0H9.63105C4.27748 0 0 4.27748 0 9.63105V25.3689C0 30.6956 4.27748 35 9.63105 35H25.3689C30.6956 35 35 30.7225 35 25.3689V9.63105C34.9731 4.27748 30.6956 0 25.342 0ZM31.9062 23.97C31.9062 28.3282 28.3551 31.9331 23.9431 31.9331H11.03C6.67179 31.9331 3.06687 28.382 3.06687 23.97V11.03C3.06687 6.67179 6.61799 3.06687 11.03 3.06687H24.0238C28.382 3.06687 31.9869 6.61799 31.9869 11.03V23.97H31.9062Z"
                    fill="white"
                  />
                  <path
                    d="M23.8624 11.1918L23.7817 11.1111L23.701 11.0304C22.0331 9.36243 19.8002 8.44775 17.4866 8.44775C12.5365 8.47466 8.52807 12.5369 8.55497 17.487C8.55497 19.8813 9.52346 22.168 11.1914 23.8628C12.8594 25.5577 15.1192 26.4993 17.4866 26.4993C22.4635 26.4185 26.4451 22.2487 26.3644 17.2179C26.3105 14.985 25.4497 12.8059 23.8624 11.1918ZM17.4866 23.4324C14.2045 23.4862 11.5411 20.8498 11.4873 17.5677C11.4335 14.2856 14.07 11.6222 17.3521 11.5684C20.6341 11.5146 23.2975 14.1511 23.3513 17.4331V17.5139C23.3513 20.7152 20.7149 23.3786 17.4866 23.4324Z"
                    fill="white"
                  />
                  <path
                    d="M29.0277 8.04428C29.0277 9.22799 28.113 10.1965 26.9293 10.1965C26.3643 10.1965 25.8263 9.98125 25.4496 9.57772C24.6157 8.74374 24.6157 7.34482 25.5035 6.51084C25.907 6.10731 26.4181 5.89209 26.9831 5.89209C27.4673 5.89209 27.9516 6.08041 28.3282 6.37633L28.382 6.43014C28.4627 6.48394 28.5165 6.56465 28.5703 6.61845L28.6241 6.67226C28.8393 7.04889 29.0277 7.53314 29.0277 8.04428Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2_616)">
                    <path
                      d="M35 6.64781C33.6984 7.21875 32.3116 7.59719 30.8656 7.78094C32.3531 6.89281 33.4884 5.49719 34.0222 3.815C32.6353 4.64187 31.1041 5.22594 29.4722 5.55188C28.1553 4.14969 26.2784 3.28125 24.2309 3.28125C20.2584 3.28125 17.0603 6.50563 17.0603 10.4584C17.0603 11.0272 17.1084 11.5741 17.2266 12.0947C11.2612 11.8038 5.98281 8.94469 2.43687 4.58938C1.81781 5.66344 1.45469 6.89281 1.45469 8.21625C1.45469 10.7013 2.73438 12.9041 4.64187 14.1794C3.48906 14.1575 2.35812 13.8228 1.4 13.2956C1.4 13.3175 1.4 13.3459 1.4 13.3744C1.4 16.8612 3.88719 19.7575 7.14875 20.4247C6.56469 20.5844 5.92812 20.6609 5.2675 20.6609C4.80813 20.6609 4.34437 20.6347 3.90906 20.5384C4.83875 23.38 7.47688 25.4691 10.6138 25.5369C8.1725 27.4466 5.07281 28.5972 1.71719 28.5972C1.12875 28.5972 0.564375 28.5709 0 28.4987C3.17844 30.5484 6.94531 31.7188 11.0075 31.7188C24.2113 31.7188 31.43 20.7812 31.43 11.3006C31.43 10.9834 31.4191 10.6772 31.4037 10.3731C32.8278 9.3625 34.0244 8.10031 35 6.64781Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_616">
                      <rect width="35" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom footer-copyright py-6 bg-black text-white">
          <p className="footer-copyright-title text-center">
          Copyright © CulinaryCloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
