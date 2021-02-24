import { literalActions } from "../../types";

export const setFullNameAction = (fullName: string) => {
  return {
    type: literalActions("SET_FULLNAME"),
    payload: {
      fullName,
    },
  };
};

export const setEmailAction = (email: string) => {
  return {
    type: literalActions("SET_EMAIL"),
    payload: {
      email,
    },
  };
};

export const setPhoneAction = (phone: string) => {
  return {
    type: literalActions("SET_PHONE"),
    payload: {
      phone,
    },
  };
};

export const setCarPlatesAction = (carPlates: string) => {
  return {
    type: literalActions("SET_CAR_PLATES"),
    payload: {
      carPlates,
    },
  };
};

export const setDateRangeAction = (dateRange: Date) => {
  return {
    type: literalActions("SET_DATE_RANGE"),
    payload: {
      dateRange,
    },
  };
};

export const setParkingPriceAction = (price: number) => {
  return {
    type: literalActions("SET_PARKING_PRICE"),
    payload: {
      price,
    },
  };
};
