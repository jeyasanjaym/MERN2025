import React, { useState } from 'react'

const State = () => {
    const [count,setCount] = useState(0);
    const handleDecrease =()=> {
        setCount(count-1);
    }
    const handleIncreament =()=> {
        setCount(count+1);
    }
    const handleReset =()=> {
        setCount(0);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleDecrease}>Decrement</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleIncreament}>Increment</button>
        

    </div>
  )
}

export default State