import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="card">
        <h1>My React App</h1>

        <p className="count">{count}</p>

        <div className="buttons">
          <button onClick={() => setCount(count - 1)}>
            −
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>

          <button onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;