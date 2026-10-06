import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
    <div className="app">
      <h1>My Card</h1>
      {/* <img src="shams.jpg" alt="shmas" /> */}
      {/* <p>Hello I am Shams</p> */}
      {/* <button>CARD</button> */}
    </div>
    </div>
  );
}

export default App;