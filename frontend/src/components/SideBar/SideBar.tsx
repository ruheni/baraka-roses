import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { ContainerOutlined} from '@ant-design/icons';


class SideBar extends React.Component {
  state = {
    collapsed: false,
    current: 'mail'
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = (e:any) => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    const { Header, Sider} = Layout;

    return (
      <div >
         <Layout>
         
          <Header style={{padding: 0}}>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
              <Menu.Item key="brand" style={{float: 'left'}}>
                Baraka Roses
              </Menu.Item>
         
              <Menu.Item key="notify" style={{float: 'right'}}>
                Notifications
              </Menu.Item>
              <Menu.Item key="profile" style={{float: 'right'}}>
                Profile
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
          <Sider >
            <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="dark"
            /*inlineCollapsed={this.state.collapsed}*/
            style={{ minHeight: '95vh' }}>
            <Menu.Item key="1" icon={<ContainerOutlined />}>
              <Link to="/orders">Orders</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ContainerOutlined/>}>
              <Link to="/customers">Customers</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              <Link to="/agents">Agents</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<ContainerOutlined />}>
              <Link to="/products">Products</Link>
            </Menu.Item>
          </Menu>
          
          </Sider>
     
          {this.props.children}
            
          </Layout>
        </Layout>
      </div>
    );
  }
}


export default SideBar;
