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

const orders = [100, 200, 300];

function  UseState() {
  /* đọc code từ trên xuống */

  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)
      
    return total
  }); // giá trị khởi tạo là 1 thì counter là 1
  // khi initial sate là 1 hàm thì nó sẽ dùng cái giá trị của hàm đó return để làm giá trị khởi tạo
  const handleClick = () => {
    /* setCounter(counter + 1); khi gọi setState nhiều lần thì nó chưa render mà sẽ lên lịch trình và lúc gọi 3 lần thì chỉ gọi 1 lần thôi
    setCounter(counter + 1);
    setCounter(counter + 1); */

    /** muốn gọi 3 lần tăng lên 3 làn thì ta dùng call back
     * - trả lại cho callback 1 đối số là giá trị trc đó của state(giá trị hiện tại cảu state)
     *
     *
     */
    setCounter((preState) => preState + 1); // preStae = giá trị hởi tạo = 1
    setCounter((preState) => preState + 1); // prestate lúc này = 2
    setCounter((preState) => preState + 1); // lúc này  = 3 gộp 3 thằng này lại và chạy 1 lần
  }; //tạo ra hàm nhựng chưa gọi hàm
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default UseState;
