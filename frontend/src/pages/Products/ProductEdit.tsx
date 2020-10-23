import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Select, Typography } from "antd";
import { UpdateProducts, ProductDetails } from "api/Products";
import Dashboard from "components/Dashboard/Dashboard";
import "index.css";
import React from "react";
import { useParams } from "react-router-dom";

const { Option } = Select;
const { Title } = Typography;

function Productedit() {
  const [form] = Form.useForm();
  const { id }: any = useParams();
  const { data }: any = useQuery(ProductDetails, {
    variables: { id: parseInt(id) },
  });

  form.setFieldsValue(data?.productDetails);
  const [editProducts] = useMutation(UpdateProducts);

  const onCreate = () => {
    form
      .validateFields()
      .then((values) => {
        onFinish(values);
        let { quantity, length, id } = values;

        values.quantity = parseInt(quantity);
        values.length = parseInt(length)
        values.id = parseInt(id)

        editProducts({
          variables: {
            id: values.id,
            color: values.color,
            quantity: values.quantity,
            grade: values.grade,
            variety: values.variety,
            length: values.length,
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
        <Title level={2} type="secondary" className="spaceAlign">
          Edit Product
        </Title>

        <div className="Table">
          <Form form={form} layout="horizontal" name="add_product_form">
            <Form.Item name="color" label="Color: ">
              <Select placeholder="Color">
                <Option value="WHITE">White</Option>
                <Option value="LILAC">Lilac</Option>
                <Option value="PINK">Pink</Option>
                <Option value="CERISE">Cerise</Option>
                <Option value="RED">Red</Option>
                <Option value="ORANGE">Orange</Option>
                <Option value="YELLOW">Yellow</Option>
                <Option value="PEACH">Peach</Option>
                <Option value="BI_COLOUR">Bi-Colour</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="id"
              label="Product ID: "
               >
              <Input placeholder="Product ID" type="number" />
            </Form.Item>

            <Form.Item
              name="quantity"
              label="Quantity: "
              rules={[{ required: true, message: "Please input the quantity" }]}
            >
              <Input placeholder="Quantity" type="number" />
            </Form.Item>
            <Form.Item
              name="length"
              label="Length: "
              rules={[{ required: true, message: "Please input the length" }]}
            >
              <Input placeholder="Length" type="number" />
            </Form.Item>

            <Form.Item name="grade" label="Grade: ">
              <Select placeholder="Grade">
                <Option value="GRADED">Graded</Option>
                <Option value="UNGRADED">Ungraded</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="variety"
              label="variety: "
              rules={[
                { required: true, message: "Please input the product name" },
              ]}
            >
              <Input placeholder="Variety" type="text" />
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

export default Productedit;
