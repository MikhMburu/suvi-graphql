import { combineReducers } from "redux";
// Import Reducers
import TenantReducer from "./Tenants";
import UserReducer from "./Users";
import MeterReadingReducer from "./MeterReadings";

const initialState = {
  isLoggedIn: true,
  loading: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.state) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  main: mainReducer,
  user: UserReducer,
  tenant: TenantReducer,
  readings: MeterReadingReducer,
});

export default rootReducer;
