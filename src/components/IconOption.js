import React from "react";
import tabRectangle from "../icons/tabRectangle.png";
const IconOption = (props) => {
  return (
    <React.Fragment>
      <div className={`icon-option ${props.img ? null : "increase-width"} `}>
        {props.img ? <img className="tab-icons" src={props.img}></img> : null}
        <h2 className={props.tabActive ? "tab-active" : null}>{props.name}</h2>
      </div>
      {props.tabActive ? (
        <img className="bottom-line" src={tabRectangle} />
      ) : null}
    </React.Fragment>
  );
};

export default IconOption;
