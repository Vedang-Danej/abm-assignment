import React from "react";
import { Button } from "antd";
import add from "../icons/add.png";
import edit from "../icons/edit.png";
import deleteBtn from "../icons/delete.png";
import arrow from "../icons/arrow.png";
const PermissonButtons = (props) => {
  let buttons;
  if (props.management) {
    buttons = (
      <div className="per-btn-container">
        <Button
          type="primary"
          size="large"
          style={{
            backgroundColor: "#673AB7",
            width: "190px",
            borderRadius: "5px",
          }}
        >
          <img src={add} alt="add-btn" />
          Add Role
        </Button>
        <img src={edit} alt="edit-btn" />
        <img className="delete-icon" src={deleteBtn} alt="delete-btn" />
      </div>
    );
  } else {
    buttons = (
      <div className="per-btn-container new-btn-container">
        <img
          className="new-arrow"
          onClick={props.onManagementClick}
          src={arrow}
          alt="arrow"
        />
        <h3>Management Team</h3>
        <img src={edit} alt="edit-btn" />
      </div>
    );
  }
  return buttons;
};

export default PermissonButtons;
