import { ContainerOutlined, MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Layout, Menu, Badge, Space, Dropdown } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

interface SideBarProps {
  children: React.ReactNode;
}

function SideBar({ children }: SideBarProps) {
  const { user, isAuthenticated, logout } = useAuth0();
  const [collapse, setCollapse] = useState<boolean>(false);

  const toggle = () => setCollapse(!collapse);

  const routes = [
    {
      id: 1,
      path: '/orders',
      title: 'Orders',
      icon: <ContainerOutlined />,
    },
    {
      id: 2,
      path: '/products',
      title: 'Products',
      icon: <ContainerOutlined />,
    },
    {
      id: 3,
      path: '/customers',
      title: 'Customers',
      icon: <ContainerOutlined />,
    },
    {
      id: 4,
      path: '/agents',
      title: 'Agents',
      icon: <ContainerOutlined />,
    },
  ]

  const logoutMenu = (
    <Menu>
      <Menu.Item key="0" onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
			</Menu.Item>
    </Menu >
  );

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapse}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="brand">
          <p>Baraka Roses</p>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          style={{ minHeight: "95vh" }}
        >
          {/** sidebar routes */}
          {routes.map(({ id, path, title, icon }) => (
            <Menu.Item key={id} icon={icon}>
              <Link to={path}>{title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            },
          )}
          <Space size="middle" className="align-right">
            <Badge dot>
              <BellOutlined />
            </Badge>
            {isAuthenticated ?
              <Dropdown overlay={logoutMenu} trigger={["click"]}>
                <Avatar src={user.picture} />
              </Dropdown>
              : null}
          </Space>
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          {children}
        </Content>

      </Layout>
    </Layout>
  );
}

export default SideBar;
