import React, { useState, useEffect } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() =>{
     setCount(count+1);
  },1000)
},[count]) 
    

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>{count}</h1>
      <button onClick={handleDecrease}>Decrement</button>
      <button onClick={handleReset} style={{ margin: '0 10px' }}>Reset</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Effect;
