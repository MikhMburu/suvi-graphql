// Import files and functions
import { LOADING, LOAD_TENANTS, SET_OCCUPIED_HOUSES } from "../types";

// Define actions
// Data loading?
export const loadingData = () => {
  return (dispatch) => {
    dispatch({
      type: LOADING,
    });
  };
};
// Load Houses that are occupied for meter reading
export const loadOccupiedHouses = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_OCCUPIED_HOUSES,
      payload: data,
    });
  };
};
// Load tenants in the tenants page
export const loadTenants = (data) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_TENANTS,
      payload: data,
    });
  };
};
