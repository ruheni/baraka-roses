import React, { useState }  from 'react';
import { Layout, Typography, Form, Input, Table, Tag, Space, Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from 'pages/Orders/Orders.module.css';
import SideBar from 'components/SideBar/SideBar';
import { useQuery, gql } from '@apollo/client';

const getOrders = gql`
query getOrders{
  orders{
    id
    Customer{
      name
    }
    orderedProducts{
      product{
        variety
      }
    }
    status
    orderedProducts{
      product{
        grade
        color
      }
    }
  }
}
`
const { Title } = Typography;
const { Content } = Layout;
const {Search} = Input

 
const columns = [
  {
    title: 'Order ID',
    dataIndex: 'orderid',
    key: 'orderid',
    render: (text: any) => <a href="/home">{text}</a>,
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'approved') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any) => (
      <Space size="middle">
        <a href="/home">More-Info</a>
      </Space>
    ),
  },
];

/*const data = [
  {
    orderid: '12564763',
    customer: 'Joe',
    product: 'Tulips',
    status: 'Approved',
    tags: ['approved'],
  },
  {
    orderid: '15668756',
    customer: 'Peach',
    product: 'Roses',
    status: 'Denied',
    tags: ['denied'],
  },
  {
    orderid: '435353',
    customer: 'Deadpool',
    product: 'cabbage',
    status: 'Approved',
    tags: ['approved'],
  },
  {
    orderid: '12564763',
    customer: 'Joe',
    product: 'Tulips',
    status: 'Approved',
    tags: ['approved'],
  }
]*/

const CollectionCreateForm = ({ visible, onCreate, onCancel }: any) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create New Order"
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
      </Form>
    </Modal>
  );
};


function Orders () {

  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };
  

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  const { loading, error, data } = useQuery(getOrders);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return(
    <SideBar>
    <div className={styles.Orders}>
      <Content>
        <Layout>
        <div >
          <Space align="baseline">
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} size='small'>

              <Form.Item name="navtitle"  >
                <Title level={2} type="secondary" className={styles.spaceAlign}>Orders</Title> 
              </Form.Item>

              <Form.Item >
                    <Search placeholder="Search" size="large" onSearch={value => console.log(value)} style={{ width: 250 }} className={styles.spaceAlign}/>
              </Form.Item>
              <Form.Item name="addOrder" >
                <Button
                      type="primary" danger
                      size='large'
                      onClick={() => {
                        setVisible(true);
                      }}
                    >
                      + Add New Order
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

        <Content  className={styles.Table}>
          <Table columns={columns} dataSource={data.orders} />
        </Content>
      </Content>
  </div>
  </SideBar>
  )
}


export default Orders;
