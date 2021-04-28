import React, { useState } from "react";
import PermissionContent from "./PermissionContent";
import ApprovalContent from "./ApprovalContent";
import line from "../icons/line.png";
import IconOption from "./IconOption";
import feed from "../icons/feed.png";
import matrix from "../icons/matrix.png";
import sync from "../icons/sync.png";
import bottomLine from "../icons/bottom-line.png";
const DashTab = () => {
  const [tab, setTab] = useState(1);
  let currentTab = tab === 1 ? <PermissionContent /> : <ApprovalContent />;

  return (
    <React.Fragment>
      <div className="tab-container">
        <div className="tab-button-container">
          <button onClick={() => setTab(1)} className="tab-button">
            <IconOption
              img={feed}
              name="Permissions"
              tabActive={tab === 1 ? true : false}
            />
          </button>
          <img src={line} alt="line" />
          <button onClick={() => setTab(2)} className="tab-button">
            <IconOption
              img={matrix}
              name="Approval Matrix"
              tabActive={tab === 2 ? true : false}
            />
          </button>
        </div>

        <div className="sync-data">
          <p>
            <img src={sync} alt="sync" /> Last synced 15 mins ago
          </p>
        </div>
      </div>
      <img src={bottomLine} alt="sync" />
      {/* <div className="bottom-line"></div> */}
      {currentTab}
    </React.Fragment>
  );
};

export default DashTab;
