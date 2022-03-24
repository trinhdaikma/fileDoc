import React from "react";
import { useState } from "react";

/* 
### dùng khi nào?
- khi muốn dữ liệu thay đổi thì giao diện tự động 
được cập nhật (render lại theo dữ liệu)

### cáh dùng:
- import {useState} from "react"
function Component() {
    const [state, setState] = useState(initState)
    ....
}

### Lưu ý:
- component được re-render sau khi `séttate`
- InitState chỉ đc dùng cho lần đầu
- séttate với callback?
- Inittial staet với callback
- sétState là thay thế state bằng giá trị mới

*/

function UseStateObj() {
  /* đọc code từ trên xuống */

  const [info, setInfo] = useState({
    name: "Dai",
    age: 23,
    address: "Nghe An",
  }); // giá trị khởi tạo là 1 thì counter là 1
  // khi initial sate là 1 hàm thì nó sẽ dùng cái giá trị của hàm đó return để làm giá trị khởi tạo
  const handleUpdate = () => {
    setInfo({
      ...info,
      hobbie: "Code",
    });
  }; //tạo ra hàm nhựng chưa gọi hàm
  return (
    <div>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UseStateObj;
