import { LOAD_TENANTS, SELECT_TENANT, CHECKOUT } from "../types";
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
    case SELECT_TENANT:
      return {
        ...state,
        selectedTenant: action.payload,
      };
    case CHECKOUT:
      return {
        ...state,
        tenants: state.tenants.filter(
          (tenant) => tenant._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default TenantReducer;
