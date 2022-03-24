import ListIcon from "./components/ListIcon/ListIcon";
// import RandomGift from "./components/RandomGift/RandomGift";
// import UseState from "./components/useState/UseState";

function App() {
  return (
    <div className="App">
      {/* <UseState />
      <RandomGift /> */}
      <ListIcon />
    </div>
  ); // truyền counter vào h1 nên render ra couter = 1
} // khi bấm  vào button nó sẽ gọi hàm handleClick và hàm này sẽ đc thực thi lúc đó sẽ gọi hàm setCounter = 2 và thằng counter lúc này sẽ bằng 2 và nó sẽ render lạo giao diện bằng 2
// khi setCounter thay đổi thì hàm sẽ render lại và lại đọc từ trên xuóng
// từ lần 2 trở đi counter sẽ lấy giá trị của setCounter

export default App;
