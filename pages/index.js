import Image from "next/image";

import TopBanner from "../common/TopBanner";
import Layout from "../containers/Layout";
import {
  container,
  backgroundPrimary,
  welcome,
  welcome__title,
  workspaces,
  accountName,
  workspace,
  workspace__logo,
  workspace__detail,
  workspace__member,
  box1,
  box2,
  box3,
  box4,
  box5,
  toggleCheckbox,
  toggleLabel,
  workspace__expand,
  expandText,
  expandLoading,
  expandLoading__logo,
  expandLoading__detail,
  expandLoading__member,
  expandLoading__name,
  newWorkspace,
  newWorkspace__logoBox,
  newWorkspace__logo,
  newWorkspace__text,
  differentMail,
  downloadSoftware,
  downloadSoftware__detail,
  downloadSoftware__close,
  guides,
  guides__grid,
  guide,
  guide__img,
  guide__type,
  guide__btn,
} from "../sass/pages/index.module.scss";

export default function Home() {
  return (
    <Layout headerColor="primary">
      <div className={container}>
        {/* <TopBanner /> */}
        <div className={backgroundPrimary}>
          <div className={welcome}>
            <div className={welcome__title}>
              <Image
                src="/waving-hand.gif"
                alt="waving hands"
                width={40}
                height={40}
              />
              <h1 className="heading-1 heading-1--white ml-sm">Welcome Back</h1>
            </div>
            <div className={workspaces}>
              <p className={accountName}>Workspaces for abcdef@gmail.com</p>

              <div className={workspace}>
                <Image
                  src="/workspace-logo.png"
                  alt="workspace logo"
                  width={80}
                  height={80}
                  className={workspace__logo}
                />
                <div className={workspace__detail}>
                  <h3 className="heading-3 heading-3--black">Online Grocery</h3>
                  <p className={workspace__member}>1 member</p>
                </div>
                <button type="button" className="btn btn--primary-contained">
                  Launch Slack
                </button>
              </div>

              <input
                type="checkbox"
                id="seemore__toggle"
                className={toggleCheckbox}
              ></input>

              <label htmlFor="seemore__toggle" className={toggleLabel}>
                See &nbsp;
              </label>

              <div className={workspace__expand}>
                <p className={expandText}>
                  <div className="text text--black">
                    You have 1 more workspace associated with this email
                  </div>
                  <a href="#" className="link link--secondary">
                    Verify your account to sign in &rarr;
                  </a>
                </p>

                <div>
                  <div className={expandLoading}>
                    <div className={expandLoading__logo}></div>
                    <div className={expandLoading__detail}>
                      <div className={expandLoading__name}></div>
                      <div className={expandLoading__member}>
                        <div className={box1}></div>
                        <div className={box2}></div>
                        <div className={box3}></div>
                        <div className={box4}></div>
                        <div className={box5}></div>
                      </div>
                    </div>
                    <button type="button" className="btn btn--disabled">
                      Launch Slack
                    </button>
                  </div>
                </div>

                <div>
                  <div className={expandLoading}>
                    <div className={expandLoading__logo}></div>
                    <div className={expandLoading__detail}>
                      <div className={expandLoading__name}></div>
                      <div className={expandLoading__member}>
                        <div className={box1}></div>
                        <div className={box2}></div>
                        <div className={box3}></div>
                        <div className={box4}></div>
                        <div className={box5}></div>
                      </div>
                    </div>
                    <button type="button" className="btn btn--disabled">
                      Launch Slack
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={newWorkspace}>
              <figure className={newWorkspace__logoBox}>
                <Image
                  src="/new_workspace_woman.png"
                  width={200}
                  height={121}
                  alt="Woman with laptop color background"
                  className={newWorkspace__logo}
                />
              </figure>
              <p className={newWorkspace__text}>
                Want to use Slack with a different team?
              </p>
              <button type="button" className="btn btn--primary-outlined mr-sm">
                Create a new Workspace
              </button>
            </div>
            <p className={differentMail}>
              <span className="text text--white">
                Not seeing your workspace?
              </span>
              <a href="#" className="link link--secondary">
                Try using a different email
              </a>
            </p>
            <div className={downloadSoftware}>
              <svg
                fill="none"
                height="68"
                width="78"
                viewBox="0 0 80 68"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M73.719 31.718c-4.156-3.09-11.528-4.063-18.488-2.81a12.033 12.033 0 0 0-1.39-1.216c-6.995-5.2-19.11-7.013-30.2-3.803-7.634 2.209-13.128 14.538-10.104 14.773-8.28-.646-15.576 8.006-11.252 13.88 1.128 1.534 3.626 1.893 5.98 2.276-3.193 2.754-3.3 5.971-.2 8.616 6.314 5.384 19.063 5.601 25.52 2.753L67.48 46.565c4.253-2.94 5.826-5.359 5.585-8.695-.127-1.744 2.564-4.732.654-6.152z"
                    fill="#000"
                  ></path>
                  <path
                    d="M62.438 12.924c.073-.741.119-1.473.117-2.193-.005-1.688-.222-3.193-.616-4.511l5.219-1.163L58.076.983a7.272 7.272 0 0 0-1.21-.543l-.03-.014.001.005C54.24-.46 50.95.008 47.372 2.076c-6.145 3.55-11.408 10.817-13.764 18.233-1.219.026-2.579.42-4.021 1.254-5.109 2.952-9.24 10.107-9.222 15.982.007 2.098.549 3.74 1.467 4.861-3.422 3.54-5.836 8.773-5.823 13.266.01 3.242 1.28 5.415 3.274 6.217l-.002.001 9.49 4.297L32 57.089l25.795-14.903c6.64-3.835 12.003-13.134 11.982-20.768-.017-5.71-3.039-8.867-7.34-8.494z"
                    fill="#2f8ab7"
                  ></path>
                  <path
                    d="M57.056 6.453c-6.145 3.55-11.409 10.815-13.764 18.233-1.219.026-2.58.42-4.021 1.254-5.11 2.952-9.24 10.107-9.222 15.982.006 2.099.548 3.74 1.467 4.862-3.422 3.538-5.837 8.772-5.824 13.266.017 5.874 4.171 8.246 9.281 5.294l32.507-18.78C74.12 42.73 79.483 33.43 79.46 25.798c-.016-5.708-3.038-8.867-7.339-8.494.072-.742.118-1.473.117-2.193-.028-9.61-6.824-13.485-15.183-8.657z"
                    fill="#f3ede4"
                  ></path>
                  <g fill="#1264a3">
                    <path d="m55.012 39.964-.013.008-.013.008c.005-.001.008-.005.013-.008l.013-.008zm.296-.283-.002.004.002-.004zm.011-.016-.005.006c.002-.001.004-.003.005-.006zm.01-.015-.008.011.008-.011zm4.875-9.934c.137-.08.275-.099.38-.04.208.12.21.51.002.87l-5.21 9.028a1.125 1.125 0 0 0 .156-.528l-.004-1.485 4.297-7.448c.105-.18.241-.319.38-.397zm-10.723 5.882c.136-.079.274-.098.38-.04l4.597 2.623.005 1.484c0 .166.06.284.153.34l-5.508-3.141c-.208-.12-.21-.51-.001-.87.101-.179.238-.317.374-.396z"></path>
                    <path d="M54.946 21.565c.296-.171.537-.035.537.305l.045 15.692.005 1.486c0 .198-.08.418-.204.604l-.008.011-.003.005-.005.007-.007.01c0 .001-.002.001-.002.003a1.046 1.046 0 0 1-.292.28l-.013.007-.013.009c-.145.08-.276.085-.371.028-.094-.056-.152-.175-.153-.34l-.005-1.485-.045-15.694c0-.345.24-.759.534-.928zM48.036 47.212l12.541-7.245c.296-.17.773-.17 1.067 0 .294.171.292.447-.004.618L49.1 47.83c-.296.171-.772.171-1.066 0-.295-.17-.293-.447.003-.618z"></path>
                  </g>
                </g>
              </svg>
              <div className={downloadSoftware__detail}>
                <h3 className="heading-3 heading-3--white">Slack for Mac</h3>
                <p className="text text--white">
                  Launk slack from your dock and stay up to date with Desktop
                  notifications
                </p>
              </div>
              <a
                href="#"
                className="link link--secondary link--underlined mr-xs"
              >
                Download
              </a>
              <span className="color-white text text--white">&darr;</span>
              <span className={downloadSoftware__close}>
                <svg
                  width="18"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-255 347 100 100"
                  aria-hidden="true"
                >
                  <path d="M-160.4 434.2l-37.2-37.2 37.1-37.1-7-7-37.1 37.1-37.1-37.1-7 7 37.1 37.1-37.2 37.2 7.1 7 37.1-37.2 37.2 37.2"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className={guides}>
          <h2 className="heading-2 heading-2--white">
            Learn how to use slack for work
          </h2>
          <div className={guides__grid}>
            <div className={guide}>
              <Image
                src="/guide-1.png"
                alt="guide 1"
                width={250}
                height={250}
                className={guide__img}
              />
              <h4 className={guide__type}>Solutions</h4>
              <h2 className="heading-2 heading-2--black">
                See how slack work for all kinds of teams
              </h2>
              <button className={guide__btn}>
                Learn More <span>&rarr;</span>
              </button>
            </div>
            <div className={guide}>
              <Image
                src="/guide-2.png"
                alt="guide 2"
                width={250}
                height={250}
                className={guide__img}
              />
              <h4 className={guide__type}>Blog</h4>
              <h2 className="heading-2 heading-2--black">
                Introducing Slack Connect: the future of business communication
              </h2>
              <button className={guide__btn}>
                Learn More <span>&rarr;</span>
              </button>
            </div>
            <div className={guide}>
              <Image
                src="/guide-3.png"
                alt="guide 3"
                width={250}
                height={250}
                className={guide__img}
              />
              <h4 className={guide__type}>Blog</h4>
              <h2 className="heading-2 heading-2--black">
                How to use channels to organize your work life
              </h2>
              <button className={guide__btn}>
                Read Story <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
