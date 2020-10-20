import { ContainerOutlined, MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Layout, Menu, Badge, Space } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

interface SideBarProps {
  children: React.ReactNode;
}

function Dashboard({ children }: SideBarProps) {
  const { user, isAuthenticated } = useAuth0();
  const [current, setCurrent] = useState<any>("mail");

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

  const handleClick = (e: any) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

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
          <Header
            className="site-layout-background"
            style={{ padding: 0 }}
          >

            <Space size="middle" className="align-right">
              <Badge dot>
                <BellOutlined />
              </Badge>
              {isAuthenticated ? <Avatar src={user.picture} /> : null}
            </Space>
          </Header>
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

export default Dashboard;
