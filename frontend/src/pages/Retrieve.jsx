
import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';

const Retrieve = () => {

  const [token,setToken]=useState('');
  const [info,setInfo]=useState('');
  const [res,setRes]=useState('');
  const submithandler = (e) => {
  e.preventDefault();
  if(!token)
    setRes('enter a token')
  axios.get(`http://localhost:8314/retrieve/${token}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
  .then(res => {
    if(res.data.msg === 'sucess') {
      setRes('');
      setInfo(res.data.result);
    } else {
      setRes(res.data.msg);
    }
  })
  .catch(err => {
      console.log(err)
  });
}

  return (
    <>
       <Navbar/>
       <div className='bg-blue-400 flex items-center justify-center h-[100vh]'>
            <div className='bg-blue-100 rounded w-[300px] p-2'>
              <div>
                  <form onSubmit={submithandler} >
                      <label htmlFor="tid">Enter a token
                          <input type="text" name="tid" id="tid" className='border w-[90%]' onChange={e=>setToken(e.target.value)}/>
                      </label>
                       <input type="submit" value="Submit" className='border w-[90%] bg-blue-400 my-2 '/>
                           <p className='text-blue-800'>{res}</p>
                      <label htmlFor="info">  <h1>Retrieve data is</h1></label>
                      <textarea name="info" id="info"  
                         className='border w-[90%] h-[100px] resize-none outline-none' disabled={!info} value={info} readOnly>
                      </textarea>
                  </form>
                 
              </div>
            </div>
       </div>
    </>
  )
}

export default Retrieve