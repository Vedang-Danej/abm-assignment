import React from "react";
import { Radio } from "antd";
import { Checkbox } from "antd";
import verticalLine from "../icons/verticalLine.png";
const BiddingControls = () => {
  return (
    <React.Fragment>
      <p style={{ fontSize: "18px" }}> All aspects in the bidding module</p>
      <div className="bidding-controls">
        <div className="access-control">
          <p className="bidding-heading">Access Control</p>
          <Radio>
            <p style={{ margin: "0" }}>All Access</p>
            <p style={{ opacity: "0.5", margin: "0", marginBottom: "10px" }}>
              Can access all the items
            </p>
          </Radio>
          <Radio>
            <p style={{ margin: "0" }}>Restricted Access</p>
            <p style={{ opacity: "0.5", margin: "0", marginBottom: "10px" }}>
              Can access only assigned or created items
            </p>
          </Radio>
        </div>
        <img className="long-line" src={verticalLine} alt="verticalline" />
        <div className="permissions-control">
          <p className="bidding-heading">Permissions</p>
          <Checkbox>
            <p className="check-p"> View Items in access</p>
          </Checkbox>
          <Checkbox>
            <p className="check-p">Edit Items in access</p>
          </Checkbox>
          <Checkbox>
            <p className="check-p">Create Items in access</p>
          </Checkbox>
          <Checkbox>
            <p className="check-p">Delete Items in access</p>
          </Checkbox>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BiddingControls;
