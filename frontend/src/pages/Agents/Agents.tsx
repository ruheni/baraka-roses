import { useQuery } from "@apollo/client";
import { Button, Space, Table, Typography } from "antd";
import { GetAgents } from "api/Agents";
import Dashboard from "components/Dashboard/Dashboard";
import styles from "pages/Agents/Agents.module.css";
import React from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Edit",
    key: "edit",
    render: (text: any, record: { id: React.ReactNode }) => (
      <Space size="middle">
        <Link to={`/agents/${record.id}`}>edit</Link>
      </Space>
    ),
  },
];

function Agents() {
  const { loading, error, data } = useQuery(GetAgents);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Dashboard>
      <div>
        <Space align="baseline">
          <Title level={2} type="secondary" className={styles.spaceAlign}>
            Agents
          </Title>

          <Link to="agents/new">
            <Button type="primary" danger size="large">
              + Add New Agent
            </Button>
          </Link>
        </Space>

        <div className={styles.Table}>
          <Table columns={columns} dataSource={data.agents} />
        </div>
      </div>
    </Dashboard>
  );
}

export default Agents;
