import { useState } from 'react'
 
function App() {
  let [count, setCounter] = useState(0)

  function add(){
  setCounter(count+1)

  }
  function decrement(){
    setCounter(count-1)
  
}

  return (
    <>
    <h1>{count}</h1>
    <button onClick={add}>Increment</button>
    <button onClick={decrement}>decrement</button>
      

    </>
  )
}

export default App
