import React from "react";

import "./parking.scss";
import ParkingForm from "./ParkingForm";

const Parking = () => {
  return (
    <section className="parking">
      <h1 className="h1-title">LONG-TERM PARKING</h1>
      <span>(Terminal B)</span>
      <span>
        Leave your car in our safe hands for the time of your vacation. Airport
        Kyiv offers a long-term car parking service in a secluded territory of
        terminal B. Only 390 UAH / 24h
      </span>
      <span>
        Service includes complimentary transfer to Terminal A with a comfortable
        Volkswagen van
      </span>
      <ParkingForm />
    </section>
  );
};

export default Parking;
