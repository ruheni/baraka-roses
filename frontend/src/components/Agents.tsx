import React, { useState, useEffect }  from 'react';
import { Layout, Typography, Form, Input, Table, Space } from 'antd';
import styles from 'components/Agents.module.css';
import SideBar from 'components/SideBar';
 
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
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    key: 'edit',
    
  },
];

const data = [
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
];

function Agents () {
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
    <div className={styles.Agents}>
      <Content>
        <Layout>
        <div >
          <Space align="baseline">
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} size='small'>

              <Form.Item name="navtitle"  >
                <Title level={2} type="secondary" className={styles.spaceAlign}>Agents</Title> 
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


export default Agents;
