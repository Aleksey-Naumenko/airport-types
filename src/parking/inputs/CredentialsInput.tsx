import React, { useState } from "react";
import { useDispatch } from "react-redux";

//styles
import "../parking.scss";
//actions
import * as parkingActions from "../redux/parking.actions";

const CredentialsInput = () => {
  const [fullName, setFullName] = useState<string>("");
  const [isFullNameValid, setIsFullNameValid] = useState<boolean>(true);
  const [phone, setPhone] = useState<string>("");
  const [isPnoneValid, setIsPnoneValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setEmailValid] = useState<boolean>(true);
  const dispatch = useDispatch();

  const handleFullNameEnter = (name: string): void => {
    setIsFullNameValid(true);
    setFullName(name);
  };
  const handleFullNameValidator = () => {
    if (fullName === "") return;
    const regExp = /\W|\d|_/g;
    const parts = fullName
      .split(" ")
      .find((part) => part.length <= 1 || part.match(regExp));

    if (parts) {
      setIsFullNameValid(false);
      return;
    }
    dispatch(parkingActions.setFullNameAction(fullName));
  };

  const handlePhoneEnter = (number: string): void => {
    setIsPnoneValid(true);
    setPhone(number);
  };
  const handlePhoneValidator = () => {
    if (phone === "") return;
    const regExp = /^\+?3?8?(0\d{9})$/g;
    if (!phone.match(regExp)) {
      setIsPnoneValid(false);
      return;
    }
    dispatch(parkingActions.setPhoneAction(phone));
  };

  const handleEmailEnter = (mail: string): void => {
    setEmailValid(true);
    setEmail(mail);
  };
  const handleEmailValidator = () => {
    if (email === "") return;
    const regExp = /\S+@\S+\.\S+/g;
    if (!email.match(regExp)) {
      setEmailValid(false);
      return;
    }
    dispatch(parkingActions.setEmailAction(email));
  };

  return (
    <div className="parking-form__credentials">
      <div>Your credentials</div>
      <div className="row-wrapper">
        <label htmlFor="fullName">Full name</label>
        <div>
          <input
            type="text"
            name=""
            id="fullName"
            placeholder="John Wick"
            onChange={(e) => handleFullNameEnter(e.target.value)}
            onBlur={handleFullNameValidator}
          />
          {!isFullNameValid && (
            <span className="alert-text">Strange full name, sorry</span>
          )}
        </div>
      </div>
      <div className="row-wrapper">
        <label htmlFor="phone">Contact phone number</label>
        <div>
          <input
            type="number"
            name=""
            id="phone"
            placeholder="+380"
            onChange={(e) => handlePhoneEnter(e.target.value)}
            onBlur={handlePhoneValidator}
          />
          {!isPnoneValid && (
            <span className="alert-text">Phone is not valid</span>
          )}
        </div>
      </div>
      <div className="row-wrapper">
        <label htmlFor="email">E-mail</label>
        <div>
          <input
            type="email"
            name=""
            id="email"
            placeholder="yourName@example.net"
            onChange={(e) => handleEmailEnter(e.target.value)}
            onBlur={handleEmailValidator}
          />
          {!isEmailValid && (
            <span className="alert-text">E-mail is not valid</span>
          )}
        </div>
      </div>
      <div className="row-wrapper">
        <label htmlFor="info" className="checkbox">
          <input
            type="checkbox"
            name=""
            id="info"
            className="checkbox__input"
          />
          <span className="checkbox__decor"></span>
          <span className="checkbox__text">
            I agree to have my personal information collected and used by the
            company and third parties.
          </span>
        </label>
      </div>
      <div className="row-wrapper">
        <label htmlFor="terms" className="checkbox">
          <input
            type="checkbox"
            name=""
            id="terms"
            className="checkbox__input"
          />
          <span className="checkbox__decor"></span>
          <span className="checkbox__text">
            I have read and agree to the terms of service.
          </span>
        </label>
      </div>
    </div>
  );
};

export default CredentialsInput;
