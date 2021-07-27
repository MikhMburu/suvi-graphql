import {
  SET_OCCUPIED_HOUSES,
  LOAD_CONSUMPTION,
  CALL_CONSUMPTION,
  STOP_LOADING,
  LOAD_MRENTRY,
} from "../types";
const initialState = {
  callingConsumption: false,
  consumption: [],
  selectedEntry: null,
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
    case LOAD_MRENTRY:
      return {
        ...state,
        selectedEntry: state.consumption.filter(
          (entry) => entry._id === action.payload
        )[0],
      };
    default:
      return state;
  }
};

export default MeterReadingReducer;
