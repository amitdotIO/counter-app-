import React from 'react'
import { useState } from 'react'

function App() {
const[count,setcount]=useState(0)

function increment(){
  setcount(count+1)
}
function decrement(){
  setcount(count-1)
}   
function reset(){
  setcount(0)
} 
  return (


    <>
    <div style={{ textAlign: 'center',marginTop: '50px' }}>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>  
    </div>
    </>
  )
}

export default App
