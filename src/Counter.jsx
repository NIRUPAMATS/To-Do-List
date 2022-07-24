import React,{useState} from 'react'

function Counter() {
  const [count,setCount]=useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>hello world </h1>
        <h1>counting : {count}</h1>
    </div>
  )
}

export default Counter