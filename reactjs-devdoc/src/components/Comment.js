import React from "react";
import UserInfo from './UserInfo'

function Comment(props) {
  return (
    <div>
      <div>
        <UserInfo user={props.author}/>
        <div>{props.author.name}</div>
      </div>
      <div>{props.text}</div>
      <div>{props.date}</div>
    </div>
  );
}

export default Comment;
