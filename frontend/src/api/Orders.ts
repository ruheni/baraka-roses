import { gql } from "@apollo/client";

const GetOrders = gql`
  query getOrders {
    orders {
      id
      Customer {
        name
      }
      orderedProducts {
        product {
          variety
        }
      }
      status
      orderedProducts {
        product {
          grade
          color
        }
      }
    }
  }
`;

const AddOrders = gql`
  mutation AddOrder($customerId: Int!, $productIds: [Int!], $date: String!) {
    createAgent(
      color: $color
      quantity: $quantity
      grade: $grade
      variety: $variety
      length: $length
    ) {
      id
      color
      quantity
      grade
      variety
      length
      createdAt
    }
  }
`;

export { AddOrders, GetOrders };
