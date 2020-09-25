import React from 'react';
import { Layout, Typography, Form, Input, Table, Space, Button } from 'antd';
import styles from 'pages/Agents/Agents.module.css';
import SideBar from 'components/SideBar/SideBar';
import { useQuery, gql } from '@apollo/client';

const GetAgents = gql`
  query getAgents{
    agents{
      name
      phoneNumber
      email
      id
    }
}
`

const { Title } = Typography;
const { Content } = Layout;
const { Search } = Input;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a href="/agents">{text}</a>,
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
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
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


function Agents() {

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  const { loading, error, data } = useQuery(GetAgents);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
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
                    <Search placeholder="Search.." size="large" onSearch={value => console.log(value)} style={{ width: 250 }} className={styles.spaceAlign} />
                  </Form.Item>
                  <Form.Item name="addAgents" >
                    <Button
                      type="primary" danger
                      size='large'
                      href="/newAgent"
                    >
                      + Add New Agent
                    </Button>
                    
                  </Form.Item>

                </Form>
              </Space>
            </div>
          </Layout>

          <Content className={styles.Table}>
            <Table columns={columns} dataSource={data.agents} />
          </Content>
        </Content>
      </div>
    </SideBar>
  )
}


export default Agents;
