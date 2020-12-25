import { useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Space, Table, Typography } from "antd";
import { GetProducts } from "api/Products";
import Dashboard from "components/Dashboard/Dashboard";
import "index.css";
import React from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Colour",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Grade",
    dataIndex: "grade",
    key: "grade",
  },

  {
    title: "Variety",
    dataIndex: "variety",
    key: "variety",
  },
  {
    title: "Edit",
    key: "edit",
    render: (text: any, record: { id: React.ReactNode }) => (
      <Space size="middle">
        <Link to={`/products/${record.id}`}>edit</Link>
      </Space>
    ),
  },
];

function Products() {
  const { loading, error, data } = useQuery(GetProducts);
  const { isAuthenticated } = useAuth0()

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <Dashboard>
      <div>
        <Space align="baseline">
          <Title level={2} type="secondary" className="spaceAlign">
            Products
          </Title>

          <Link to="products/new">
            <Button type="primary" danger size="large">
              + Add New Products
            </Button>
          </Link>
        </Space>
        <div className="Table">
          <Table columns={columns} dataSource={data.products} />
        </div>
      </div>
    </Dashboard>
  );
}

export default Products;
