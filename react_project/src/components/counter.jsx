import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{count}</h1>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: "0 10px" }}>
        Reset
      </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
