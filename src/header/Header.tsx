import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setRegisteredAction } from "../mainPage/redux/main.actions";
import { RootState } from "../types";
import "./header.scss";

const Header = () => {
  const userEmail = useSelector((state: RootState) => state.main.userEmail);
  const dispatch = useDispatch();
  // const location = useLocation();

  const logoutHandler = () => {
    dispatch(setRegisteredAction(false));
    localStorage.setItem("isAuthed", "false");
  };
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img
            className="header-logo__img"
            src={"../images/logo-airport.png"}
            alt="LogoAirport"
          />
        </Link>
      </div>
      <nav className="header-nav">
        <div className="header-nav__btn">For passengers</div>
        <div className="header-nav__btn">IEV services</div>
        <div className="header-nav__btn">VIP</div>
        <div className="header-nav__btn">Partnership</div>
        <div
          onClick={() => logoutHandler()}
          className="header-nav__btn logout-btn"
        >
          Logout
        </div>
        <div className="header-nav__btn profile-info">Hello, {userEmail}</div>
      </nav>
    </header>
  );
};

export default Header;
