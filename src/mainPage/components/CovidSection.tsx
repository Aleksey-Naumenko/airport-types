import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

// styles
import "../covidSection.scss";

const CovidSection = () => {
  const location = useLocation();
  const isCovidPage = location.pathname === "/covid";
  const covidClass = classNames("covid-info-wrapper content-block", {
    "covid-page": isCovidPage,
  });
  return (
    <>
      {isCovidPage ? (
        <div className={covidClass}>
          <div className="covid-info">
            <div className="covid-info__text">
              <p>
                Dear passengers,
                <br />
                <br />
                For the period of the COVID - 19 coronavirus pandemic, changes
                were made to the technological process of aviation safety
                control at checkpoints. As a result, the procedure time has
                increased, and the waiting time in the queue has increased
                accordingly.
                <br />
                Please keep this in mind when planning your trip and arrive at
                the airport well in advance. Also, for a comfortable trip, we
                recommend that you go through the procedure of registration and
                control of aviation safety in advance.
                <br />
                Please get familiar with this information and have safe travels.
              </p>
              <div className="">
                <img src="../../images/covid_icon.png" alt="virus image" />
              </div>
            </div>
            <div className="covid-info__text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                doloremque quos tempore incidunt inventore iste alias
                praesentium ad vel iure, aspernatur, facilis explicabo
                consequuntur maiores provident, eligendi autem officiis error et
                nobis sapiente quisquam a sequi! Quasi aliquam ex aut? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Dolor
                doloremque quos tempore incidunt inventore iste alias
                praesentium ad vel iure, aspernatur, facilis explicabo
                consequuntur maiores provident, eligendi autem officiis error et
                nobis sapiente quisquam a sequi! Quasi aliquam ex aut?
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Link to="/covid" className={covidClass}>
          <div className="covid-info">
            <div className="covid-info__text">
              <p>
                Dear passengers,
                <br />
                <br />
                For the period of the COVID - 19 coronavirus pandemic, changes
                were made to the technological process of aviation safety
                control at checkpoints. As a result, the procedure time has
                increased, and the waiting time in the queue has increased
                accordingly.
                <br />
                Please keep this in mind when planning your trip and arrive at
                the airport well in advance. Also, for a comfortable trip, we
                recommend that you go through the procedure of registration and
                control of aviation safety in advance.
                <br />
                Please get familiar with this information and have safe travels.
              </p>
              <div className="">
                <img src="../../images/covid_icon.png" alt="virus image" />
              </div>
            </div>
            <div className="covid-info__button">Find out more</div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CovidSection;
