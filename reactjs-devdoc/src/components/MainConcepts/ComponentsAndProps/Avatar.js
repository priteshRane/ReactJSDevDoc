import React from "react";

function Avatar(props) {
    return (
        <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        width="100"
        height="100"
      />
    )
}

export default Avatar;
