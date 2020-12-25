import { UserOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Button, Form, Input, Space, Typography } from "antd";
import { AddOrders } from "api/Orders";
import Dashboard from "components/Dashboard/Dashboard";
import "index.css";
import React from "react";

const { Title } = Typography;

function Orderdetails() {
  const [form] = Form.useForm();
  const [createOrders] = useMutation(AddOrders);

  const onCreate = () => {
    form
      .validateFields()
      .then((values) => {
        onFinish(values);

        const {id} = values
        id.values = parseInt(id)

        createOrders({
          variables: {
            id: values.id,
            name: values.name,
            color: values.color,
            grade: values.grade,
            status: values.status,
            variety: values.variety,
          },
        });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Dashboard>
      <div>
        <Space align="baseline">
          <Title level={2} type="secondary" className="spaceAlign">
            Add New Order
          </Title>
        </Space>

        <div className="Table">
          <Form form={form} layout="horizontal" name="add_orders_form">
            <Form.Item
              name="customer"
              label="Customer: "
              rules={[
                { required: true, message: "Please input the customer's name" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Agent Name"
                type="text"
              />
            </Form.Item>

            <Form.Item
              name="product"
              label="Products: "
              rules={[
                { required: true, message: "Please input the product name" },
              ]}
            >
              <Input placeholder="Product Name" type="text" />
            </Form.Item>

            <Form.Item
              name="entryDate"
              label="Date: "
              rules={[{ required: true, message: "Please input the date" }]}
            >
              <Input placeholder="Date of Entry" type="date" />
            </Form.Item>

            <Form.Item
              name="quantity"
              label="Quantity: "
              rules={[{ required: true, message: "Please input the quantity" }]}
            >
              <Input placeholder="Quantity" type="number" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={onCreate}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Dashboard>
  );
}

export default Orderdetails;
