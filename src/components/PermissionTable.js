import React from "react";
import { Table, Button } from "antd";
import eye from "../icons/eye.png";
const PermissionTable = (props) => {
  const columns = [
    {
      title: "Department/Role Name",
      dataIndex: "name",
    },
    {
      title: "Access Level",
      dataIndex: "accesslevel",
    },
    {
      title: "No of Members",
      dataIndex: "members",
    },
    {
      title: "Last Updated",
      dataIndex: "lastupdated",
    },
    {
      dataIndex: "icon",
    },
  ];
  const data = [
    {
      key: "1",
      name: (
        <p className="management-team" onClick={props.onManagementClick}>
          Management Team
        </p>
      ),
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
      members: 4,
      lastupdated: "1 min ago",
      icon: <img src={eye} />,
    },
    {
      key: "2",
      name: "Procurement Team",
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
      members: 8,
      lastupdated: "1 min ago",
      icon: <img src={eye} />,
    },
    {
      key: "3",
      name: "Project Team",
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
      members: 16,
      lastupdated: "1 min ago",
      icon: <img src={eye} />,
    },
    {
      key: "4",
      name: "IT Team",
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
      members: 4,
      lastupdated: "1 min ago",
      icon: <img src={eye} />,
    },
    {
      key: "5",
      name: "Super Admin",
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
      members: 1,
      lastupdated: "1 min ago",
      icon: <img src={eye} />,
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  return (
    <div>
      {props.management ? (
        <Table
          bordered
          pagination={false}
          rowSelection={{
            type: "radio",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      ) : null}
    </div>
  );
};

export default PermissionTable;
