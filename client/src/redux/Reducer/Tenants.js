import { LOAD_TENANTS } from "../types";
const initialState = {
  tenants: [],
  selectedTenant: null,
};

const TenantReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TENANTS:
      return {
        ...state,
        tenants: action.payload,
      };
    default:
      return state;
  }
};
export default TenantReducer;
