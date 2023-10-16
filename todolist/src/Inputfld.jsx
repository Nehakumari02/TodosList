import React, { useState } from 'react'
import axios from 'axios'
const Inputfld = () => {
  const [task,setTask]=useState()
  const addHandle=()=>{
    axios.post('http://localhost:3003/add',{task:task})
    .then(result=>{
      location.reload()
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='form'>
        <input type='txt' placeholder="Enter Task" onChange={(e)=>setTask(e.target.value)}/>
        <button type='butoon' onClick={addHandle}>Add</button>
    </div>
  )
}

export default Inputfld