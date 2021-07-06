import { gql } from "@apollo/client";

export const LOAD_FULL_TENANTS_GQL = gql`
  query {
    getAllActiveTenants {
      _id
      user {
        first_name
        other_names
        national_id
        phone
        email
        next_of_kin {
          name
          relation
          phone
        }
      }
      rent
      checkin
      hseno
      meter_readings {
        date
        reading
      }
    }
  }
`;

export const LOAD_TENANTS_CONSUMPTION_GQL = gql`
  query {
    getAllActiveTenants {
      user {
        first_name
        other_names
      }
      hseno
      current_mreading {
        reading
      }
      prev_mreading {
        reading
      }
      meter_readings {
        date
        reading
      }
    }
  }
`;

export const LOAD_TENANTS_FOR_READING_GQL = gql`
  query {
    getAllActiveTenants {
      _id
      hseno
    }
  }
`;

export const LOAD_HOUSES_GQL = gql`
  query {
    getAllHouses {
      hseno
      kplc_no
      occupied
      occupants {
        _id
        user {
          first_name
          other_names
        }
        status
        checkin
        checkout
      }
    }
  }
`;
