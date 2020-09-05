import React from "react";
import Avatar from "./Avatar";

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        <h1>{props.user.name}</h1>
      </div>
    </div>
  );
}

export default UserInfo
