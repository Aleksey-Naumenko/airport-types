import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RootState } from "./types";

// components
import SearchField from "./flights/components/SearchField";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainPage from "./mainPage/components/MainPage";
import HowToGet from "./howToGet/HowToGet";
import CovidSection from "./mainPage/components/CovidSection";
import Parking from "./parking/Parking";
import Register from "./registration/Register";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  setRegisteredAction,
  setUserEmailAction,
} from "./mainPage/redux/main.actions";

const MainLayout = () => {
  const dispatch = useDispatch();
  const isUserRegistered = useSelector(
    (state: RootState) => state.main.registered
  );

  useEffect(() => {
    let isAuthed;
    localStorage.getItem("isAuthed") === "true"
      ? (isAuthed = true)
      : (isAuthed = false);
    dispatch(setRegisteredAction(isAuthed));

    const email = localStorage.getItem("email");
    dispatch(setUserEmailAction(email));

    // if (isAuthed === false) {
    //   window.location.href = "./register";
    // }
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="page">
      <Router>
        {isUserRegistered ? (
          <>
            <Header />

            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route path="/covid">
                <CovidSection />
              </Route>
              <Route path="/how-to-get">
                <HowToGet />
              </Route>
              <Route path="/parking">
                <Parking />
              </Route>
              <Route path="/:direction?/:fltNo?">
                <SearchField />
              </Route>
            </Switch>

            <Footer />
          </>
        ) : (
          <Register />
        )}
      </Router>
    </div>
  );
};

export default MainLayout;
