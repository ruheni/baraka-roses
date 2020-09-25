import React from 'react';
import { Layout, Typography, Form, Input, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from 'pages/Customers/Customers.module.css';
import SideBar from 'components/SideBar/SideBar'
import { gql, useMutation } from '@apollo/client';

const ADD_CUSTOMER = gql`
mutation Addcustomer(
  $name: String!,
  $contactName: String!,
  $market: String!,
  $email: String!,
  $phoneNumber: String!,
  $agentIds: [Int!]
) {
  createCustomer(
    name: $name,
    contactName: $contactName,
    market: $market,
    phoneNumber: $phoneNumber,
    email: $email,
    agentIds: $agentIds
  ) {
    name
    market
    phoneNumber
    email
  }
}
`;

const { Title } = Typography;
const { Content } = Layout;


const CollectionCreateForm = ({onCreate}:any) => {
  const [form] = Form.useForm();
  const [createCustomers] = useMutation(ADD_CUSTOMER);

  const onFinish=(e: any) => {
    e.preventDefault();

    form
      .validateFields()
      .then(values => {
        onCreate(values);

        createCustomers({ variables: { 
          name: values.name,
          market: values.market,
          phoneNumber: values.phoneNumber,
          email: values.email
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
      name="name"
      label="Name: "
      rules={[{ required: true, message: "Please input the customer's name" }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Customer's Name" type="text"/>
    </Form.Item>
    
    <Form.Item
      name="email"
      label="Email Address: "
    >
      <Input placeholder="Email Address" type="email"/>
    </Form.Item>

    <Form.Item
      name="phoneNumber"
      label="Phone Number: "
    >
      <Input placeholder="Phone Number" type="number"/>
    </Form.Item>

    <Form.Item
      name="location"
      label="Location: "
    >
      <Input  placeholder="Location" type="text"/>
    </Form.Item>
    
        <Form.Item>
            <Button type="primary" href='/products' onClick={ onFinish } >
                Submit
            </Button>
        </Form.Item>
      </Form>
  );
};


function NewCustomer() {

  const [form] = Form.useForm();

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };


  return(
    <SideBar>
    <div className={styles.Customers}>
      <Content>
        <Layout>
        <div >
          <Space align="baseline">
          <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} size='small'>

            <Form.Item name="navtitle"  >
                <Title level={2} type="secondary" className={styles.spaceAlign}>Add New Customer</Title> 
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


export default NewCustomer;
