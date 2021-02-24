import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// redux
import { connect } from "react-redux";
import * as flightsActions from "../redux/flights.actions";

const SearchField = ({ setList }: any) => {
  const [searchText, setSearchText] = useState<string>("");
  let history = useHistory();
  let location = useLocation();
  const { fltNo, direction }: any = useParams();

  useEffect(() => {
    if (searchText) {
      history.push(`${location.pathname}/${searchText}`);
    }
  }, [direction]);

  useEffect(() => {
    setList();
    if (fltNo) setSearchText(fltNo);
  }, []);

  const onChange = (e: any) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const inputElemVal = document.querySelector(
      ".scoreboard-form__input"
    ) as HTMLInputElement;
    if (!inputElemVal.value) return;

    if (fltNo && searchText) {
      return;
    }

    searchText
      ? history.push(`${location.pathname}/${searchText}`)
      : history.push(`/${direction}`);
  };

  return (
    <form onSubmit={onSubmit} className="scoreboard-form">
      <div className="scoreboard-form__icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        className="scoreboard-form__input"
        type="text"
        value={searchText}
        onChange={onChange}
        placeholder="Airline, destination or flight #"
      />
      <button type="submit" className="scoreboard-form__btn default-btn">
        Find
      </button>
    </form>
  );
};

const mapDispatch = {
  setList: flightsActions.getFlightList,
};

export default connect(null, mapDispatch)(SearchField);
