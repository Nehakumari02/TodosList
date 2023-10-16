import React, { useEffect, useState } from 'react'
import Inputfld from './Inputfld'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillCircleFill, BsFillTrashFill } from 'react-icons/bs';
axios.defaults.withCredentials = true;
const Index = () => {
    const[todos,settodos]=useState([])
    useEffect(()=>{

        axios.get('https://to-dos-list-gray.vercel.app/Get')
        .then(result=>settodos(result.data))
        .catch(err=>console.log(err))
    },[])
    const handleEdit=(id)=>{
        axios.put('https://to-dos-list-gray.vercel.app/update/'+id)
        .then(result=>{
            location.reload()})

        .catch(err=>console.log(err))


    }
    const handleDelete=(id)=>{
        axios.delete('https://to-dos-list-gray.vercel.app/delete/'+id)
        .then(result=>{location.reload()})
        .catch(err=>console.log(err))
        

    }
   
  return (
    <div className='index'>
        <h2>ToDo List</h2>
        <Inputfld/>
        {   todos.length===0?
            
                <h2>No Records</h2>
            
            :
            todos.map(todo =>(

                <div className='task'>
                    <div className='check' onClick={()=>handleEdit(todo._id)}>
                        {todo.done ?
                        <BsFillCheckCircleFill className='icon' ></BsFillCheckCircleFill>
                        :
                        <BsCircleFill className='icon'/>
                        
                         }
                       
                        
                        <p className={todo.done ?"line":""}>{todo.task}</p>
                    </div>
                    <div>
                        <span><BsFillTrashFill className='icon' onClick={()=>handleDelete(todo._id)}/></span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Index
