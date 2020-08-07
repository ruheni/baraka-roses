import React, { useState, useEffect }  from 'react';
import { Layout, Typography, Form, Input, Table, Tag, Space } from 'antd';
import styles from 'components/Products.module.css';
import SideBar from 'components/SideBar'
 
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a href="/home">{text}</a>,
  },
  {
    title: 'Colour',
    dataIndex: 'colour',
    key: 'colour',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Grade',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'graded') {
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
    title: 'Variety',
    dataIndex: 'variety',
    key: 'variety',
  },
  {
    title: 'Edit',
    key: 'edit',
    render: (text: any) => (
      <Space size="middle">
        <a href="/home">edit</a>
      </Space>
    ),
  },
];

const data = [
  {
    name: 'Mando the Warrior',
    colour: 'yellow',
    quantity: 50,
    grade: 'graded',
    tags: ['graded'],
    variety: 'roses',
    edit: 'edit'
  },
  {
    name: 'Mando the Warrior',
    colour: 'yellow',
    quantity: 50,
    grade: 'graded',
    tags: ['graded'],
    variety: 'roses',
    edit: 'edit'
  },
  {
    name: 'Mando the Warrior',
    colour: 'yellow',
    quantity: 50,
    grade: 'ungraded',
    tags: ['ungraded'],
    variety: 'roses',
    edit: 'edit'
  },
  {
    name: 'Mando the Warrior',
    colour: 'yellow',
    quantity: 50,
    grade: 'graded',
    tags: ['graded'],
    variety: 'roses',
    edit: 'edit'
  }
];

function Products() {
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
    <SideBar>
    <div className={styles.Products}>
      <Content>
        <Layout>
        <div >
          <Space align="baseline">
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} size='small'>

              <Form.Item name="navtitle"  >
                <Title level={2} type="secondary" className={styles.spaceAlign}>Products</Title> 
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
  </SideBar>
  )
}


export default Products;
