import { UserOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Select, Space, Typography } from "antd";
import { UpdateAgents, AgentCustomer } from "api/Agents";
import Dashboard from "components/Dashboard/Dashboard";
import "index.css";
import React from "react";
import { useParams } from "react-router-dom";
const { Option } = Select;
const { Title } = Typography;

function Agentedit() {
  const [form] = Form.useForm();
  const { id }: any = useParams();
  const { data } = useQuery(AgentCustomer, {
    variables: { id: parseInt(id) },
  });

  form.setFieldsValue(data?.agentProfile);
  const [editAgents] = useMutation(UpdateAgents);

  const onCreate = () => {
    form
      .validateFields()
      .then((values) => {
        onFinish(values);
        let { customerId, id } = values;

        values.customerId = parseInt(customerId);
        values.id = parseInt(id)

        editAgents({
          variables: {
            id: values.id,
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
    <Dashboard>
      <div>
        <Space align="baseline">
          <Title level={2} type="secondary" className="spaceAlign">
            Edit Agent
          </Title>
        </Space>

        <div className="Table">
          <Form form={form} layout="horizontal" name="add_agent_form">

          <Form.Item name="id" label="Agent ID: ">
              <Input placeholder="Agent ID" type="number" />
            </Form.Item>

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

            <Form.Item name="customerId" label="Customer ID: "
                rules={[
                    { required: true, message: "Please input the agent's name" },
                ]}>
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
    </Dashboard>
  );
}

export default Agentedit;
