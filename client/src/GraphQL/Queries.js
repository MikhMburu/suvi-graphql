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
      _id
      user {
        first_name
        other_names
        email
        phone
      }
      hseno
      current_mreading {
        reading
      }
      prev_mreading {
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

export const LOAD_ONE_TENANT = gql`
  query getOneTenant($_id: String!) {
    getOneTenant(_id: $_id) {
      _id
      user {
        first_name
        other_names
        national_id
        phone
        email
        next_of_kin {
          name
          phone
          relation
        }
      }
      rent
      hseno
      checkin
      checkout
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
          phone
          email
        }
        status
        checkin
        checkout
      }
    }
  }
`;

export const LOAD_USERS_GQL = gql`
  query {
    getAllUsers {
      _id
      first_name
      other_names
      national_id
      designation
    }
  }
`;

export const GET_ALL_INVOICES_GQL = gql`
  query allInvoices {
    getInvoices {
      inv_date
      bills {
        _id
        tenant
        hseno
        current_mreading
        prev_mreading
        consumption
        litres_consumed
        amount_owed
        bal_bf
        other_charges
      }
    }
  }
`;

export const SELECT_INVOICE_BYID_GQL = gql`
  query getOneInvoice($_id: String) {
    getOneInvoice(_id: $_id) {
      inv_date
      bills {
        _id
        tenant
        hseno
        current_mreading
        prev_mreading
        consumption
        litres_consumed
        bal_bf
        other_charges
        amount_owed
      }
    }
  }
`;
export const SELECT_INVOICE_BYDATE_GQL = gql`
  query getOneInvoice($date: String) {
    getOneInvoice(inv_date: $date) {
      inv_date
      bills {
        _id
        tenant
        hseno
        current_mreading
        prev_mreading
        consumption
        amount_owed
        litres_consumed
        bal_bf
        other_charges
      }
    }
  }
`;
