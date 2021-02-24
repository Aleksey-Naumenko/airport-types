// interfaces
import { IParkingState } from "../../interfaces";
// Types
import { ParkingActionsTypes } from "../../types";

export const parkingState: IParkingState = {
  dateRange: undefined,
  carPlates: "",
  fullName: "",
  email: "",
  phone: "",
  price: 390,
};

export const parkingReducer = (
  state = parkingState,
  action: ParkingActionsTypes
) => {
  switch (action.type) {
    case "SET_FULLNAME":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload.email,
      };
    case "SET_PHONE":
      return {
        ...state,
        phone: action.payload.phone,
      };
    case "SET_CAR_PLATES":
      return {
        ...state,
        carPlates: action.payload.carPlates,
      };
    case "SET_DATE_RANGE":
      return {
        ...state,
        dateRange: action.payload.dateRange,
      };
    case "SET_PARKING_PRICE":
      return {
        ...state,
        price: action.payload.price,
      };
    default:
      return state;
  }
};
