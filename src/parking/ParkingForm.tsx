import React, { useState } from "react";
import CarPlatesInput from "./inputs/CarPlatesInput";
import CredentialsInput from "./inputs/CredentialsInput";

//components
import DateInput from "./inputs/DateInput";
import Modal from "../modal/Modal";

//styles
import "./parking.scss";
//redux
import { connect, useSelector } from "react-redux";
import { allParkingDataSelector } from "./redux/parking.selectors";
//types & interfaces
import { RootState } from "../types";

const ParkingForm = ({ isFormValid }: any) => {
  const [modalactive, setModalActive] = useState<boolean>(false);
  const totalPrice = useSelector((state: RootState) => state.parking.price);

  const orderHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const isFormValid = allParkingDataSelector();
    console.log(isFormValid);
    if (!isFormValid) return;
    setModalActive(true);
  };

  const payHandler = (): void => {
    setModalActive(false);
    setTimeout(() => {
      alert("Success");
    }, 500);
  };

  return (
    <>
      <form className="parking__form parking-form">
        <DateInput />
        <CarPlatesInput />
        <CredentialsInput />
        <div className="submit-block row-wrapper">
          <div className="submit-block__title">Cost</div>
          <div className="submit-block__price">{`${totalPrice} ₴`}</div>
          <button
            disabled={!isFormValid}
            onClick={(e) => orderHandler(e)}
            className="default-btn submit-block__btn"
          >
            order
          </button>
        </div>
      </form>
      <Modal active={modalactive} setActive={setModalActive}>
        <div className="modal_content">
          {`Are you shure to pay ${totalPrice} ₴ for parking?`}
        </div>
        <button onClick={() => payHandler()} className="modal_btn default-btn">
          Pay
        </button>
      </Modal>
    </>
  );
};

const mapState = (state: RootState) => {
  return {
    isFormValid: allParkingDataSelector(state),
  };
};

export default connect(mapState)(ParkingForm);
