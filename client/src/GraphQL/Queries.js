import { gql } from "@apollo/client";

export const LOAD_TENANTS_GQL = gql`
  query {
    getAllActiveTenants {
      user {
        first_name
        other_names
        national_id
      }
      rent
      checkin
      meter_readings {
        date
        reading
      }
    }
  }
`;
