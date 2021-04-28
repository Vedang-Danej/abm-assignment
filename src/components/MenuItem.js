import React from "react";

const MenuItem = (props) => {
  return (
    <div>
      <img className="logo" src={props.url} alt="logo" />
      <p className="menu-text">{props.name}</p>
    </div>
  );
};

export default MenuItem;
