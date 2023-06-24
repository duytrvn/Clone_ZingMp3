import React from "react";
import "./Header.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaDownload,
  FaCog,
} from "react-icons/fa";
const Header: React.FC = () => {
  return (
    <div className="app__header">
      <div className="app__header-left">
        <button className="header__left-button zm-btn disabled button">
          <i>
            <FaArrowLeft />
          </i>
        </button>
        <button className="header__left-button zm-btn disabled button">
          <i>
            <FaArrowRight />
          </i>
        </button>
        <form className="header__left-seach">
          <div className="seach__container">
            <button className="btn-seach">
              <i>
                <FaSearch />
              </i>
            </button>
            <div className="input-wrapper">
              <input type="text" placeholder="Tìm kiếm bài hát , nghệ sĩ , lời bài hát ... " />
            </div>
          </div>
        </form>
      </div>

      <div className="app__header-right">
        <div className="Header__right-download">
          <a className="zm-btn download-btn button">
              <FaDownload />
            <span style={{paddingLeft:'10px'}}>Tải xuống</span>
          </a>
        </div>
        <div className="Header__right-setting">
          <button className="zm-btn zm-tooltip-btn is-hover-circle button setting-btn">
            <i>
              <FaCog />
            </i>
          </button>
        </div>
        <div className="Header__right-user">
          <div className="avatar">
            <button className="zm-btn button btn-avatar">
              <i>
                <FaCog />
              </i>

              <img src="../../assets/img/avt.jpg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
