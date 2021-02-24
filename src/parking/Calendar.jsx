import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const Calendar = ({ handleDatePicker, handleResetDatePicker, dateRange }) => {
  const defaultProps = {
    numberOfMonths: 1,
  };
  const { from, to } = dateRange;
  const modifiers = { start: from, end: to };

  return (
    <div className="RangeExample">
      <p>
        {!from && !to && "Please select the first day."}
        {from && !to && "Please select the last day."}
        {from &&
          to &&
          `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{" "}
        {from && to && (
          <button className="link default-btn" onClick={handleResetDatePicker}>
            Reset
          </button>
        )}
      </p>
      <DayPicker
        className="Selectable"
        numberOfMonths={defaultProps.numberOfMonths}
        selectedDays={[from, { from, to }]}
        modifiers={modifiers}
        onDayClick={handleDatePicker}
      />
      <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
    </div>
  );
};

export default Calendar;
