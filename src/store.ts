import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { flightsReducer } from "./flights/redux/flights.reducer";
import { parkingReducer } from "./parking/redux/parking.reducer";
import { mainReducer } from "./mainPage/redux/main.reducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  flightsList: flightsReducer,
  parking: parkingReducer,
  main: mainReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
