import React, { useState}  from 'react';
import { Layout, Typography, Form, Input, Table, Space, Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from 'components/Customers/Customers.module.css';
import SideBar from 'components/SideBar/SideBar';
import { useQuery, gql } from '@apollo/client';

const GetCustomers = gql`
  query getCustomers{
    customers{
      name
      phoneNumber
      email
      market
    }
}
` 
const { Title } = Typography;
const { Content } = Layout;
const {Search} = Input;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a href="/home">{text}</a>,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Location',
    dataIndex: 'market',
    key: 'location',
  },
  
];

/*const data = [
  {
    name: 'Dead Pool',
    phoneNumber: '+6021345689',
    email: 'marvel@hotmail.com',
    location: 'New York',
    edit: 'edit',
  },
  {
    name: 'Dead Pool',
    phoneNumber: '+6021345689',
    email: 'marvel@hotmail.com',
    location: 'New York',
    edit: 'edit',
  },
  {
    name: 'Dead Pool',
    phoneNumber: '+6021345689',
    email: 'marvel@hotmail.com',
    location: 'New York',
    edit: 'edit',
  },
  {
    name: 'Dead Pool',
    phoneNumber: '+6021345689',
    email: 'marvel@hotmail.com',
    location: 'New York',
    edit: 'edit',
  }
];*/

const CollectionCreateForm = ({ visible, onCreate, onCancel }: any) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create New Customer"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
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
      </Form>
    </Modal>
  );
};

function Customers (props:any) {
  const [visible, setVisible] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  const { loading, error, data } = useQuery(GetCustomers);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return(
    <SideBar>
    <div className={styles.Customers}>
      <Content>
        <Layout>
        <div >
          <Space align="baseline">
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} size='small'>

              <Form.Item name="navtitle"  >
                <Title level={2} type="secondary" className={styles.spaceAlign}>Customers</Title> 
              </Form.Item>

              <Form.Item >
                    <Search placeholder="Search" size="large" onSearch={value => console.log(value)} style={{ width: 250 }} className={styles.spaceAlign}/>
              </Form.Item>
              <Form.Item name="addCustomer" >
                    <Button
                      type="primary" danger
                      size='large'
                      onClick={() => {
                        setVisible(true);
                      }}
                    >
                      + Add New Customer
                    </Button>

                    <CollectionCreateForm
                      visible={visible}
                      onCreate={onCreate}
                      onCancel={() => {
                        setVisible(false);
                      }}
                    />
              </Form.Item>
              
            </Form>
          </Space>
        </div>
        </Layout>

        <Content className={styles.Table}>
          <Table columns={columns} dataSource={data.customers} />
        </Content>
      </Content>
  </div>
  </SideBar>
  )
}


export default Customers;
