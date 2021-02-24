import { RootState } from "../../types";

export const allParkingDataSelector = (state: RootState): boolean => {
  const carPlates = state.parking.carPlates;
  const fullName = state.parking.fullName;
  const email = state.parking.email;
  const phone = state.parking.phone;
  // const dateRange = state.parking.dateRange;
  if (!carPlates || !fullName || !email || !phone) return false;
  return true;
};
