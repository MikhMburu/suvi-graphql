import { combineReducers } from "redux";
// Import Reducers
import TenantReducer from "./Tenants";
import UserReducer from "./Users";
import MeterReadingReducer from "./MeterReadings";
// Import types
import { LOADING, SIGN_IN, SIGN_OUT } from "../types";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
};

const mainReducer = (state = initialState, action) => {
  switch (action.state) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: {},
      };
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
