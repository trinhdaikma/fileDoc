import React from "react";
import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];

export default function ListItem() {
  const [list, setList] = useState([]);
  const [type, setType] = useState("posts");

  const handleCilck = (type) => {
    setType(type);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json()) //trả về reponse chờ trả về obj đc convert sang js
      .then((posts) => {
        //nhận lại cái giữ liệu response trả về
        setList(posts);
      });
  }, [type]);

  return (
    <div className="post">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleCilck(tab)}
          style={type === tab ? { backgroundColor: "#333" } : {}}
        >
          {tab}
        </button>
      ))}
      <ul>
        {list.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}
