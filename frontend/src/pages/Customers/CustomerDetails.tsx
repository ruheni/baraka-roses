import { UserOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Typography } from "antd";
import { AddCustomer, CustomerDetails } from "api/Customers";
import Dashboard from "components/Dashboard/Dashboard";
import styles from "pages/Customers/Customers.module.css";
import React from "react";
import { useParams } from "react-router-dom";

const { Title } = Typography;

function Customerdetails() {
  const [form] = Form.useForm();
  const { id }: any = useParams();
  const { data } = useQuery(CustomerDetails, {
    variables: { id: parseInt(id) },
  });

  form.setFieldsValue(data?.customerProfile);
  const [createCustomers] = useMutation(AddCustomer);

  const onCreate = () => {
    form
      .validateFields()
      .then((values) => {
        onFinish(values);
        createCustomers({
          variables: {
            name: values.name,
            phoneNumber: values.phoneNumber,
            email: values.email,
            market: values.market,
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
      <div className={styles.Customers}>
        <Title level={2} type="secondary" className={styles.spaceAlign}>
          Add New Customer
        </Title>

        <div className={styles.Table}>
          <Form form={form} layout="horizontal" name="add_customer_form">
            <Form.Item
              name="name"
              label="Name: "
              rules={[
                { required: true, message: "Please input the customer's name" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Customer's Name"
                type="text"
              />
            </Form.Item>

            <Form.Item name="phoneNumber" label="Phone Number: ">
              <Input placeholder="Phone Number" type="number" />
            </Form.Item>

            <Form.Item name="email" label="Email Address: ">
              <Input placeholder="Email Address" type="email" />
            </Form.Item>

            <Form.Item name="market" label="Location: ">
              <Input placeholder="Location" type="text" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={onCreate}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Dashboard>
  );
}

export default Customerdetails;
