import React, { useState, useEffect }  from 'react';
//import { Form, FormGroup} from 'reactstrap';
import { Layout, Typography, Form, Input, Table, Tag, Space } from 'antd';
 
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
          if (tag === 'loser') {
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

const data = [
  {
    orderid: '1',
    customer: 'John Brown',
    product: 32,
    status: 'New York No. 1 Lake Park',
    tags: ['nice'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function Orders () {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  const { Title } = Typography;
  const { Content } = Layout;
  const {Search} = Input

  return(
    <div>
      <Content>
        <Layout>
         
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>

              <Form.Item name="navtitle">
                <Title level={3} type="secondary" >Orders</Title> 
              </Form.Item>

              <Form.Item>
                    <Search placeholder="Search" onSearch={value => console.log(value)} style={{ width: 200 }}/>
              </Form.Item>
              <Form.Item name="addOrder">
                  <a href="/home"><Title level={4} type="danger" >+ Add New Order</Title></a>
              </Form.Item>
              
            </Form>
        </Layout>

        <Content>
          <Table columns={columns} dataSource={data} />
        </Content>
      </Content>
  </div>
  )
}


export default Orders;
