import { setFlightList } from "./flights/redux/flights.actions";
import * as ParkingActionsCreators from "./parking/redux/parking.actions";
import * as MainActionsCreators from "./mainPage/redux/main.actions";
import { rootReducer } from "./store";

// root state
export type RootState = ReturnType<typeof rootReducer>;

//actions
function inferLiteral<U, T extends U>(arg: T): T {
  return arg;
}
export function literalActions<T extends string>(arg: T): T {
  return inferLiteral<string, T>(arg);
}
type InferValues<T> = T extends { [key: string]: infer U } ? U : never;
// export type FlightsActionsTypes = ReturnType<InferValues<typeof setFlightList>>;
export type ParkingActionsTypes = ReturnType<
  InferValues<typeof ParkingActionsCreators>
>;

export type MainActionsTypes = ReturnType<
  InferValues<typeof MainActionsCreators>
>;

//reducer
// export type TSetFlightList = ReturnType<typeof FlightActionCreators>;
// export type TDispatch = React.Dispatch<>;
