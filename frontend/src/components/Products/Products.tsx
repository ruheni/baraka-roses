import React from 'react';
import { Layout, Typography, Form, Input, Table, Space, Button} from 'antd';
//import { UserOutlined } from '@ant-design/icons';
import styles from 'components/Products/Products.module.css';
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

/*const ADD_PRODUCT = gql`
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
`;*/

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


/*const dummyData = [
  {
    name: 'Mando the Warrior',
    colour: 'yellow',
    quantity: 50,
    grade: 'graded',
    tags: ['graded'],
    variety: 'roses',
    edit: 'edit'
  },
];

const CollectionCreateForm = ({ visible, onCreate, onCancel }: any) => {
  const [form] = Form.useForm();
  const [createProducts] = useMutation(ADD_PRODUCT);

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
            // form.resetFields();
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
      </Form>
    </Modal>
  );
};*/


function Products() {
  //const [visible, setVisible] = useState(false);

  /*const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };*/

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  const { loading, error, data } = useQuery(GetProducts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  console.log(data);

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
                      
                      href="/new"
                    >
                      + Add New Products
                    </Button>

                    {/*<CollectionCreateForm
                      visible={visible}
                      onCreate={onCreate}
                      onCancel={() => {
                        setVisible(false);
                      }}
                    />*/}
                  
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
