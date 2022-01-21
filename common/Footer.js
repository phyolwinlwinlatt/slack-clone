import React from "react";

export default function Footer({ setSticky, showDialog, setShowDialog }) {
  React.useEffect(() => {
    if (showDialog) {
      setSticky(false);
    }
  }, [showDialog]);

  return (
    <footer className="footer">
      <div className="footer__detail">
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"
              fill="#36C5F0"
            ></path>
            <path
              d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"
              fill="#2EB67D"
            ></path>
            <path
              d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"
              fill="#ECB22E"
            ></path>
            <path
              d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"
              fill="#E01E5A"
            ></path>
          </g>
        </svg>
        <div className="why-slack">
          <h3 className="heading-3 heading-3--normal">Why Slack?</h3>
          <ul className="why-slack__list">
            <li className="why-slack__item">Slack vs. Email</li>
            <li className="why-slack__item">Channels</li>
            <li className="why-slack__item">Engagement</li>
            <li className="why-slack__item">Scale</li>
            <li className="why-slack__item">Watch the Demo</li>
          </ul>
        </div>
        <div className="product">
          <h3 className="heading-3 heading-3--normal">Product</h3>
          <ul className="product__list">
            <li className="product__item">Features</li>
            <li className="product__item">Integrations</li>
            <li className="product__item">Enterprise</li>
            <li className="product__item">Solutions</li>
          </ul>
        </div>
        <div className="pricing">
          <h3 className="heading-3 heading-3--normal">Pricing</h3>
          <ul className="pricing__list">
            <li className="pricing__item">Plans</li>
            <li className="pricing__item">Paid vs. Free</li>
          </ul>
        </div>
        <div className="resources">
          <h3 className="heading-3 heading-3--normal">Resources</h3>
          <ul className="resources__list">
            <li className="resources__item">Partners</li>
            <li className="resources__item">Developers</li>
            <li className="resources__item">Community</li>
            <li className="resources__item">Apps</li>
            <li className="resources__item">Blogs</li>
            <li className="resources__item">Help Center</li>
            <li className="resources__item">Events</li>
          </ul>
        </div>
        <div className="company">
          <h3 className="heading-3 heading-3--normal">Company</h3>
          <ul className="company__list">
            <li className="company__item">About us</li>
            <li className="company__item">Leadership</li>
            <li className="company__item">Investor Relations</li>
            <li className="company__item">News</li>
            <li className="company__item">Media Kit</li>
            <li className="company__item">Career</li>
          </ul>
        </div>
      </div>
      <div className="footer__privacy">
        <ul className="privacy__list">
          <li className="privacy__item">Status</li>
          <li className="privacy__item">Privacy</li>
          <li className="privacy__item">Terms</li>
          <li className="privacy__item">Cookie Preferences</li>
          <li className="privacy__item">Contact us</li>
          <li className="privacy__item">
            <button
              type="button"
              className="change-region__btn"
              onClick={() => setShowDialog((prev) => !prev)}
            >
              Change Region
            </button>
          </li>
        </ul>
        <a href="#" className="download-slack">
          <svg
            width="19"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75938 15.7354C3.07813 15.7354 2.45 15.5572 1.875 15.2009C1.3 14.8445 0.84375 14.3641 0.50625 13.7597C0.16875 13.1552 0 12.4966 0 11.784C0 11.135 0.140625 10.5273 0.421875 9.96101C0.709375 9.39471 1.1 8.93021 1.59375 8.56753C1.4875 8.19212 1.43438 7.8167 1.43438 7.44129C1.43438 6.72864 1.60313 6.07008 1.94063 5.46561C2.27813 4.86113 2.73438 4.38391 3.30938 4.03395C3.88438 3.67763 4.50938 3.49947 5.18438 3.49947C5.28438 3.49947 5.43438 3.50583 5.63438 3.51855C6.19063 2.57684 6.93125 1.83238 7.85625 1.28517C8.7875 0.737961 9.7875 0.464355 10.8563 0.464355C11.9625 0.464355 12.9875 0.75705 13.9313 1.34244C14.875 1.92146 15.6219 2.70728 16.1719 3.6999C16.7281 4.69251 17.0063 5.77421 17.0063 6.94498C17.5563 7.40948 17.9844 7.97896 18.2906 8.65343C18.5969 9.3279 18.75 10.0437 18.75 10.8009C18.75 11.6917 18.5375 12.5157 18.1125 13.2729C17.6938 14.0301 17.125 14.6282 16.4063 15.0672C15.6938 15.5126 14.9125 15.7354 14.0625 15.7354H3.75938ZM14.0625 14.3037C14.6562 14.3037 15.2031 14.1478 15.7031 13.836C16.2094 13.5179 16.6094 13.0916 16.9031 12.5571C17.1969 12.0162 17.3438 11.4308 17.3438 10.8009C17.3438 10.1646 17.1969 9.57923 16.9031 9.04475C16.6094 8.5039 16.2156 8.07758 15.7219 7.7658C15.6656 7.73399 15.625 7.69899 15.6 7.66081C15.5813 7.62263 15.5719 7.57173 15.5719 7.5081C15.5719 7.45084 15.575 7.3713 15.5813 7.26949C15.5938 7.16769 15.6 7.06588 15.6 6.96407C15.6 6.04781 15.3875 5.20155 14.9625 4.42527C14.5375 3.64899 13.9594 3.03497 13.2281 2.58321C12.5031 2.12508 11.7125 1.89601 10.8563 1.89601C10.2063 1.89601 9.59063 2.02963 9.00938 2.29688C8.42813 2.55775 7.91875 2.9268 7.48125 3.40402C7.04375 3.88124 6.70625 4.42527 6.46875 5.03611C6.43125 5.13792 6.375 5.18882 6.3 5.18882C6.25625 5.18882 6.2125 5.17609 6.16875 5.15064C5.8625 5.0043 5.53438 4.93112 5.18438 4.93112C4.75938 4.93112 4.36562 5.04247 4.00313 5.26517C3.64687 5.48788 3.3625 5.7933 3.15 6.18143C2.94375 6.56321 2.84063 6.98316 2.84063 7.44129C2.84063 7.74671 2.8875 8.03941 2.98125 8.31937C3.08125 8.59298 3.21875 8.84113 3.39375 9.06383C3.4375 9.11474 3.45938 9.16246 3.45938 9.207C3.45938 9.26427 3.40625 9.30244 3.3 9.32153C2.94375 9.39152 2.62188 9.54423 2.33438 9.77966C2.04688 10.0151 1.81875 10.3078 1.65 10.6577C1.4875 11.0077 1.40625 11.3831 1.40625 11.784C1.40625 12.2421 1.50938 12.6652 1.71563 13.0534C1.92813 13.4352 2.21563 13.7406 2.57812 13.9696C2.94062 14.1923 3.33438 14.3037 3.75938 14.3037H14.0625ZM9.60938 12.3948C9.42188 12.3948 9.25625 12.3216 9.1125 12.1753L6.3 9.32153C6.1625 9.18155 6.09375 9.01611 6.09375 8.82523C6.09375 8.62798 6.1625 8.45936 6.3 8.31937C6.44375 8.17303 6.6125 8.09985 6.80625 8.09985C6.99375 8.09985 7.15625 8.16984 7.29375 8.30983L8.90625 9.94192V5.95237C8.90625 5.74876 8.97188 5.58014 9.10313 5.44652C9.24063 5.30653 9.40938 5.23654 9.60938 5.23654C9.79063 5.23654 9.95625 5.30653 10.1063 5.44652C10.2438 5.57378 10.3125 5.74239 10.3125 5.95237V9.94192L11.9344 8.30983C12.0719 8.16984 12.2344 8.09985 12.4219 8.09985C12.5969 8.09985 12.7688 8.17939 12.9375 8.33846C13.0625 8.45936 13.125 8.61843 13.125 8.81568C13.125 9.01929 13.0563 9.18791 12.9188 9.32153L10.1063 12.1753C9.95 12.3216 9.78438 12.3948 9.60938 12.3948Z"
              fill="currentColor"
            ></path>
          </svg>
          <span>Download Slack</span>
        </a>
        <ul className="social__list">
          <li className="social__item">
            <svg
              width="20"
              height="20"
              version="1"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M31.993 6.077c-1.177.523-2.44.876-3.77 1.033 1.355-.812 2.396-2.098 2.887-3.63-1.27.75-2.673 1.3-4.168 1.592C25.744 3.797 24.038 3 22.15 3c-3.626 0-6.563 2.938-6.563 6.563 0 .514.057 1.016.17 1.496C10.3 10.783 5.464 8.17 2.227 4.2c-.565.97-.89 2.098-.89 3.3 0 2.28 1.16 4.287 2.92 5.465-1.076-.035-2.088-.33-2.973-.82v.08c0 3.182 2.26 5.835 5.264 6.438-.55.15-1.13.23-1.73.23-.423 0-.833-.04-1.233-.117.834 2.606 3.26 4.504 6.13 4.558-2.245 1.76-5.075 2.81-8.15 2.81-.53 0-1.053-.03-1.566-.09C2.905 27.914 6.355 29 10.062 29c12.072 0 18.675-10 18.675-18.675 0-.284-.008-.568-.02-.85 1.283-.925 2.395-2.08 3.276-3.398z"></path>
            </svg>
          </li>
          <li className="social__item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                d="M15.115 0H.885A.883.883 0 0 0 0 .885v14.23c0 .49.395.885.885.885h7.659V9.803h-2.09v-2.4h2.09V5.62c0-2.069 1.27-3.189 3.104-3.189.875 0 1.643.053 1.867.096v2.155h-1.291c-1.003 0-1.184.469-1.184 1.173v1.547h2.379l-.31 2.4H11.04V16h4.075c.49 0 .885-.395.885-.885V.885A.883.883 0 0 0 15.115 0z"
                fillRule="evenodd"
              ></path>
            </svg>
          </li>
          <li className="social__item">
            <svg
              version="1"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M31.67 9.18s-.312-2.354-1.27-3.39c-1.218-1.358-2.58-1.366-3.206-1.443C22.717 4 16.002 4 16.002 4h-.015s-6.715 0-11.19.347c-.626.077-1.988.085-3.206 1.443C.635 6.826.32 9.18.32 9.18S0 11.94 0 14.7v2.59c0 2.762.32 5.522.32 5.522s.312 2.352 1.27 3.386c1.22 1.358 2.816 1.317 3.528 1.46 2.56.26 10.877.342 10.877.342s6.722-.012 11.2-.355c.624-.08 1.987-.088 3.204-1.446.956-1.036 1.27-3.388 1.27-3.388s.32-2.76.32-5.523V14.7c0-2.76-.32-5.522-.32-5.522z"></path>
              <path fill="#FFF" d="M12 10v12l10-6"></path>
            </svg>
          </li>
          <li className="social__item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                d="M14.816 0C15.466 0 16 .512 16 1.152v13.696c0 .63-.533 1.152-1.184 1.152H1.184C.534 16 0 15.477 0 14.848V1.152C0 .512.533 0 1.184 0zM3.563 4.96a1.382 1.382 0 0 0 0-2.763c-.768 0-1.376.619-1.376 1.376 0 .768.608 1.387 1.376 1.387zm10.069 4.49c0-2.058-.437-3.637-2.848-3.637-1.152 0-1.92.63-2.24 1.227h-.032V5.995H6.24v7.637h2.368V9.856c0-.992.181-1.963 1.419-1.963 1.216 0 1.237 1.142 1.237 2.027v3.712h2.368zM2.368 13.633h2.379V5.995H2.368z"
                fillRule="evenodd"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
      <p className="footer__rights">
        ©2022 Slack Technologies, LLC, a Salesforce company. All rights
        reserved. Various trademarks held by their respective owners.
      </p>
      {showDialog && (
        <div className="backdrop">
          <div className="change-region">
            <h2 className="heading-2 heading-2--black">Change Region</h2>
            <p className="text text--black u-mt-sm u-mb-md">
              Selecting a different region will change the language and content
              of slack.com.
            </p>
            <button onClick={() => setShowDialog(false)} className="close-btn">
              <svg
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-255 347 100 100"
                aria-hidden="true"
              >
                <path d="M-160.4 434.2l-37.2-37.2 37.1-37.1-7-7-37.1 37.1-37.1-37.1-7 7 37.1 37.1-37.2 37.2 7.1 7 37.1-37.2 37.2 37.2"></path>
              </svg>
            </button>
            <div className="regions">
              <div className="region">
                <h3 className="heading-3 heading-3--normal u-mb-sm">
                  Americas
                </h3>
                <ul className="region__list">
                  <li className="region__item">Latinoamérica (español)</li>
                  <li className="region__item">Brasil (português)</li>
                  <li className="region__item">United States (English)</li>
                </ul>
              </div>
              <div className="region">
                <h3 className="heading-3 heading-3--normal u-mb-sm">Europe</h3>
                <ul className="region__list">
                  <li className="region__item">Deutschland (Deutsch)</li>
                  <li className="region__item">España (español)</li>
                  <li className="region__item">France (français)</li>
                  <li className="region__item">Italia (italiano)</li>
                  <li className="region__item">Россия (pусский)</li>
                  <li className="region__item">United Kingdom (English)</li>
                </ul>
              </div>
              <div className="region">
                <h3 className="heading-3 heading-3--normal u-mb-sm">
                  Asia Pacific
                </h3>
                <ul className="region__list">
                  <li className="region__item">简体中文</li>
                  <li className="region__item">繁體中文</li>
                  <li className="region__item">India (English)</li>
                  <li className="region__item">日本 (日本語)</li>
                  <li className="region__item">대한민국 (한국어)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
