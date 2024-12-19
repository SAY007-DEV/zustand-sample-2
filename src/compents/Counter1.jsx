import React from 'react'
import useStore from './store'
function Counter1() {
    const{count,inc,dec,ince,count2}=useStore()
    return (
      <div>Counter1 <br />
      count : {count} <br />
      count2 : {count2} <br />
      <button onClick={()=>inc()}>increment</button>
      <button onClick={()=>ince()}>increment by 2</button>
      <button onClick={()=>dec()}>dec</button>
      
  
      
     
      
      </div>
    )
}

export default Counter1