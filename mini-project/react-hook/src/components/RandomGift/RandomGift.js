import React from "react";
import { useState } from "react";

const gifts = ["CPU i9", "RAM 32G", "RGB keyboard"];

function RandomGift() {
  const [gift, setGift] = useState();

  const handleGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };
  return (
    //nếu có gift thì lấy gift ko có gift thì lấy phía sau
    <div style={{ padding: 20 }}>
      <h1>{gift || "chưa có phần thưởng"}</h1>
      <button onClick={handleGift}>Lấy thưởng</button>
    </div>
  );
}

export default RandomGift;
