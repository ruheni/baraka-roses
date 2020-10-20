import { ContainerOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const { Header, Sider } = Layout;

interface SideBarProps {
  children: React.ReactNode;
}

function Dashboard({ children }: SideBarProps) {
  const { user, isAuthenticated } = useAuth0();
  const [current, setCurrent] = useState<any>("mail");

  const handleClick = (e: any) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

  return (
    <Layout>
      <Header style={{ padding: 0 }}>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          theme="dark"
        >
          <Menu.Item key="brand" >
            Baraka Roses
          </Menu.Item>

          <Menu.Item key="notify" >
            Notifications
          </Menu.Item>
          <Menu.Item key="profile" >
            {isAuthenticated ? <Avatar src={user.picture} /> : null}
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider>
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            theme="dark"
            style={{ minHeight: "95vh" }}
          >
            <Menu.Item key="1" icon={<ContainerOutlined />}>
              <Link to="/orders">Orders</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ContainerOutlined />}>
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

        {children}
      </Layout>
    </Layout>
  );
}

export default Dashboard;
