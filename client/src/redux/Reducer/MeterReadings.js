import {
  SET_OCCUPIED_HOUSES,
  LOAD_CONSUMPTION,
  CALL_CONSUMPTION,
  STOP_LOADING,
} from "../types";
const initialState = {
  callingConsumption: false,
  consumption: [],
  occupiedHouses: [],
};

const MeterReadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OCCUPIED_HOUSES:
      return {
        ...state,
        occupiedHouses: action.payload,
      };

    case CALL_CONSUMPTION:
      return {
        ...state,
        callingConsumption: true,
      };
    case LOAD_CONSUMPTION:
      return {
        ...state,
        consumption: action.payload,
      };
    case STOP_LOADING:
      return {
        ...state,
        callingConsumption: false,
      };
    default:
      return state;
  }
};

export default MeterReadingReducer;
