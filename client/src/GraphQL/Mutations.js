import { gql } from "@apollo/client";

export const CREATE_TENANT_GQL = gql`
  mutation createUserTenant(
    $first_name: String
    $other_names: String
    $national_id: String
    $hseno: Int
    $checkin: String
    $rent: Int
    $email: [String]
    $phone: [String]
    $nok_name: String
    $nok_email: String
    $nok_phone: String
  ) {
    createUserTenant(
      user: {
        first_name: $first_name
        other_names: $other_names
        national_id: $national_id
        email: $email
        phone: $phone
        next_of_kin: { name: $nok_name, email: $nok_email, phone: $nok_phone }
      }
      hseno: $hseno
      checkin: $checkin
      rent: $rent
    ) {
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
    $username: String
    $password: String
    $email: [String]
    $phone: [String]
    $nok_name: String
    $nok_email: String
    $nok_phone: String
  ) {
    createUser(
      first_name: $first_name
      other_names: $other_names
      national_id: $national_id
      email: $email
      phone: $phone
      username: $username
      password: $password
      next_of_kin: { name: $nok_name, email: $nok_email, phone: $nok_phone }
    ) {
      first_name
      other_names
      national_id
    }
  }
`;

export const READ_METERS_GQL = gql`
  input Readings {
    tenant: String!
    date: String!
    reading: Float
  }

  mutation addReadingsBulk($readings: [Readings]) {
    addReadingsBulk(readings: $readings) {
      readings: tenant
      reading
    }
  }
`;
