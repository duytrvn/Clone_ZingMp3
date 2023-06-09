import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="app__sidebar">
      <div className="sidebar__logo hide-on-mobile">
        <a href="#" className="sidebar__logo-link">
          <h1>DuyDev</h1>
          {/* <img src="../../assets/img/main-logo.svg" alt="" /> */}
          {/* <img src="../../assets/img/avt.jpg" alt="" /> */}
        </a>
      </div>
      <div className="sidebar__nav">
        <ul className="sidebar__nav-list sidebar__nav-list--separate">
          <li className="sidebar__nav-item active">
            <a href="#" className="sidebar__item-link">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-music-player"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3zm1 0v3h6V3H5zm3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  <path d="M11 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z" />
                </svg>
              </i>
              <span>Cá Nhân</span>
            </a>
          </li>
          <li className="sidebar__nav-item">
            <a href="#" className="sidebar__item-link">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-vinyl"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
                  <path d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </i>
              <span>Khám Phá</span>
            </a>
          </li>
          <li className="sidebar__nav-item">
            <a href="#" className="sidebar__item-link">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-music-note-list"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                  <path fill-rule="evenodd" d="M12 3v10h-1V3h1z" />
                  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </i>
              <span>#Zingchart</span>
            </a>
          </li>
          <li className="sidebar__nav-item">
            <a href="#" className="sidebar__item-link">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-soundwave"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </i>
              <span>Radio</span>
              <div className="sidebar__nav-label">LIVE</div>
            </a>
          </li>
          <li className="sidebar__nav-item">
            <a href="#" className="sidebar__item-link">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-earmark-slides"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 6a.5.5 0 0 0-.496.438l-.5 4A.5.5 0 0 0 4.5 11h3v2.016c-.863.055-1.5.251-1.5.484 0 .276.895.5 2 .5s2-.224 2-.5c0-.233-.637-.429-1.5-.484V11h3a.5.5 0 0 0 .496-.562l-.5-4A.5.5 0 0 0 11 6H5zm2 3.78V7.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 9.778z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
              </i>
              <span>Theo doi</span>
            </a>
          </li>
        </ul>
      </div>

      {/* subnav */}
      <div className="sidebar__subnav hide-on-mobile">
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-item subnab--item">
            <a href="#" className="sidebar__item-link">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-music-note-beamed"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                  <path
                    fill-rule="evenodd"
                    d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
                  />
                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                </svg>
              </i>
              <span>BXH Nhạc mới</span>
            </a>
          </li>
          <li className="sidebar__nav-item subnab--item">
            <a href="#" className="sidebar__item-link">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-slack"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                </svg>
              </i>
              <span>Chủ Đề & Thể loại</span>
            </a>
          </li>
          <li className="sidebar__nav-item subnab--item">
            <a href="#" className="sidebar__item-link">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              </i>
              <span>Top 100</span>
            </a>
          </li>
        </ul>
        <div className="sidebar__login">
          <p className="sidebar__login-description">
            Nghe nhạc không quảng cáo cùng kho nhạc VIP
          </p>
          <a
            href="#"
            className="sidebar__login-btn button is-small button-gold"
          >
            Nâng cấp tài khoản
          </a>
        </div>
        <ul className="sidebar__subnav-menu">
          <li className="sidebar__menu-item menu-header">
            <h2 className="sidebar__menu-title">THƯ VIỆN</h2>
            <i className="bi bi-pencil hide-on-tablet"></i>
          </li>
          <li className="sidebar__menu-item">
            <a href="#" className="sidebar__menu-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient
                    id="0783s0j89a"
                    x1="0%"
                    x2="0%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#3CA2FF" />
                    <stop offset="100%" stop-color="#008FFF" />
                  </linearGradient>
                  <linearGradient
                    id="prx3tly02b"
                    x1="21.839%"
                    x2="21.839%"
                    y1="43.679%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#FFF" />
                    <stop offset="100%" stop-color="#FFF" stop-opacity=".9" />
                  </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <g>
                    <g>
                      <path
                        fill="url(#0783s0j89a)"
                        d="M.516 7.143c.812-3.928 3.31-6.115 7.207-6.776 2.88-.489 5.762-.495 8.637.014 4.012.709 6.424 3.024 7.192 7.011.594 3.082.603 6.196-.009 9.274-.821 3.9-3.384 6.309-7.266 6.967-2.88.489-5.762.495-8.637-.014-4.012-.709-6.435-3.14-7.203-7.127-.624-3.102-.564-6.235.08-9.349z"
                        transform="translate(-21 -433) translate(21 433)"
                      />
                      <path
                        fill="url(#prx3tly02b)"
                        d="M3.995 9.479c-.245.48-.245 1.11-.245 2.371v3.3c0 1.26 0 1.89.245 2.371.216.424.56.768.984.984.48.245 1.11.245 2.371.245h9.3c1.26 0 1.89 0 2.372-.245.423-.216.767-.56.983-.983.245-.482.245-1.112.245-2.372v-3.3c0-1.26 0-1.89-.245-2.371-.216-.424-.56-.768-.983-.984-.482-.245-1.112-.245-2.372-.245h-9.3c-1.26 0-1.89 0-2.371.245-.424.216-.768.56-.984.984zm8.567.571l.06.004.068.015.057.02.017.008c.556.27 1.067.623 1.516 1.046.075.07.148.142.22.217.172.18.166.464-.014.636-.18.172-.464.167-.636-.013-.061-.063-.123-.125-.187-.185-.202-.19-.42-.365-.65-.521v3.442c0 1.025-.832 1.856-1.857 1.856S9.3 15.744 9.3 14.719c0-1.025.831-1.856 1.856-1.856.35 0 .677.096.957.264V10.5c0-.249.201-.45.45-.45z"
                        transform="translate(-21 -433) translate(21 433)"
                      />
                      <path
                        fill="#FFF"
                        fill-opacity=".6"
                        fill-rule="nonzero"
                        d="M7.5 5.25c0-.414.336-.75.75-.75h7.5c.414 0 .75.336.75.75h-9z"
                        transform="translate(-21 -433) translate(21 433)"
                      />
                      <path
                        fill="#FFF"
                        fill-opacity=".9"
                        fill-rule="nonzero"
                        d="M6 6.75c0-.414.336-.75.75-.75h10.5c.414 0 .75.336.75.75H6z"
                        transform="translate(-21 -433) translate(21 433)"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span>Bài hát</span>
            </a>
          </li>
          <li className="sidebar__menu-item">
            <a href="#" className="sidebar__menu-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient
                    id="ghd4ngt38a"
                    x1="50%"
                    x2="50%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#9FD465" />
                    <stop offset="100%" stop-color="#70B129" />
                  </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <g>
                    <g>
                      <path
                        fill="url(#ghd4ngt38a)"
                        d="M.516 7.143c.812-3.928 3.31-6.115 7.207-6.776 2.88-.489 5.762-.495 8.637.014 4.012.709 6.424 3.024 7.192 7.011.594 3.082.603 6.196-.009 9.274-.821 3.9-3.384 6.309-7.266 6.967-2.88.489-5.762.495-8.637-.014-4.012-.709-6.435-3.14-7.203-7.127-.624-3.102-.564-6.235.08-9.349z"
                        transform="translate(-21 -467) translate(21 467)"
                      />
                      <path
                        stroke="#FFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.5 11.5h5m-5 3h5M6 17.5h12.5"
                        transform="translate(-21 -467) translate(21 467)"
                      />
                      <path
                        fill="#FFF"
                        d="M10.786 4.025c-.053-.016-.11-.025-.167-.025-.316 0-.572.262-.572.585v4.782c-.532-.44-1.21-.704-1.948-.704C6.387 8.663 5 10.082 5 11.831 5 13.581 6.387 15 8.099 15c1.711 0 3.099-1.419 3.099-3.169 0-.074-.003-.147-.007-.22l.001-6.04c.534.336 1.033.728 1.49 1.169.114.109.225.22.334.337.218.233.58.24.808.017.228-.223.235-.593.017-.826-.123-.131-.247-.257-.375-.38-.766-.738-1.64-1.355-2.589-1.826l-.091-.037z"
                        transform="translate(-21 -467) translate(21 467)"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span>Playlist</span>
            </a>
          </li>
          <li className="sidebar__menu-item">
            <a href="#" className="sidebar__menu-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient
                    id="v6mduhifwa"
                    x1="50%"
                    x2="50%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#FFD677" />
                    <stop offset="100%" stop-color="#F7AA45" />
                  </linearGradient>
                  <linearGradient
                    id="dkfkk30hhb"
                    x1="21.205%"
                    x2="21.205%"
                    y1="43.042%"
                    y2="100.632%"
                  >
                    <stop offset="0%" stop-color="#FFF" />
                    <stop offset="100%" stop-color="#FFF" stop-opacity=".9" />
                  </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <g>
                    <g>
                      <path
                        fill="url(#v6mduhifwa)"
                        d="M.516 7.143c.812-3.928 3.31-6.115 7.207-6.776 2.88-.489 5.762-.495 8.637.014 4.012.709 6.424 3.024 7.192 7.011.594 3.082.603 6.196-.009 9.274-.821 3.9-3.384 6.309-7.266 6.967-2.88.489-5.762.495-8.637-.014-4.012-.709-6.435-3.14-7.203-7.127-.624-3.102-.564-6.235.08-9.349z"
                        transform="translate(-21 -569) translate(21 569)"
                      />
                      <path
                        fill="url(#dkfkk30hhb)"
                        d="M12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75zm3.805 12.388c-.13.13-.301.195-.472.195-.17 0-.341-.065-.47-.195l-3.334-3.333c-.126-.125-.196-.294-.196-.472V8c0-.369.299-.667.667-.667.368 0 .667.298.667.667v4.057l3.138 3.138c.26.261.26.682 0 .943z"
                        transform="translate(-21 -569) translate(21 569)"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span>Gần đây</span>
            </a>
          </li>
        </ul>
      </div>
      {/* end subnav */}

      {/* create Playlist */}
      <div className="sidebar__create-playlist">
        <div className="sidebar__create-container hide-on-tablet-mobile">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </i>
          <h2 className="sidebar__create-title">Tạo playlist mới</h2>
        </div>
        <div className="sidebar__expand">
          <div className="sidebar__expand-btn btn--expand">
            <i className="bi bi-chevron-right"></i>
          </div>
          <div className="sidebar__expand-btn btn--shrink">
            <i className="bi bi-chevron-left"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
