import { UserOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Select, Space, Typography } from "antd";
import { AddAgents, AgentCustomer } from "api/Agents";
import SideBar from "components/SideBar/SideBar";
import styles from "pages/Products/Products.module.css";
import React from "react";
import { useParams } from "react-router-dom";
const { Option } = Select;
const { Title } = Typography;

function Agentdetails() {
  const [form] = Form.useForm();
  const { id }: any = useParams();
  const { data } = useQuery(AgentCustomer, {
    variables: { id: parseInt(id) },
  });

  form.setFieldsValue(data?.agentProfile);
  const [createAgents] = useMutation(AddAgents);

  const onCreate = () => {
    form
      .validateFields()
      .then((values) => {
        onFinish(values);
        let { customerId } = values;

        values.customerId = parseInt(customerId);

        createAgents({
          variables: {
            name: values.name,
            phoneNumber: values.phoneNumber,
            email: values.email,
            customerId: values.customerId,
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
    <SideBar>
      <div className={styles.Agents}>
        <Space align="baseline">
          <Title level={2} type="secondary" className={styles.spaceAlign}>
            Add New Agent
          </Title>
        </Space>

        <div className={styles.Table}>
          <Form form={form} layout="horizontal" name="add_agent_form">
            <Form.Item
              name="name"
              label="Name: "
              rules={[
                { required: true, message: "Please input the agent's name" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Agent Name"
                type="text"
              />
            </Form.Item>

            <Form.Item name="email" label="Email Address: ">
              <Input placeholder="Email Address" type="email" />
            </Form.Item>

            <Form.Item name="phoneNumber" label="Phone Number: ">
              <Input placeholder="Phone Number" type="number" />
            </Form.Item>

            <Form.Item name="customerId" label="Customer ID: ">
              <Select placeholder="Customer ID">
                {data?.customers.map(({id, name}: any) => (
                  <Option key={id} value={id}>
                    {name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={onCreate}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </SideBar>
  );
}

export default Agentdetails;
