// interfaces
import { IState } from "../../interfaces";
// Types
// import { FlightsActionsTypes } from "../../types";

export const defaultState: IState = {
  flightsData: [],
};

export const flightsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "SET_FLIGHTS_LIST":
      return {
        ...state,
        flightsData: action.payload.flightsData,
      };
    default:
      return state;
  }
};
