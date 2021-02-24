import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

// datePicker
import "react-day-picker/lib/style.css";
import { DateUtils } from "react-day-picker";
// components
import Calendar from "../Calendar";
// styles
import "../parking.scss";
// interfaces
import { TSchedule } from "../../interfaces";
// actions
import { setParkingPriceAction } from "../redux/parking.actions";

const DateInput = () => {
  const priceForOneDay = 390;
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<TSchedule>({
    from: undefined,
    to: undefined,
  });
  const [isDateValid, setIsDateValid] = useState<boolean>(true);
  const [alertText, setAlertText] = useState<String>("Date is not Valid");
  const currentDate = new Date().toLocaleDateString();
  const dateInput = useRef<HTMLInputElement>();
  const dispatch = useDispatch();

  const handleDatePicker = (day?: Date): void => {
    const range = DateUtils.addDayToRange(day, dateRange);
    setDateRange(range);
    const { from, to } = range;
    if (to) {
      const differenceInMilisec = to.getTime() - from.getTime();
      const totalDays = Math.ceil(differenceInMilisec / (1000 * 3600 * 24) + 1);
      const totalPrice = totalDays * priceForOneDay;
      dispatch(setParkingPriceAction(totalPrice));
    }
  };

  const handleResetDatePicker = (): void => {
    setDateRange({
      from: undefined,
      to: undefined,
    } as TSchedule);
    dispatch(setParkingPriceAction(priceForOneDay));
  };

  const showCalendarHandler = (): void => {
    if (isPickerVisible) {
      setIsPickerVisible(false);
      dateValidatorHandler(dateRange);
    } else {
      setIsPickerVisible(true);
      setIsDateValid(true);
    }
  };

  const dateValidatorHandler = ({ from, to }: TSchedule): void => {
    if (!from) return;
    const currentDate = new Date().getDate();
    if (!to) {
      setIsDateValid(false);
      setAlertText("Choose date to");
      return;
    }

    const toDate = to.getDate();
    if (currentDate > toDate) {
      setIsDateValid(false);
      setAlertText("Date can't be from the past");
    }
  };

  useEffect(() => {
    const dataStringFrom = dateRange.from?.toLocaleDateString();
    const dataStringTo = dateRange.to?.toLocaleDateString();
    !dataStringFrom && !dataStringTo
      ? (dateInput.current.value = currentDate)
      : dataStringFrom && !dataStringTo
      ? (dateInput.current.value = `${dataStringFrom} - choose departure date`)
      : dataStringFrom && dataStringTo
      ? (dateInput.current.value = `${dataStringFrom} - ${dataStringTo}`)
      : null;
  }, [dateRange]);

  return (
    <div className="parking-form__schedule parking-form-schedule row-wrapper">
      <div className="parking-form-schedule__arrival">
        <label htmlFor="">Arrival & Departure</label>
        <div>
          <input
            type="text"
            ref={dateInput}
            readOnly={true}
            className="shedule-input"
            placeholder={currentDate}
            onClick={showCalendarHandler}
          />
          {!isDateValid && <span className="alert-text">{alertText}</span>}
          <div></div>
          <div>
            {isPickerVisible && (
              <Calendar
                handleDatePicker={handleDatePicker}
                handleResetDatePicker={handleResetDatePicker}
                dateRange={dateRange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateInput;
