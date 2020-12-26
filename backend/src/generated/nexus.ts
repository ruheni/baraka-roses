/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../context"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AgentListRelationFilter: { // input type
    every?: NexusGenInputs['AgentWhereInput'] | null; // AgentWhereInput
    none?: NexusGenInputs['AgentWhereInput'] | null; // AgentWhereInput
    some?: NexusGenInputs['AgentWhereInput'] | null; // AgentWhereInput
  }
  AgentWhereInput: { // input type
    AND?: NexusGenInputs['AgentWhereInput'][] | null; // [AgentWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    customer?: NexusGenInputs['CustomerWhereInput'] | null; // CustomerWhereInput
    customerId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['AgentWhereInput'][] | null; // [AgentWhereInput!]
    OR?: NexusGenInputs['AgentWhereInput'][] | null; // [AgentWhereInput!]
    phoneNumber?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  AgentWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
  CustomerWhereInput: { // input type
    agents?: NexusGenInputs['AgentListRelationFilter'] | null; // AgentListRelationFilter
    AND?: NexusGenInputs['CustomerWhereInput'][] | null; // [CustomerWhereInput!]
    contactName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    market?: NexusGenInputs['StringFilter'] | null; // StringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['CustomerWhereInput'][] | null; // [CustomerWhereInput!]
    OR?: NexusGenInputs['CustomerWhereInput'][] | null; // [CustomerWhereInput!]
    orders?: NexusGenInputs['OrderListRelationFilter'] | null; // OrderListRelationFilter
    phoneNumber?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  EnumColorFilter: { // input type
    equals?: NexusGenEnums['Color'] | null; // Color
    in?: NexusGenEnums['Color'][] | null; // [Color!]
    not?: NexusGenInputs['NestedEnumColorFilter'] | null; // NestedEnumColorFilter
    notIn?: NexusGenEnums['Color'][] | null; // [Color!]
  }
  EnumGradeFilter: { // input type
    equals?: NexusGenEnums['Grade'] | null; // Grade
    in?: NexusGenEnums['Grade'][] | null; // [Grade!]
    not?: NexusGenInputs['NestedEnumGradeFilter'] | null; // NestedEnumGradeFilter
    notIn?: NexusGenEnums['Grade'][] | null; // [Grade!]
  }
  EnumOrderStatusFilter: { // input type
    equals?: NexusGenEnums['OrderStatus'] | null; // OrderStatus
    in?: NexusGenEnums['OrderStatus'][] | null; // [OrderStatus!]
    not?: NexusGenInputs['NestedEnumOrderStatusFilter'] | null; // NestedEnumOrderStatusFilter
    notIn?: NexusGenEnums['OrderStatus'][] | null; // [OrderStatus!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  IntNullableFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null; // NestedIntNullableFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedEnumColorFilter: { // input type
    equals?: NexusGenEnums['Color'] | null; // Color
    in?: NexusGenEnums['Color'][] | null; // [Color!]
    not?: NexusGenInputs['NestedEnumColorFilter'] | null; // NestedEnumColorFilter
    notIn?: NexusGenEnums['Color'][] | null; // [Color!]
  }
  NestedEnumGradeFilter: { // input type
    equals?: NexusGenEnums['Grade'] | null; // Grade
    in?: NexusGenEnums['Grade'][] | null; // [Grade!]
    not?: NexusGenInputs['NestedEnumGradeFilter'] | null; // NestedEnumGradeFilter
    notIn?: NexusGenEnums['Grade'][] | null; // [Grade!]
  }
  NestedEnumOrderStatusFilter: { // input type
    equals?: NexusGenEnums['OrderStatus'] | null; // OrderStatus
    in?: NexusGenEnums['OrderStatus'][] | null; // [OrderStatus!]
    not?: NexusGenInputs['NestedEnumOrderStatusFilter'] | null; // NestedEnumOrderStatusFilter
    notIn?: NexusGenEnums['OrderStatus'][] | null; // [OrderStatus!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedIntNullableFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null; // NestedIntNullableFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  OrderListRelationFilter: { // input type
    every?: NexusGenInputs['OrderWhereInput'] | null; // OrderWhereInput
    none?: NexusGenInputs['OrderWhereInput'] | null; // OrderWhereInput
    some?: NexusGenInputs['OrderWhereInput'] | null; // OrderWhereInput
  }
  OrderOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    customerId?: NexusGenEnums['SortOrder'] | null; // SortOrder
    date?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    status?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  OrderWhereInput: { // input type
    AND?: NexusGenInputs['OrderWhereInput'][] | null; // [OrderWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    customer?: NexusGenInputs['CustomerWhereInput'] | null; // CustomerWhereInput
    customerId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    date?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['OrderWhereInput'][] | null; // [OrderWhereInput!]
    OR?: NexusGenInputs['OrderWhereInput'][] | null; // [OrderWhereInput!]
    orderedProducts?: NexusGenInputs['OrderedProductListRelationFilter'] | null; // OrderedProductListRelationFilter
    product?: NexusGenInputs['ProductListRelationFilter'] | null; // ProductListRelationFilter
    status?: NexusGenInputs['EnumOrderStatusFilter'] | null; // EnumOrderStatusFilter
  }
  OrderedProductListRelationFilter: { // input type
    every?: NexusGenInputs['OrderedProductWhereInput'] | null; // OrderedProductWhereInput
    none?: NexusGenInputs['OrderedProductWhereInput'] | null; // OrderedProductWhereInput
    some?: NexusGenInputs['OrderedProductWhereInput'] | null; // OrderedProductWhereInput
  }
  OrderedProductWhereInput: { // input type
    AND?: NexusGenInputs['OrderedProductWhereInput'][] | null; // [OrderedProductWhereInput!]
    finalQuantity?: NexusGenInputs['IntFilter'] | null; // IntFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    initialQuantity?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['OrderedProductWhereInput'][] | null; // [OrderedProductWhereInput!]
    OR?: NexusGenInputs['OrderedProductWhereInput'][] | null; // [OrderedProductWhereInput!]
    order?: NexusGenInputs['OrderWhereInput'] | null; // OrderWhereInput
    orderId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    product?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    productId?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  OrderedProductWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ProductListRelationFilter: { // input type
    every?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    none?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    some?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
  }
  ProductWhereInput: { // input type
    AND?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    color?: NexusGenInputs['EnumColorFilter'] | null; // EnumColorFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    grade?: NexusGenInputs['EnumGradeFilter'] | null; // EnumGradeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    length?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    OR?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    order?: NexusGenInputs['OrderWhereInput'] | null; // OrderWhereInput
    orderedProducts?: NexusGenInputs['OrderedProductListRelationFilter'] | null; // OrderedProductListRelationFilter
    orderId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    quantity?: NexusGenInputs['IntFilter'] | null; // IntFilter
    variety?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
}

export interface NexusGenEnums {
  Color: "BI_COLOUR" | "CERISE" | "LILAC" | "ORANGE" | "PEACH" | "PINK" | "RED" | "WHITE" | "YELLOW"
  Grade: "GRADED" | "UNGRADED"
  OrderStatus: "CANCELLED" | "PENDING" | "REVIEWED"
  QueryMode: "default" | "insensitive"
  Role: "ADMIN" | "GENERAL_MANAGER" | "SALES_EXEC" | "STOCK_CLERK"
  SortOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Agent: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    phoneNumber: string; // String!
  }
  AuthPayload: { // root type
    token?: string | null; // String
    User?: NexusGenRootTypes['User'] | null; // User
  }
  Customer: { // root type
    contactName: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: number; // Int!
    market: string; // String!
    name: string; // String!
    phoneNumber: string; // String!
  }
  Mutation: {};
  Order: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    date: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    status: NexusGenEnums['OrderStatus']; // OrderStatus!
  }
  OrderedProduct: { // root type
    finalQuantity: number; // Int!
    id: number; // Int!
    initialQuantity: number; // Int!
  }
  Product: { // root type
    color: NexusGenEnums['Color']; // Color!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    grade: NexusGenEnums['Grade']; // Grade!
    id: number; // Int!
    length: number; // Int!
    quantity: number; // Int!
    variety: string; // String!
  }
  Query: {};
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    firstName: string; // String!
    id: number; // Int!
    lastName: string; // String!
    password: string; // String!
    role: NexusGenEnums['Role']; // Role!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Agent: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    customer: NexusGenRootTypes['Customer'] | null; // Customer
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    phoneNumber: string; // String!
  }
  AuthPayload: { // field return type
    token: string | null; // String
    User: NexusGenRootTypes['User'] | null; // User
  }
  Customer: { // field return type
    agents: NexusGenRootTypes['Agent'][]; // [Agent!]!
    contactName: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: number; // Int!
    market: string; // String!
    name: string; // String!
    orders: NexusGenRootTypes['Order'][]; // [Order!]!
    phoneNumber: string; // String!
  }
  Mutation: { // field return type
    createAgent: NexusGenRootTypes['Agent'] | null; // Agent
    createCustomer: NexusGenRootTypes['Customer']; // Customer!
    createOrder: NexusGenRootTypes['Order'] | null; // Order
    createProduct: NexusGenRootTypes['Product'] | null; // Product
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updateAgent: NexusGenRootTypes['Agent']; // Agent!
    updateCustomer: NexusGenRootTypes['Customer']; // Customer!
    updateOrder: NexusGenRootTypes['Order'] | null; // Order
    updateProduct: NexusGenRootTypes['Product'] | null; // Product
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Order: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    customer: NexusGenRootTypes['Customer'] | null; // Customer
    date: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    orderedProducts: NexusGenRootTypes['OrderedProduct'][]; // [OrderedProduct!]!
    status: NexusGenEnums['OrderStatus']; // OrderStatus!
  }
  OrderedProduct: { // field return type
    finalQuantity: number; // Int!
    id: number; // Int!
    initialQuantity: number; // Int!
    product: NexusGenRootTypes['Product']; // Product!
  }
  Product: { // field return type
    color: NexusGenEnums['Color']; // Color!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    grade: NexusGenEnums['Grade']; // Grade!
    id: number; // Int!
    length: number; // Int!
    quantity: number; // Int!
    variety: string; // String!
  }
  Query: { // field return type
    agentProfile: NexusGenRootTypes['Agent'] | null; // Agent
    agents: Array<NexusGenRootTypes['Agent'] | null>; // [Agent]!
    customerProfile: NexusGenRootTypes['Customer'] | null; // Customer
    customers: Array<NexusGenRootTypes['Customer'] | null>; // [Customer]!
    findOrdersByStatus: Array<NexusGenRootTypes['Order'] | null> | null; // [Order]
    orderDetails: NexusGenRootTypes['Order'] | null; // Order
    orders: NexusGenRootTypes['Order'][] | null; // [Order!]
    productDetails: NexusGenRootTypes['Product'] | null; // Product
    products: Array<NexusGenRootTypes['Product'] | null>; // [Product]!
    userProfile: NexusGenRootTypes['User'] | null; // User
    users: Array<NexusGenRootTypes['User'] | null>; // [User]!
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    firstName: string; // String!
    id: number; // Int!
    lastName: string; // String!
    password: string; // String!
    role: NexusGenEnums['Role']; // Role!
  }
}

export interface NexusGenFieldTypeNames {
  Agent: { // field return type name
    createdAt: 'DateTime'
    customer: 'Customer'
    email: 'String'
    id: 'Int'
    name: 'String'
    phoneNumber: 'String'
  }
  AuthPayload: { // field return type name
    token: 'String'
    User: 'User'
  }
  Customer: { // field return type name
    agents: 'Agent'
    contactName: 'String'
    createdAt: 'DateTime'
    email: 'String'
    id: 'Int'
    market: 'String'
    name: 'String'
    orders: 'Order'
    phoneNumber: 'String'
  }
  Mutation: { // field return type name
    createAgent: 'Agent'
    createCustomer: 'Customer'
    createOrder: 'Order'
    createProduct: 'Product'
    login: 'AuthPayload'
    signup: 'AuthPayload'
    updateAgent: 'Agent'
    updateCustomer: 'Customer'
    updateOrder: 'Order'
    updateProduct: 'Product'
    updateUser: 'User'
  }
  Order: { // field return type name
    createdAt: 'DateTime'
    customer: 'Customer'
    date: 'DateTime'
    id: 'Int'
    orderedProducts: 'OrderedProduct'
    status: 'OrderStatus'
  }
  OrderedProduct: { // field return type name
    finalQuantity: 'Int'
    id: 'Int'
    initialQuantity: 'Int'
    product: 'Product'
  }
  Product: { // field return type name
    color: 'Color'
    createdAt: 'DateTime'
    grade: 'Grade'
    id: 'Int'
    length: 'Int'
    quantity: 'Int'
    variety: 'String'
  }
  Query: { // field return type name
    agentProfile: 'Agent'
    agents: 'Agent'
    customerProfile: 'Customer'
    customers: 'Customer'
    findOrdersByStatus: 'Order'
    orderDetails: 'Order'
    orders: 'Order'
    productDetails: 'Product'
    products: 'Product'
    userProfile: 'User'
    users: 'User'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    email: 'String'
    firstName: 'String'
    id: 'Int'
    lastName: 'String'
    password: 'String'
    role: 'Role'
  }
}

export interface NexusGenArgTypes {
  Customer: {
    agents: { // args
      after?: NexusGenInputs['AgentWhereUniqueInput'] | null; // AgentWhereUniqueInput
      before?: NexusGenInputs['AgentWhereUniqueInput'] | null; // AgentWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    orders: { // args
      orderBy?: NexusGenInputs['OrderOrderByInput'][] | null; // [OrderOrderByInput!]
      where?: NexusGenInputs['OrderWhereInput'] | null; // OrderWhereInput
    }
  }
  Mutation: {
    createAgent: { // args
      customerId: number; // Int!
      email: string; // String!
      name: string; // String!
      phoneNumber: string; // String!
    }
    createCustomer: { // args
      agentIds: Array<number | null>; // [Int]!
      contactName: string; // String!
      email: string; // String!
      market: string; // String!
      name: string; // String!
      phoneNumber: string; // String!
    }
    createOrder: { // args
      customerId: number; // Int!
      date: string; // String!
      productIds: Array<number | null>; // [Int]!
    }
    createProduct: { // args
      color: NexusGenEnums['Color']; // Color!
      grade: NexusGenEnums['Grade']; // Grade!
      length: number; // Int!
      quantity: number; // Int!
      variety: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      password: string; // String!
      role: NexusGenEnums['Role']; // Role!
    }
    updateAgent: { // args
      email: string; // String!
      id: number; // Int!
      name: string; // String!
      phoneNumber: string; // String!
    }
    updateCustomer: { // args
      contactName: string; // String!
      email: string; // String!
      id: number; // Int!
      market: string; // String!
      name: string; // String!
      phoneNumber: string; // String!
    }
    updateOrder: { // args
      finalQuantity?: number | null; // Int
      id: number; // Int!
      productIds?: Array<number | null> | null; // [Int]
      status: NexusGenEnums['OrderStatus']; // OrderStatus!
    }
    updateProduct: { // args
      color: NexusGenEnums['Color']; // Color!
      grade: NexusGenEnums['Grade']; // Grade!
      id: number; // Int!
      length: number; // Int!
      quantity: number; // Int!
      variety: string; // String!
    }
    updateUser: { // args
      email: string; // String!
      firstName: string; // String!
      id: number; // Int!
      lastName: string; // String!
      password: string; // String!
      role: NexusGenEnums['Role']; // Role!
    }
  }
  Order: {
    orderedProducts: { // args
      after?: NexusGenInputs['OrderedProductWhereUniqueInput'] | null; // OrderedProductWhereUniqueInput
      before?: NexusGenInputs['OrderedProductWhereUniqueInput'] | null; // OrderedProductWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Query: {
    agentProfile: { // args
      id: number; // Int!
    }
    customerProfile: { // args
      id: number; // Int!
    }
    findOrdersByStatus: { // args
      status: NexusGenEnums['OrderStatus']; // OrderStatus!
    }
    orderDetails: { // args
      id: number; // Int!
    }
    productDetails: { // args
      id: number; // Int!
    }
    userProfile: { // args
      email: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}