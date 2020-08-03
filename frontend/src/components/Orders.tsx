import React, { useState, useEffect }  from 'react';
import { Layout, Typography, Form, Input, Table, Tag, Space } from 'antd';
import styles from 'components/Orders.module.css';
 
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

const data = [
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
                    <Search placeholder="Search" onSearch={value => console.log(value)} style={{ width: 200 }} className={styles.spaceAlign}/>
              </Form.Item>
              <Form.Item name="addOrder" >
                  <a href="/home"><Title level={4} type="danger" className={styles.spaceAlign}>+ Add New Order</Title></a>
              </Form.Item>
              
            </Form>
          </Space>
        </div>
        </Layout>

        <Content  className={styles.Table}>
          <Table columns={columns} dataSource={data} />
        </Content>
      </Content>
  </div>
  )
}


export default Orders;
