import { useQuery } from "@apollo/client";
import { Button, Space, Table, Typography } from "antd";
import SideBar from "components/SideBar/SideBar";
import styles from "pages/Products/Products.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { GetProducts } from "api/Products";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <SideBar>
      <div className={styles.Products}>
        <Space align="baseline">
          <Title level={2} type="secondary" className={styles.spaceAlign}>
            Products
          </Title>

          <Link to="products/new">
            <Button type="primary" danger size="large">
              + Add New Products
            </Button>
          </Link>
        </Space>
        <div className={styles.Table}>
          <Table columns={columns} dataSource={data.products} />
        </div>
      </div>
    </SideBar>
  );
}

export default Products;
