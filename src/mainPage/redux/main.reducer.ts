// interfaces
import { IMainState } from "../../interfaces";
// Types
import { MainActionsTypes } from "../../types";

export const mainState: IMainState = {
  theme: "light",
  registered: false,
  userEmail: "",
};

export const mainReducer = (state = mainState, action: MainActionsTypes) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload.theme,
      };
    case "SET_REGISTERED":
      return {
        ...state,
        registered: action.payload.registered,
      };
    case "SET_USEREMAIL":
      return {
        ...state,
        userEmail: action.payload.userEmail,
      };
    default:
      return state;
  }
};
