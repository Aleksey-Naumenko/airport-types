import React from "react";

import "../howToGet.scss";

const PublicTransport = () => {
  return (
    <div className="public-transport">
      <h4 className="public-transport__title">
        The public transport stop is located 200 meters from entry to Terminal
        A, D
      </h4>
      <span className="public-transport__notice">
        Public transport runs from 06:30 till 22:30.
      </span>
      <ul className="public-transport__list">
        <li>
          <span>Type</span>
          <span>Number</span>
          <span>Route</span>
        </li>
        <li>
          {" "}
          <span>Minibus</span>
          <span>565</span>
          <span>Subway stations: Shuliavska, Dorohozhychi, Petrivka</span>
        </li>
        <li>
          {" "}
          <span>
            Trolleybus night
            <br /> 23:00 - 5:30
          </span>
          <span>368</span>
          <span>Boyarka - Starovokzalna St. (near Main railway station)</span>
        </li>
        <li>
          {" "}
          <span>Minibus</span>
          <span>Number</span>
          <span>Vishneve - Subway station Kontraktova Sq.</span>
        </li>
        <li>
          {" "}
          <span>Trolleybus</span>
          <span>302</span>
          <span>Glushkova Ave. – Subway station Dorogozhichi</span>
        </li>
        <li>
          {" "}
          <span>Minibus</span>
          <span>482</span>
          <span>Subway station Lukyanivska - Teremki</span>
        </li>
        <li>
          {" "}
          <span>Trolleybus</span>
          <span>432</span>
          <span>Subway stations: Lukyanivska - Vasyl'kivs'ka - Teremki</span>
        </li>
        <li>
          {" "}
          <span>Minibus</span>
          <span>765</span>
          <span>
            Kyiv Airport - Subway stations: Shuliavska, Dorohozhychi, Syrets
          </span>
        </li>
        <li>
          {" "}
          <span>Bus (transit transport)</span>
          <span>153</span>
          <span>Kyiv Airport - Subway stations: Lva Tolstogo Sq.</span>
        </li>
        <li>
          {" "}
          <span>Trolleybus</span>
          <span>252</span>
          <span>Kyiv Airport - Kyiv railway station</span>
        </li>
        <li>
          {" "}
          <span>Minibus</span>
          <span>988</span>
          <span>Vasyl'kivs'ka – Smilianska St.</span>
        </li>
      </ul>
      <span className="public-transport__tickets">
        Tickets price for minibus routes: 7-8 UAH (you should pay while entering
        the minibus).
      </span>
      <span>
        Tickets price for bus and trolleybus routes: 8 UAH (you should buy
        ticket at the kiosk or from the driver and validate it while entering
        the vehicle).
      </span>
    </div>
  );
};

export default PublicTransport;
