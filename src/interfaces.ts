// dispatch
import { Action, AnyAction } from "redux";
export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T;
}

// main interfaces
export interface IMainState {
  theme: string;
  registered: boolean;
  userEmail: string;
}

// flights interfaces
export interface IflightsData {
  arrival: Array<IFlight>;
  departure: Array<IFlight>;
}

export interface IFlight {
  ID: number;
  fltNo: string;
  airline: IAirline;
  shedule: string;
  destination: string;
  status: string;
  depArr: string;
  term: string;
  [key: string]: any;
}

interface IAirline {
  en: IAirlineObj;
  ru: IAirlineObj;
  ua: IAirlineObj;
}

interface IAirlineObj {
  [key: string]: string;
}

export interface IState {
  flightsData: Array<IFlight>;
}

// parking interfaces
export interface TSchedule {
  from: undefined | Date;
  to: undefined | Date;
}

export interface IParkingState {
  dateRange: TSchedule;
  carPlates: string;
  fullName: string;
  email: string;
  phone: string;
  price: number;
}
