import { gql } from "@apollo/client";

const GetCustomers = gql`
  query getCustomers {
    customers {
      id
      name
      phoneNumber
      email
      market
    }
  }
`;

const CustomerDetails = gql`
  query CustomerDetails($id: Int!) {
    customerProfile(id: $id) {
      id
      name
      phoneNumber
      email
      market
    }
  }
`;

const AddCustomer = gql`
  mutation AddCustomer(
    $name: String!
    $contactName: String!
    $market: String!
    $email: String!
    $phoneNumber: String!
  ) {
    createCustomer(
      name: $name
      email: $email
      phoneNumber: $phoneNumber
      contactName: $contactName
      market: $market
    ) {
      name
      phoneNumber
      email
      market
    }
  }
`;

export { GetCustomers, CustomerDetails, AddCustomer };
