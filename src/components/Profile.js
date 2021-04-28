import React from "react";
import notifications from "../icons/notifications.png";
import question from "../icons/question.png";
import circle from "../icons/Oval.png";
const Profile = () => {
  return (
    <div className="top-profile">
      <img src={question} alt="question" />
      <img className="notification" src={notifications} alt="notification" />
      <div className="pic-name">
        <img src={circle} alt="profile-pic" />
        <h2 className="profile-name">Kishore</h2>
      </div>
    </div>
  );
};

export default Profile;
