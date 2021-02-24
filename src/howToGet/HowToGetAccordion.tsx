import React from "react";

//bootstrap
import { Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import ByCar from "./accordionCards/ByCar";
import PublicTransport from "./accordionCards/PublicTransport";
import OrderTaxi from "./accordionCards/OrderTaxi";
import Transfer from "./accordionCards/Transfer";

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faBusAlt,
  faTaxi,
  faShuttleVan,
} from "@fortawesome/free-solid-svg-icons";

//styles
import "./howToGetAccordion.scss";

const HowToGetAccordion = () => {
  return (
    <div className="how-to-get__body">
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            <FontAwesomeIcon className="accordion__icon" icon={faCar} />
            By Car
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="accordion__body">
            <Card.Body>
              <ByCar />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            <FontAwesomeIcon className="accordion__icon" icon={faBusAlt} />
            Public transport
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1" className="accordion__body">
            <Card.Body>
              <PublicTransport />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
            <FontAwesomeIcon className="accordion__icon" icon={faTaxi} />
            Order Taxi
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3" className="accordion__body">
            <Card.Body>
              <OrderTaxi />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
            <FontAwesomeIcon className="accordion__icon" icon={faShuttleVan} />
            Transfer
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4" className="accordion__body">
            <Card.Body>
              <Transfer />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default HowToGetAccordion;
