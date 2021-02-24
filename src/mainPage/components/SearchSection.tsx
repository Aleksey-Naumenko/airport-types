import React from "react";
import { Link } from "react-router-dom";

// styles
import "../searchSection.scss";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";

// components
import SearchInput from "../../flights/components/SearchInput";

const stylesForBackground = {
  backgroundImage: "url(../../images/main.jpg)",
  backgroundPosition: "center",
};

const SearchSection = () => {
  return (
    <section
      className="main-search-wrapper section-wrapper"
      style={stylesForBackground}
    >
      <div className="main-search">
        <h1 className="main-search__title">FLIGHT SEARCH</h1>
        <SearchInput />
        <div className="main-search__buttons-container search-buttons-block">
          <Link to="/departures">
            <button className="search-buttons-block__button button-right">
              <FontAwesomeIcon
                className="button-right__icon"
                icon={faPlaneDeparture}
              />
              Departures
            </button>
          </Link>
          <Link to="/arrivals">
            <button className="search-buttons-block__button button-left">
              <FontAwesomeIcon
                className="button-left__icon"
                icon={faPlaneArrival}
              />
              Arrivals
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
