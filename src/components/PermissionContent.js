import React, { useState } from "react";
import PermissonButtons from "./PermissonButtons";
import PermissionTable from "./PermissionTable";
import PermissionTab from "./PermissionTab";
const PermissionContent = () => {
  const [management, setManagement] = useState(true);
  const onManagementClick = () => {
    const current = management;
    setManagement(!current);
    console.log(management);
  };
  return (
    <div className="permisson-content">
      <PermissonButtons
        management={management}
        onManagementClick={onManagementClick}
      />
      {management ? null : <PermissionTab />}
      <PermissionTable
        onManagementClick={onManagementClick}
        management={management}
      />
    </div>
  );
};

export default PermissionContent;
