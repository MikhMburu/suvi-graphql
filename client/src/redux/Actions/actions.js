// Import files and functions
import {
  LOADING,
  LOAD_TENANTS,
  SET_OCCUPIED_HOUSES,
  SELECT_TENANT,
  LOAD_CONSUMPTION,
  CALL_CONSUMPTION,
  STOP_LOADING,
  CHECKOUT,
  LOAD_HOUSEDETAILS,
  LOAD_MRENTRY,
} from "../types";

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

// Load a single tenant
export const loadATenant = (data) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_TENANT,
      payload: data,
    });
  };
};

// Load tenant consumption for the neter reading page
export const loadSummary = (data) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_CONSUMPTION,
      payload: data,
    });
  };
};

// Load a single entry of the summary from Meter Reading
export const loadMREntry = (id) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_MRENTRY,
      payload: id,
    });
  };
};

export const callConsumption = () => {
  return (dispatch) => {
    dispatch({
      type: CALL_CONSUMPTION,
    });
  };
};

export const stopLoadingConsumption = () => {
  return (dispatch) => {
    dispatch({
      type: STOP_LOADING,
    });
  };
};

export const checkoutTnt = (id) => {
  return (dispatch) => {
    dispatch({
      type: CHECKOUT,
      payload: id,
    });
  };
};

export const loadHouseDetails = (data) => (dispatch) => {
  return dispatch({
    type: LOAD_HOUSEDETAILS,
    payload: data,
  });
};
