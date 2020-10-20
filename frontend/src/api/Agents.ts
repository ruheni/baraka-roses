import { gql } from "@apollo/client";

const GetAgents = gql`
  query getAgents {
    agents {
      name
      phoneNumber
      email
      id
    }
  }
`;

const AgentDetails = gql`
  query AgentDetails($id: Int!) {
    agentProfile(id: $id) {
      name
      phoneNumber
      email
      id
    }
  }
`;

const AgentCustomer = gql`
  query agentcustomer($id: Int!) {
    agentProfile(id: $id) {
      id
      name
      phoneNumber
      email
    }
    customers {
      name
      phoneNumber
      email
      market
      id
    }
  }
`;

const AddAgents = gql`
  mutation AddAgents(
    $name: String!
    $phoneNumber: String!
    $email: String!
    $customerId: Int!
  ) {
    createAgent(
      name: $name
      phoneNumber: $phoneNumber
      email: $email
      customerId: $customerId
    ) {
      name
      phoneNumber
      email
      Customer {
        id
      }
    }
  }
`;

const UpdateAgents = gql`
  mutation UpdateAgents(
    $id: Int!
    $name: String!
    $phoneNumber: String!
    $email: String!
    $customerId: Int!
  ) {
    updateAgent(
      id: $id
      name: $name
      phoneNumber: $phoneNumber
      email: $email
      customerId: $customerId
    ) {
      id 
      name
      phoneNumber
      email
      Customer {
        id
      }
    }
  }
`;

export { GetAgents, AgentDetails, AgentCustomer, AddAgents, UpdateAgents };
