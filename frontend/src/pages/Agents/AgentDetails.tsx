import React from 'react';
import { Layout, Typography, Form, Input, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from 'pages/Products/Products.module.css';
import SideBar from 'components/SideBar/SideBar'
import { gql, useMutation } from '@apollo/client';

const ADD_AGENT = gql`
    mutation AddAgents($name: String!, $phoneNumber: String!, $email: String!, $customerId: Int!) {
        createAgent(name: $name, phoneNumber: $phoneNumber, email: $email, customerId: $customerId) {
        name
        phoneNumber
        email
        Customer{
            market
        }
    }
}
`;

const { Title } = Typography;
const { Content } = Layout;


const CollectionCreateForm = ({onCreate}:any) => {
  const [form] = Form.useForm();
  const [createAgents] = useMutation(ADD_AGENT);

  const onFinish=(e: any) => {
    e.preventDefault();
    form
      .validateFields()
      .then(values => {
        onCreate(values);

        createAgents({ variables: { 
          name: values.name,
          phoneNumber: values.phoneNumber,
          email: values.email,
          customerId: values.customerId
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
        name="add_product_form"
        initialValues={{
          modifier: 'public',
        }}
        onFinish={onFinish}
      >
              
        <Form.Item
          name="name"
          label="Name: "
          rules={[{ required: true, message: "Please input the agent's name" }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Agent Name" type="text"/>
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
          name="customerId"
          label="Location: "
        >
          <Input  placeholder="Location" type="text"/>
        </Form.Item>

        <Form.Item>
            <Button type="primary" href='/agents' onClick={ onFinish } >
                Submit
            </Button>
        </Form.Item>
      </Form>
  );
};


function NewAgent() {

  const [form] = Form.useForm();

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };


  return(
    <SideBar>
      <div className={styles.Agents}>
        <Content>
          <Layout>
            <div >
              <Space align="baseline">
                <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} size='small'>

                  <Form.Item name="navtitle"  >
                    <Title level={2} type="secondary" className={styles.spaceAlign}>Add New Agent</Title>
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


export default NewAgent;
