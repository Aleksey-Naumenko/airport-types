import { fetchFlightsData } from "./flightsGateway";
import moment from "moment";

// interfaces
import { Dispatch, IflightsData } from "../../interfaces";

// types
// import { literalActions } from "../../types";

export const setFlightList = (flightsData: IflightsData) => {
  return {
    type: "SET_FLIGHTS_LIST",
    payload: {
      flightsData,
    },
  };
};

export const getFlightList = () => {
  const date = new Date();
  const newDate = moment(date).format("DD-MM-YYYY");
  return (dispatch: Dispatch) => {
    fetchFlightsData(newDate).then((flightsData) =>
      dispatch(setFlightList(flightsData.body))
    );
  };
};
