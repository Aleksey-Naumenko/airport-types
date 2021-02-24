import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";

// styles
import "./registration.scss";

// actions
import {
  setRegisteredAction,
  setUserEmailAction,
} from "../mainPage/redux/main.actions";

type ValidationParamsT = {
  minLength?: number;
  isEmpty: boolean;
  isEmailValid?: boolean;
};

const useValidator = (value: string, validations: ValidationParamsT) => {
  const [isEmpty, setEmpty] = useState<boolean>(true);
  const [minLenghtError, setMinLenghtError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [isInputValid, setInputValid] = useState<boolean>(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          if (value.length < Number(validations[validation])) {
            setMinLenghtError(true);
          } else {
            setMinLenghtError(false);
          }
          break;
        case "isEmpty":
          if (value) {
            setEmpty(false);
          } else {
            setEmpty(true);
          }
          break;
        case "isEmailValid":
          const res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          res.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLenghtError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLenghtError, emailError]);

  return {
    isEmpty,
    minLenghtError,
    emailError,
    isInputValid,
  };
};

const useInput = (incomingData: string, validations: ValidationParamsT) => {
  const [value, setValue] = useState<string>(incomingData);
  const [isValid, setValid] = useState<boolean>(false);
  const valid = useValidator(value, validations);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setValid(true);
  };

  return {
    value,
    isValid,
    onChange,
    onBlur,
    ...valid,
  };
};

const Register = () => {
  const email = useInput("", {
    isEmpty: true,
    isEmailValid: false,
  });
  const password = useInput("", {
    minLength: 8,
    isEmpty: true,
  });
  const dispatch = useDispatch();

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setUserEmailAction(email.value));
    dispatch(setRegisteredAction(true));
    localStorage.setItem("isAuthed", "true");
    localStorage.setItem("email", email.value);
  };
  return (
    <div className="form-wrapper">
      <form className="register-form">
        <h1 className="register-form__title">Registration</h1>
        <div className="register-form__label">
          <span>Enter your email</span>
          <span style={{ color: "red" }}>
            {email.isEmpty && email.isValid && "Field cant be empty"}
          </span>
          <span style={{ color: "red" }}>
            {!email.isEmpty && email.emailError && "This email is not valid"}
          </span>
        </div>
        <input
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          value={email.value}
          name="email"
          type="text"
          className="register-form__input"
        />
        <div className="register-form__label">
          <span>Enter your password</span>
          <span style={{ color: "red" }}>
            {password.isEmpty && password.isValid && "Field cant be empty"}
          </span>
          <span style={{ color: "red" }}>
            {!password.isEmpty && password.minLenghtError && "Incorrect length"}
          </span>
        </div>
        <input
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          value={password.value}
          name="password"
          type="text"
          className="register-form__input"
        />
        <button
          disabled={!email.isInputValid || !password.isInputValid}
          onClick={(e) => submitHandler(e)}
          className="register-form__btn default-btn"
          type="submit"
        >
          register
        </button>
      </form>
    </div>
  );
};

export default Register;
