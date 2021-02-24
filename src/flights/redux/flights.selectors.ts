import { createSelector } from "reselect";

// interfaces
import { RootState } from "../../types";

export const flightsDataSelector = (state: RootState) =>
  state.flightsList.flightsData;
export const departureListSelector = (state: RootState) =>
  state.flightsList.flightsData.departure;
export const arrivalListSelector = (state: RootState) =>
  state.flightsList.flightsData.arrival;

export const getDepartureListSelector = createSelector(
  [departureListSelector],
  (dataList) => {
    if (dataList) {
      return dataList
        .slice()
        .filter(
          (flight: any) =>
            new Date(flight.timeDepShedule).getDate() === new Date().getDate()
        )
        .map((flight: any) => {
          return {
            ...flight,
            shedule: flight.timeDepShedule,
            destination: flight["airportToID.name_en"],
            depArr: flight.timeTakeofFact,
          };
        });
    }
    return [];
  }
);

export const getArrivalListSelector = createSelector(
  [arrivalListSelector],
  (dataList) => {
    if (dataList) {
      return dataList
        .slice()
        .filter(
          (flight: any) =>
            new Date(flight.timeArrShedule).getDate() === new Date().getDate()
        )
        .map((flight: any) => {
          return {
            ...flight,
            shedule: flight.timeArrShedule,
            destination: flight["airportFromID.name_en"],
            depArr: flight.timeLandCalc,
          };
        })
        .sort((a: any, b: any) => a.shedule - b.shedule);
    }
    return [];
  }
);
