import React from "react";
import NavSection from "../navigation/NavSection";
import { useTalimContext } from "../../context/TalimContext";
import { Link } from "react-router-dom";
interface HeaderProp {
  style: string;
  darkLogo: string;
  lightLogo: string;
}
const HeaderSection6: React.FC<HeaderProp> = ({
  style,
  darkLogo,
  lightLogo,
}) => {
  const { isHeaderFixed, isDarkTheme, handleSidebarOpen } = useTalimContext();
  return (
    <div
      className={`tl-header tl-2-header ${style} ${
        isHeaderFixed ? "sticky" : ""
      }`}
    >
      <div className="container position-relative">
        <div className="row g-0 align-items-center">
          <div className="col-xl-2 col-lg-2">
            <div className="row align-items-center">
              <div className="col-lg-12 col-6">
                <div className="logo">
                  <Link to="/">
                    <img src={isDarkTheme ? lightLogo : darkLogo} alt="KIDBA" />
                  </Link>
                </div>
              </div>
              <div className="d-lg-none d-flex justify-content-end col-6">
                <button
                  className="tl-hamburger navbar-toggler"
                  onClick={handleSidebarOpen}
                >
                  <i className="icofont-navigation-menu"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-8">
            <div className="tl-nav-menu">
              <NavSection ulPosition="justify-content-center" liStyle="" />
            </div>
          </div>

          <div className="col-2 d-lg-block d-none position-relative">
            <div className="kb-header-actions-11 d-flex justify-content-end">
              <button className="tl-searh-btn kb-searh-open-btn-11">
                <i className="fa-regular fa-magnifying-glass"></i>
              </button>
              <Link to="/login" className="tl-def-btn tl-2-def-btn">
                <i className="fa-regular fa-user"></i> Login/Register
              </Link>
            </div>

            <form className="tl-7-search-form-modal">
              <input
                type="search"
                name="Search"
                className="tl-7-nav-search"
                placeholder="Search items"
              />
              <button type="submit" className="tl-7-search-btn">
                <i className="fa-regular fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection6;
