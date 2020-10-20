import { gql } from "@apollo/client";

const GetProducts = gql`
  query GetProducts {
    products {
      id
      color
      quantity
      grade
      variety
    }
  }
`;

const ProductDetails = gql`
  query productDetails($id: Int!) {
    productDetails(id: $id) {
      id
      color
      quantity
      grade
      variety
    }
  }
`;

const AddProducts = gql`
  mutation AddProducts(
    $color: Color!
    $quantity: Int!
    $grade: Grade!
    $variety: String!
    $length: Int!
  ) {
    createProduct(
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
    }
  }
`;

const UpdateProducts = gql`
  mutation UpdateProducts(
    $id: Int!
    $color: Color!
    $quantity: Int!
    $grade: Grade!
    $variety: String!
    $length: Int!
  ) {
    updateProduct(
      id: $id
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
    }
  }
`;

export { GetProducts, ProductDetails, AddProducts, UpdateProducts };
