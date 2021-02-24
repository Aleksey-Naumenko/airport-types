import { literalActions } from "../../types";

export const setThemeAction = (theme: string) => {
  return {
    type: literalActions("SET_THEME"),
    payload: {
      theme,
    },
  };
};

export const setRegisteredAction = (registered: boolean) => {
  return {
    type: literalActions("SET_REGISTERED"),
    payload: {
      registered,
    },
  };
};

export const setUserEmailAction = (userEmail: string) => {
  return {
    type: literalActions("SET_USEREMAIL"),
    payload: {
      userEmail,
    },
  };
};

// export const setDateRangeAction = (dateRange: Date) => {
//   return {
//     type: literalActions("SET_DATERANGE"),
//     payload: {
//       dateRange,
//     },
//   };
// };
