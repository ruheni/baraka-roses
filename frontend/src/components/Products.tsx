import React, { useState, useEffect }  from 'react';
import { Layout, Typography, Form, Input, Table, Tag, Space, Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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

const CollectionCreateForm = ({ visible, onCreate, onCancel }: any) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create New Product"
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
          name="productName"
          label="Name: "
          rules={[{ required: true, message: 'Please input the product name' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Agent Name" type="text"/>
        </Form.Item>

        <Form.Item
          name="colour"
          label="Colour: "
        >
          <Input placeholder="Colour" type="text"/>
        </Form.Item>

        <Form.Item
          name="grade"
          label="Grade: "
        >
          <Input placeholder="Grade" type="text"/>
        </Form.Item>

        <Form.Item
          name="variety"
          label="variety: "
          rules={[{required: true, message: 'Please input the product name'}]}
        >
          <Input placeholder="Variety" type="text"/>
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


function Products(props:any) {
  const [visible, setVisible] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

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
  const { Search } = Input

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
                      onClick={() => {
                        setVisible(true);
                      }}
                    >
                      + Add New Products
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
          <Table columns={columns} dataSource={data} />
        </Content>
      </Content>
  </div>
  </SideBar>
  )
}


export default Products;
