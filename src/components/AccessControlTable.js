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
      switch: <Switch defaultChecked className="switch-img" />,
      description: "Budget Content",
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
      switch: <Switch defaultChecked={false} className="switch-img" />,
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
      switch: <Switch defaultChecked={true} className="switch-img" />,
      description: "Vendor Portal Content",
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
      switch: <Switch defaultChecked={true} className="switch-img" />,
      description: "Purchase Order/Work Order",
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
      switch: <Switch defaultChecked={true} className="switch-img" />,
      description: "Organisational Profile Content",
    },
    {
      key: 6,
      name: "Permission and access control",
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
      switch: <Switch defaultChecked={false} className="switch-img" />,
      description: "Permission and access control content",
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
