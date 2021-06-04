const initialState = {
  prevMeterReadings: [],
  currentMeterReadings: [],
  consumption: [],
  occupiedHouses: [],
};

const MeterReadingReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default MeterReadingReducer;
