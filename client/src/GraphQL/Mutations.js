import { gql } from "@apollo/client";

export const CREATE_TENANT_GQL = gql`
  mutation createUserTenant(
    $first_name: String!
    $other_names: String!
    $national_id: String!
    $hseno: Int!
    $checkin: String
    $rent: Int!
    $email: [String]
    $phone: [String]
    $nok_name: String
    $nok_relation: String
    $nok_phone: String
  ) {
    createUserTenant(
      user: {
        first_name: $first_name
        other_names: $other_names
        national_id: $national_id
        email: $email
        phone: $phone
        next_of_kin: {
          name: $nok_name
          relation: $nok_relation
          phone: $nok_phone
        }
      }
      hseno: $hseno
      checkin: $checkin
      rent: $rent
    ) {
      _id
      hseno
      rent
    }
  }
`;

export const CREATE_USER_GQL = gql`
  mutation createUser(
    $first_name: String
    $other_names: String
    $national_id: String
    $designation: String
    $username: String
    $password: String
    $email: [String]
    $phone: [String]
    $nok_name: String
    $nok_relation: String
    $nok_phone: String
  ) {
    createUser(
      first_name: $first_name
      other_names: $other_names
      national_id: $national_id
      designation: $designation
      email: $email
      phone: $phone
      username: $username
      password: $password
      next_of_kin: {
        name: $nok_name
        relation: $nok_relation
        phone: $nok_phone
      }
    ) {
      _id
      first_name
      other_names
      national_id
    }
  }
`;

export const CHECKOUT_TENANT = gql`
  mutation checkoutTenant($_id: String) {
    checkoutTenant(_id: $_id) {
      user {
        first_name
        other_names
        national_id
      }
      checkin
      checkout
    }
  }
`;

export const ADD_HOUSE_GQL = gql`
  mutation addHouse($hseno: Int, $kplc_no: String, $occupied: Boolean) {
    addHouse(hseno: $hseno, kplc_no: $kplc_no, occupied: $occupied) {
      hseno
      kplc_no
    }
  }
`;

export const BULK_READINGS_GQL = gql`
  mutation addReadingsBulk($readings: [Reading]) {
    addReadingsBulk(readings: $readings) {
      reading
    }
  }
`;
