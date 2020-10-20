import { useQuery } from "@apollo/client";
import { Button, Space, Table, Tag, Typography } from "antd";
import { GetOrders } from "api/Orders";
import Dashboard from "components/Dashboard/Dashboard";
import styles from "pages/Orders/Orders.module.css";
import React from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;

const columns = [
  {
    title: "Order ID",
    dataIndex: "orderid",
    key: "orderid",
    render: (text: any) => <a href="/home">{text}</a>,
  },
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "approved") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text: any) => (
      <Space size="middle">
        <a href="/home">More-Info</a>
      </Space>
    ),
  },
];

function Orders() {
  const { loading, error, data } = useQuery(GetOrders);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Dashboard>
      <div>
        <Space align="baseline">
          <Title level={2} type="secondary" className={styles.spaceAlign}>
            Orders
          </Title>

          <Link to="orders/new">
            <Button type="primary" danger size="large">
              + Add New Order
            </Button>
          </Link>
        </Space>

        <div className={styles.Table}>
          <Table columns={columns} dataSource={data.orders} />
        </div>
      </div>
    </Dashboard>
  );
}

export default Orders;
