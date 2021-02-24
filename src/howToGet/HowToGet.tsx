import React from "react";
import { useHistory } from "react-router-dom";

import "./howToGet.scss";
import HowToGetAccordion from "./HowToGetAccordion";

const HowToGet = () => {
  const history = useHistory();
  const getDirectionsButtonHandler = (): void => {
    window.open(
      "https://www.google.com/maps?q=%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9+%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82+%D0%9A%D0%B8%D0%B5%D0%B2+%D0%96%D1%83%D0%BB%D1%8F%D0%BD%D1%8B,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0,+2,+%D0%9A%D0%B8%D0%B5%D0%B2,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+02000&ftid=0x40d4c9478d439dcb:0x27666bcb99529f88&hl=ru-UA&gl=ua&shorturl=1"
    );
  };
  return (
    <section className="how-to-get">
      <div className="how-to-get__header">
        <h1 className="h1-title">DIRECTIONS TO AIRPORT</h1>
        <div></div>
        <button className="default-btn" onClick={getDirectionsButtonHandler}>
          <span>get directions</span>
        </button>
      </div>
      <HowToGetAccordion />{" "}
    </section>
  );
};

export default HowToGet;
