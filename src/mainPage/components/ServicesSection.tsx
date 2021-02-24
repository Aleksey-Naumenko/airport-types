import React from "react";
import { Link } from "react-router-dom";

// styles
import "../servicesSection.scss";

const ServicesSection = () => {
  return (
    <section className="main-service content-block">
      <div className="container">
        <div className="row">
          <Link
            to="/how-to-get"
            className="border-right-top block"
            style={{ backgroundImage: "url(../../images/main/block_1/1.jpg)" }}
          >
            <h3 className="border-right-top__title block__title">
              destinations to airport
            </h3>
            <div className="border-right-top__downside block__downside">
              <div className="border-right-top__subtitle block__subtitle">
                2 Medova str., Kyiv Terminals A, B and D
              </div>
              <div className="border-right-top__button block__button">
                <div>get directions</div>
              </div>
            </div>
          </Link>
          <Link
            to="/departures"
            className="border-left-top block"
            style={{ backgroundImage: "url(../../images/main/block_1/3.jpg)" }}
          >
            <h3 className="border-left-top__title block__title">
              airline tickets
            </h3>
            <div className="border-left-top__downside block__downside">
              <div className="border-left-top__subtitle block__subtitle">
                Any destinations. Best fares.
              </div>
              <div className="border-left-top__button block__button">
                <div>search</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="row">
          <Link
            to="/parking"
            className="border-right-bottom block"
            style={{ backgroundImage: "url(../../images/main/block_1/2.jpg)" }}
          >
            <h3 className="border-right-bottom__title block__title">parking</h3>
            <div className="border-right-bottom__downside block__downside">
              <div className="border-right-bottom__subtitle block__subtitle">
                Fees and guide to parking
              </div>
              <div className="border-right-bottom__button block__button">
                <div>Find out more</div>
              </div>
            </div>
          </Link>
          <Link
            to="/"
            className="border-left-bottom block"
            style={{
              backgroundImage: "url(../../images/main/block_1/4.jpg)",
              backgroundSize: "cover",
            }}
          >
            <h3 className="border-left-bottom__title block__title">
              Info centre
            </h3>
            <div className="border-left-bottom__downside block__downside">
              <div className="border-left-bottom__subtitle block__subtitle">
                24/7 Information at <br />
                +38 (044) 364-45-14
              </div>
              <div className="border-left-bottom__button block__button">
                <div>contact now</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
