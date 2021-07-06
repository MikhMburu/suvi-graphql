// Import types
import { LOAD_HOUSEDETAILS } from "../types";

// Create Initial state
const initialState = {
  isLoading: false,
  selectedHouse: null,
};
// Create reducer
const HouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOUSEDETAILS:
      return {
        ...state,
        selectedHouse: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default HouseReducer;
