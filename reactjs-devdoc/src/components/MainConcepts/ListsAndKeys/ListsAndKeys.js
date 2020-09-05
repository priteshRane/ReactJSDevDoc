import React from "react";
import NumberList from "./NumberList";
import Blog from "./Blog";

function ListsAndKeys() {
  const numbers = [1, 2, 3, 4, 5];

  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];

  return (
    <div>
      <h3 style={{ color: "red" }}>Lists and Keys example: </h3>
      <NumberList numbers={numbers} />
      <Blog posts={posts} />
    </div>
  );
}

export default ListsAndKeys;
