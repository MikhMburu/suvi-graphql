import {
  SET_OCCUPIED_HOUSES,
  LOAD_PREV_READINGS,
  LOAD_CONSUMPTION,
} from "../types";
const initialState = {
  prevMeterReadings: [],
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
    case LOAD_PREV_READINGS:
      return {
        ...state,
        prevMeterReadings: action.payload,
      };
    case LOAD_CONSUMPTION:
      return {
        ...state,
        consumption: action.payload,
      };
    default:
      return state;
  }
};

export default MeterReadingReducer;
