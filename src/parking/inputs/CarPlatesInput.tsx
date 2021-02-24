import React, { useState } from "react";
import { useDispatch } from "react-redux";

// styles
import "../parking.scss";
//actions
import * as parkingActions from "../redux/parking.actions";

const CarPlatesInput = () => {
  const [carPlates, setcarPlates] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const dispatch = useDispatch();

  const handleCarPlates = (plates: string): void => {
    setIsValid(true);
    setcarPlates(plates);
  };

  const handleCarPlatesValidator = (): void => {
    if (carPlates === "") return;
    if (!carPlates.match(/[a-zA-Z]+\s*\d{4}\s*[a-zA-Z]{1,2}\b/)) {
      setIsValid(false);
      return;
    }
    dispatch(parkingActions.setCarPlatesAction(carPlates));
  };

  return (
    <div className="parking-form__car-plates row-wrapper">
      <label htmlFor="">Car plates</label>
      <div>
        <input
          type="text"
          placeholder="AA 2534 BB"
          onChange={(e) => handleCarPlates(e.target.value)}
          onBlur={handleCarPlatesValidator}
          value={carPlates}
          maxLength={10}
        />
        {!isValid && (
          <span className="alert-text">Car Plates is not valid</span>
        )}
      </div>
    </div>
  );
};

export default CarPlatesInput;
