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
    createOrder(
    customerId: $customerId
    productIds: $productIds
    date: $date
    ) {
    id
   	status
    Customer{
      name
    }
    orderedProducts
    }
  }
`;

const UpdateOrder = gql`
  mutation UpdateOrder($id: Int!, $finalQuantity: Int!, $status: OrderStatus!, $productIds: Int) {
  updateOrder(
    id: $id
    finalQuantity: $finalQuantity
    status: $status
    productIds: $productIds
  ) {
    id
   	status
    Customer{
      name
    }
    orderedProducts
  }
}`;

export { AddOrders, GetOrders, UpdateOrder };
