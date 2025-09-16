
import React, { useState } from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react';
import axios from 'axios';

const Send = () => {
  const [info,setInfo]=useState('');
  const [token,setToken]=useState('');
  const [msg,setMsg]=useState('');
  const [res,setRes]=useState('');
  const tokenid=localStorage.getItem('token')
  const arr=[...'0123456789abcdef'];
  const tokencode=()=>{
     let code='';
      for(let i=0;i<6;i++)
      {
         code+=arr[Math.floor(Math.random()*arr.length)]
      }
      return code;
  }
  const submithandler=(e)=>{
      e.preventDefault();
      const newtoken=tokencode()
      setToken(newtoken)
      axios.post('http://localhost:8314/send',{info,token:newtoken},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
      .then((res)=>{
         if(res.data.msg==='sucess')
         {
           setTimeout(() => {
                setInfo('');
                setToken('');
              }, 60000);

         }
         else
        {
             setRes(res.data.msg)
             setToken('')
        }
      })
  }
  useEffect(()=>{
        axios.get('http://localhost:8314/user',{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
        .then((res)=>{
             setMsg(res.data.msg)
        })
  },[])
  return (
    <>
      <Navbar/>
      <h1 className='bg-blue-400 font-bold px-2'>welcome to {msg}</h1>
      <div className='bg-blue-400 flex items-center justify-center h-[100vh] capitalize'>
            <div className='bg-blue-100 rounded w-[300px] p-2'>
                 <h1>Send the data</h1>
                 <div>
                  
                  <form onSubmit={submithandler}>
                     <h2>Enter Information</h2>
                     <label htmlFor="t">
                         <textarea name="t" id="t" className='border w-[90%] h-[100px] resize-none outline-none' value={info} onChange={e=>setInfo(e.target.value)}></textarea>
                     </label>
                      <input type="submit" value="Submit" className='border w-[90%] bg-blue-400 '/>

                  </form>
                    <p className='text-blue-800'>{res}</p>
                 </div>
                 <div>
                     <h1>Token is: {token} </h1>
                 </div>
            </div>
      </div>
    </>
  )
}

export default Send