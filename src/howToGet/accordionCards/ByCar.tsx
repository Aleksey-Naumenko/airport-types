import React from "react";
import { Link } from "react-router-dom";

//styles
import "../howToGet.scss";

const ByCar = () => {
  return (
    <div className="by-car-card">
      <span>International Airport Kyiv (Zhulyany)</span>
      <span>Code: IEV</span>
      <span>Terminal A - Kyiv, 2 Medova St.</span>
      <span>Terminal B - Kyiv, 2 Medova St.</span>
      <span>Terminal D - Kyiv, 2 Medova St.</span>
      <span>Administration Building, Kyiv, 79 Povitroflotskyi Ave.</span>
      <Link to="/parking" className="by-car-card__parking">
        Parking information, rules and fares
      </Link>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14092.755158992184!2d86.91622032919318!3d27.988119872821454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2z0JTQttC-0LzQvtC70YPQvdCz0LzQsA!5e0!3m2!1sru!2sua!4v1607873425326!5m2!1sru!2sua"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
};

export default ByCar;
