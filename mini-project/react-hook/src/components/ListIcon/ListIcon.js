import React from "react";
import { useState } from "react";
import ListItem from "../ListItem/ListItem";

function ListIcon() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="hoo">
      <button onClick={handleToggle} className="hello">
        toggle
      </button>
      <button className="goodbye">goodbye</button>
      {toggle && <ListItem />}
    </div>
  );
}

export default ListIcon;
