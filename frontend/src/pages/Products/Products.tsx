import React from 'react';
import { Layout, Typography, Form, Input, Table, Space, Button} from 'antd';
import styles from 'pages/Products/Products.module.css';
import SideBar from 'components/SideBar/SideBar'
import { useQuery, gql} from '@apollo/client';

const GetProducts = gql`
  query GetProducts{
    products{
      id
      color
      quantity
      grade
      variety
    }
  }
`;


const { Title } = Typography;
const { Content } = Layout;
const { Search } = Input

const columns = [
  {
    title: 'Name',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Colour',
    dataIndex: 'color',
    key: 'color',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    key: 'grade',
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
        <a href="/new">edit</a>
      </Space>
    ),
  },
];


function Products() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  const { loading, error, data } = useQuery(GetProducts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

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
                    <Search placeholder="Search" size="large" onSearch={value => console.log(value)} style={{ width: 250 }} className={styles.spaceAlign}/>
              </Form.Item>
              <Form.Item name="addProduct" >
                    <Button
                      type="primary" danger
                      size='large'
                      href="/newProduct"
                    >
                      + Add New Products
                    </Button>

              </Form.Item>
            </Form>
          </Space>
        </div>
        </Layout>

        <Content  className={styles.Table}>
          <Table columns={columns} dataSource={data.products} />
        </Content>
      </Content>
  </div>
  </SideBar>
  )
}


export default Products;
