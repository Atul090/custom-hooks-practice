import React from 'react'
import { useState } from 'react'

//creatign a custom-hook
function useCounter() {
  const [count,setCount]=useState(0);
  function increase() {
    setCount(count+1);
  }
  return {
    increase: increase,
    count: count
  }
}


const App = () => {
  const {count,increase}=useCounter();
  
  return (
    <div>
      HI there
      <button onClick={increase}>
        Increase {count}
      </button>
    </div>
  )
}

export default App