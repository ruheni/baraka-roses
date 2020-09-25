import React from 'react';
import { Layout, Typography, Form, Input, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from 'pages/Orders/Orders.module.css';
import SideBar from 'components/SideBar/SideBar'
import { gql, useMutation } from '@apollo/client';

const ADD_ORDER = gql`
mutation AddOrder(
    $customerId: Int!, $productIds: [Int!], $date: String!) {
    createAgent(color: $color, quantity: $quantity,  grade: $grade, variety: $variety, length: $length) {
      id
      color
      quantity
      grade
      variety
      length
      createdAt
    }
}
`;

const { Title } = Typography;
const { Content } = Layout;


const CollectionCreateForm = ({onCreate}:any) => {
  const [form] = Form.useForm();
  const [createOrders] = useMutation(ADD_ORDER);

  const onFinish=(e: any) => {
    e.preventDefault();
    form
      .validateFields()
      .then(values => {
        onCreate(values);

        createOrders({ variables: { 
          color: values.color,
          grade: values.grade,
          length: values.length,
          variety: values.variety,
          quantity: values.quantity
         } });
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  }

  return (
    <Form
        form={form}
        layout="horizontal"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        
        <Form.Item
          name="customer"
          label="Customer: "
          rules={[{ required: true, message: "Please input the customer's name" }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Agent Name" type="text"/>
        </Form.Item>

        <Form.Item
          name="product"
          label="Products: "
          rules={[{required: true, message: 'Please input the product name'}]}
        >
          <Input placeholder="Product Name" type="text"/>
        </Form.Item>
        
        <Form.Item
          name="entryDate"
          label="Date: "
          rules={[{ required: true, message: 'Please input the date' }]}
        >
          <Input placeholder="Date of Entry" type="date"/>
        </Form.Item>

        <Form.Item
          name="quantity"
          label="Quantity: "
          rules={[{ required: true, message: 'Please input the quantity' }]}
        >
          <Input  placeholder="Quantity" type="number"/>
        </Form.Item>

        <Form.Item>
            <Button type="primary" href='/agents' onClick={ onFinish } >
                Submit
            </Button>
        </Form.Item>
      </Form>
  );
};


function NewOrder() {

  const [form] = Form.useForm();

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };


  return(
    <SideBar>
    <div className={styles.Orders}>
      <Content>
        <Layout>
        <div >
          <Space align="baseline">
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} size='small'>

              <Form.Item name="navtitle"  >
                <Title level={2} type="secondary" className={styles.spaceAlign}>Add New Order</Title> 
              </Form.Item>
              
            </Form>
          </Space>
        </div>
        </Layout>

        <Content className={styles.Table}>
            <CollectionCreateForm onCreate={onCreate}/>
        </Content>
      </Content>
  </div>
  </SideBar>
  )
}


export default NewOrder;
