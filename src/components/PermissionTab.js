import React, { useState } from "react";
import line from "../icons/line.png";
import IconOption from "./IconOption";
import bottomLine from "../icons/bottom-line.png";
import AccessControlTable from "./AccessControlTable";
const PermissionTab = () => {
  const [tab, setTab] = useState(1);
  return (
    <React.Fragment>
      <div className="per-tab-inside">
        <div className="tab-container">
          <div className="tab-button-container">
            <button onClick={() => setTab(1)} className="tab-button">
              <IconOption
                img={null}
                name="Access Control"
                tabActive={tab === 1 ? true : false}
              />
            </button>
            <img src={line} alt="line" />
            <button onClick={() => setTab(2)} className="tab-button">
              <IconOption
                img={null}
                name="Assigned Members"
                tabActive={tab === 2 ? true : false}
              />
            </button>
          </div>
        </div>
        <img src={bottomLine} />
        {tab === 1 ? <AccessControlTable /> : <h3>Assigned Members content</h3>}
      </div>
    </React.Fragment>
  );
};

export default PermissionTab;
