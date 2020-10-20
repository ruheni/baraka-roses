import { useQuery } from "@apollo/client";
import { Button, Space, Table, Typography } from "antd";
import { GetCustomers } from "api/Customers";
import Dashboard from "components/Dashboard/Dashboard";
import styles from "pages/Customers/Customers.module.css";
import React from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Location",
    dataIndex: "market",
    key: "location",
  },
  {
    title: "Edit",
    key: "edit",
    render: (text: any, record: { id: React.ReactNode }) => (
      <Space size="middle">
        <Link to={`/customers/${record.id}`}>edit</Link>
      </Space>
    ),
  },
];

function Customers() {
  const { loading, error, data } = useQuery(GetCustomers);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Dashboard>
      <div>
        <Space align="baseline">
          <Title level={2} type="secondary" className={styles.spaceAlign}>
            Customers
          </Title>
          <Link to="customers/new">
            <Button type="primary" danger size="large">
              + Add New Customer
            </Button>
          </Link>
        </Space>
        <div className={styles.Table}>
          <Table columns={columns} dataSource={data.customers} />
        </div>
      </div>
    </Dashboard>
  );
}

export default Customers;
