import React from "react";
import { Table } from "antd";
import { Switch, Button } from "antd";
import BiddingControls from "./BiddingControls";
const AccessControlTable = () => {
  const columns = [
    { title: "Department/Role Name", dataIndex: "name", key: "name" },
    { title: "Access Level", dataIndex: "accesslevel", key: "age" },
    { title: "Summary", dataIndex: "summary", key: "summary" },
    { title: "Last Updated", dataIndex: "lastupdated", key: "lastupdated" },
    {
      title: "",
      dataIndex: "switch",
      key: "x",
    },
  ];

  const data = [
    {
      key: 1,
      name: "Budget",
      accesslevel: (
        <Button
          block
          size="large"
          danger
          shape="round"
          style={{
            backgroundColor: "rgba(39, 174, 96, 0.3)",
            color: "#27AE60",
            border: "1px solid #27AE60",
          }}
        >
          All Access
        </Button>
      ),
      summary: <p>View | Create | Edit | Delete</p>,
      lastupdated: "1 min ago",
      switch: <Switch defaultChecked />,
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 2,
      name: "Bidding",
      accesslevel: (
        <Button
          disabled
          block
          size="large"
          danger
          shape="round"
          style={{
            backgroundColor: "#F2F2F2",
            color: "#27AE60",
            border: "1px solid #BDBDBD",
          }}
        >
          No Access
        </Button>
      ),
      summary: <p></p>,
      lastupdated: "1 min ago",
      switch: <Switch defaultChecked={false} />,
      description: <BiddingControls />,
    },
    {
      key: 3,
      name: "Vendor Portal",
      accesslevel: (
        <Button
          block
          size="large"
          danger
          shape="round"
          style={{
            backgroundColor: "rgba(255, 8, 8, 0.3)",
            color: "red",
            border: "1px solid #FF0808",
          }}
        >
          Restricted Access
        </Button>
      ),
      summary: <p>View | Create</p>,
      lastupdated: "1 min ago",
      switch: <Switch defaultChecked={true} />,
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 4,
      name: "Purchase Order/Work Order",
      accesslevel: (
        <Button
          block
          size="large"
          danger
          shape="round"
          style={{
            backgroundColor: "rgba(255, 8, 8, 0.3)",
            color: "red",
            border: "1px solid #FF0808",
          }}
        >
          Restricted Access
        </Button>
      ),
      summary: <p>View | Create</p>,
      lastupdated: "1 min ago",
      switch: <Switch defaultChecked={true} />,
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 5,
      name: "Organisational Profile",
      accesslevel: (
        <Button
          block
          size="large"
          danger
          shape="round"
          style={{
            backgroundColor: "rgba(39, 174, 96, 0.3)",
            color: "#27AE60",
            border: "1px solid #27AE60",
          }}
        >
          All Access
        </Button>
      ),
      summary: <p>View | Create | Edit | Delete</p>,
      lastupdated: "1 min ago",
      switch: <Switch defaultChecked={true} />,
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 6,
      name: "Permissions & Access Control",
      accesslevel: (
        <Button
          disabled
          block
          size="large"
          danger
          shape="round"
          style={{
            backgroundColor: "#F2F2F2",
            color: "#27AE60",
            border: "1px solid #BDBDBD",
          }}
        >
          No Access
        </Button>
      ),
      summary: <p></p>,
      lastupdated: "1 min ago",
      switch: <Switch defaultChecked={false} />,
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
  ];
  return (
    <div className="access-control-table">
      <Table
        pagination={false}
        columns={columns}
        bordered
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
    </div>
  );
};

export default AccessControlTable;