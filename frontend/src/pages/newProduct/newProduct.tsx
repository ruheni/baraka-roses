import React from 'react';
import { Layout, Typography, Form, Input, Space, Button } from 'antd';
import styles from 'components/Products/Products.module.css';
import SideBar from 'components/SideBar/SideBar'
import { gql, useMutation } from '@apollo/client';

const ADD_PRODUCT = gql`
mutation AddProducts($color: Color!, $quantity: Int!, $grade: Grade!, $variety: String!,$length: Int!) {
    createProduct(color: $color, quantity: $quantity,  grade: $grade, variety: $variety, length: $length) {
      id
      color
      quantity
      grade
      variety
      length
      createdAt
    }
}
`;

const { Title } = Typography;
const { Content } = Layout;


const CollectionCreateForm = ({onCreate}:any) => {
  const [form] = Form.useForm();
  const [createProducts] = useMutation(ADD_PRODUCT);

  const onFinish=(e: any) => {
    e.preventDefault();
    form
      .validateFields()
      .then(values => {
        onCreate(values);
        let {quantity, length} = values
        
        values.quantity = parseInt(quantity)
        values.length = parseInt(length)

        createProducts({ variables: { 
          color: values.color,
          grade: values.grade,
          length: values.length,
          variety: values.variety,
          quantity: values.quantity
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
          name="color"
          label="Color: "
        >
          <Input placeholder="Color" type="text"/>
        </Form.Item>

        <Form.Item
          name="grade"
          label="Grade: "
        >
          <Input placeholder="Grade" type="text"/>
        </Form.Item>

        <Form.Item
          name="length"
          label="Length: "
        >
          <Input placeholder="Length" type="number"/>
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

        <Form.Item>
            <Button type="primary" href='/new' onClick={ onFinish } >
                Submit
            </Button>
        </Form.Item>
      </Form>
  );
};


function NewProduct() {

  const [form] = Form.useForm();

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };


  return(
    <SideBar>
    <div className={styles.Products}>
      <Content>
        <Layout>
        <div >
          <Space align="baseline">
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} size='small'>

              <Form.Item name="navtitle"  >
                <Title level={2} type="secondary" className={styles.spaceAlign}>Add New Product</Title> 
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


export default NewProduct;
