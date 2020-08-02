import React from 'react';
import Orders from 'components/Orders'
import { Menu, Button,  Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined
  //MailOutlined
} from '@ant-design/icons';


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
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme='dark'>
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
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
            style={{ minHeight: '100vh' }}>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Orders
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Customers
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Agents
            </Menu.Item>
            <Menu.Item key="4" icon={<ContainerOutlined />}>
            Products
            </Menu.Item>
            <Menu.Item key="toggler" >
              <Button type="primary" onClick={this.toggleCollapsed} >
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
            </Menu.Item>
            
          </Menu>
          </Sider>
     
          <Orders/>
            
          </Layout>
        </Layout>
      </div>
    );
  }
}


export default SideBar;
