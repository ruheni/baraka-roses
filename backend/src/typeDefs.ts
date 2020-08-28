import { gql } from 'apollo-server-express'

export default gql`
  type Agent {
    createdAt: DateTime!
    Customer: Customer
    email: String!
    id: Int!
    name: String!
    phoneNumber: String!
  }

  input AgentFilter {
    every: AgentWhereInput
    none: AgentWhereInput
    some: AgentWhereInput
  }

  input AgentOrderByInput {
    createdAt: OrderByArg
    customerId: OrderByArg
    email: OrderByArg
    id: OrderByArg
    name: OrderByArg
    phoneNumber: OrderByArg
  }

  input AgentWhereInput {
    AND: [AgentWhereInput!]
    createdAt: DateTimeFilter
    Customer: CustomerWhereInput
    customerId: NullableIntFilter
    email: StringFilter
    id: IntFilter
    name: StringFilter
    NOT: [AgentWhereInput!]
    OR: [AgentWhereInput!]
    phoneNumber: StringFilter
  }

  input AgentWhereUniqueInput {
    email: String
    id: Int
  }

  type AuthPayload {
    token: String
    User: User
  }

  """
  Flower colors
  """
  enum Color {
    BI_COLOUR
    CERISE
    LILAC
    ORANGE
    PEACH
    PINK
    RED
    WHITE
    YELLOW
  }

  type Customer {
    agents(
      after: AgentWhereUniqueInput
      before: AgentWhereUniqueInput
      first: Int
      last: Int
      orderBy: AgentOrderByInput
      where: AgentWhereInput
    ): [Agent!]!
    contactName: String!
    createdAt: DateTime!
    email: String!
    id: Int!
    market: String!
    name: String!
    orders(orderBy: OrderOrderByInput, where: OrderWhereInput): [Order!]!
    phoneNumber: String!
  }

  input CustomerWhereInput {
    agents: AgentFilter
    AND: [CustomerWhereInput!]
    contactName: StringFilter
    createdAt: DateTimeFilter
    email: StringFilter
    id: IntFilter
    market: StringFilter
    name: StringFilter
    NOT: [CustomerWhereInput!]
    OR: [CustomerWhereInput!]
    orders: OrderFilter
    phoneNumber: StringFilter
  }

  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
  date - time format outlined in section 5.6 of the RFC 3339 profile of the ISO
  8601 standard for representation of dates and times using the Gregorian calendar.
  """
  scalar DateTime

  input DateTimeFilter {
    equals: DateTime
    gt: DateTime
    gte: DateTime
    in: [DateTime!]
    lt: DateTime
    lte: DateTime
    not: DateTime
    notIn: [DateTime!]
  }

  """
  Flower grades
  """
  enum Grade {
    GRADED
    UNGRADED
  }

  input IntFilter {
    equals: Int
    gt: Int
    gte: Int
    in: [Int!]
    lt: Int
    lte: Int
    not: Int
    notIn: [Int!]
  }

  scalar Json

  type Mutation {
    createAgent(
      customerId: Int!
      email: String!
      name: String!
      phoneNumber: String!
    ): Agent
    createCustomer(
      agentId: Int!
      contactName: String!
      email: String!
      market: String!
      name: String!
      phoneNumber: String!
    ): Customer!
    createOrder(customerId: Int!, date: String!, productIds: [Int!]!): Order
    createProduct(
      color: Color!
      grade: Grade!
      length: Int!
      quantity: Int!
      variety: String!
    ): Product
    login(email: String!, password: String!): AuthPayload
    signup(
      email: String!
      firstName: String!
      lastName: String!
      password: String!
      role: Role!
    ): AuthPayload
    updateAgent(
      email: String!
      id: Int!
      name: String!
      phoneNumber: String!
    ): Agent!
    updateCustomer(
      contactName: String!
      email: String!
      id: Int!
      market: String!
      name: String!
      phoneNumber: String!
    ): Customer!
    updateOrder(
      finalQuantity: Int!
      id: Int!
      productIds: Int
      status: OrderStatus!
    ): Order
    updateProduct(
      color: Color!
      grade: Grade!
      id: Int!
      length: Int!
      quantity: Int!
      variety: String!
    ): Product
    updateUser(
      email: String!
      firstName: String!
      id: Int!
      lastName: String!
      password: String!
      role: Role!
    ): User
  }

  input NullableIntFilter {
    equals: Int
    gt: Int
    gte: Int
    in: [Int!]
    lt: Int
    lte: Int
    not: Int
    notIn: [Int!]
  }

  type Order {
    createdAt: DateTime!
    Customer: Customer
    date: DateTime!
    id: Int!
    orderedProducts(
      after: OrderedProductWhereUniqueInput
      before: OrderedProductWhereUniqueInput
      first: Int
      last: Int
    ): [OrderedProduct!]!
    status: OrderStatus!
  }

  enum OrderByArg {
    asc
    desc
  }

  type OrderedProduct {
    finalQuantity: Int!
    id: Int!
    initialQuantity: Int!
    product: Product!
  }

  input OrderedProductFilter {
    every: OrderedProductWhereInput
    none: OrderedProductWhereInput
    some: OrderedProductWhereInput
  }

  input OrderedProductWhereInput {
    AND: [OrderedProductWhereInput!]
    finalQuantity: IntFilter
    id: IntFilter
    initialQuantity: IntFilter
    NOT: [OrderedProductWhereInput!]
    OR: [OrderedProductWhereInput!]
    Order: OrderWhereInput
    orderId: NullableIntFilter
    product: ProductWhereInput
    productId: IntFilter
  }

  input OrderedProductWhereUniqueInput {
    id: Int
  }

  input OrderFilter {
    every: OrderWhereInput
    none: OrderWhereInput
    some: OrderWhereInput
  }

  input OrderOrderByInput {
    createdAt: OrderByArg
    customerId: OrderByArg
    date: OrderByArg
    id: OrderByArg
    status: OrderByArg
  }

  """
  Order statuses
  """
  enum OrderStatus {
    CANCELLED
    PENDING
    REVIEWED
  }

  input OrderWhereInput {
    AND: [OrderWhereInput!]
    createdAt: DateTimeFilter
    Customer: CustomerWhereInput
    customerId: NullableIntFilter
    date: DateTimeFilter
    id: IntFilter
    NOT: [OrderWhereInput!]
    OR: [OrderWhereInput!]
    orderedProducts: OrderedProductFilter
    Product: ProductFilter
    status: OrderStatus
  }

  type Product {
    color: Color!
    createdAt: DateTime!
    grade: Grade!
    id: Int!
    length: Int!
    quantity: Int!
    variety: String!
  }

  input ProductFilter {
    every: ProductWhereInput
    none: ProductWhereInput
    some: ProductWhereInput
  }

  input ProductWhereInput {
    AND: [ProductWhereInput!]
    color: Color
    createdAt: DateTimeFilter
    grade: Grade
    id: IntFilter
    length: IntFilter
    NOT: [ProductWhereInput!]
    OR: [ProductWhereInput!]
    Order: OrderWhereInput
    OrderedProduct: OrderedProductFilter
    orderId: NullableIntFilter
    quantity: IntFilter
    variety: StringFilter
  }

  type Query {
    agentProfile(id: Int!): Agent
    agents: [Agent!]!
    customerProfile(id: Int!): Customer
    customers: [Customer!]!
    findOrdersByStatus(status: OrderStatus!): [Order!]
    orderDetails(id: Int!): Order
    orders: [Order!]!
    productDetails(id: Int!): Product
    products: [Product!]!
    userProfile(email: String!): User
    users: [User!]!
  }

  """
  These are the different roles supported on the platform
  """
  enum Role {
    ADMIN
    GENERAL_MANAGER
    SALES_EXEC
    STOCK_CLERK
  }

  input StringFilter {
    contains: String
    endsWith: String
    equals: String
    gt: String
    gte: String
    in: [String!]
    lt: String
    lte: String
    not: String
    notIn: [String!]
    startsWith: String
  }

  type User {
    createdAt: DateTime!
    email: String!
    firstName: String!
    id: Int!
    lastName: String!
    password: String!
    role: Role!
  }
`
