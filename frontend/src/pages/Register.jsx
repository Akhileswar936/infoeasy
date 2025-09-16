
import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [msg,setMsg]=useState('');
  const navigate=useNavigate()
  const submithandler=(e)=>{
         e.preventDefault();
        axios.post('http://localhost:8314/register',{name,email,password}).
        then((res)=>{
          setMsg(res.data.msg);
         }).catch((err)=>console.log(err))  
  }
   useEffect(() => {
    if (msg === 'registration sucessfull') {
      setTimeout(() => {
        navigate('/login');
      }, 100); 
    }
  }, [msg, navigate]);
  return (
    <>
       <div className='flex flex-col justify-center items-center h-[100vh] bg-violet-600 capitalize'>
             <div className='bg-violet-300 w-[300px] p-3 rounded'>
                    <h1>Register</h1>
                    <form onSubmit={submithandler}> 
                        <label htmlFor="n">Enter a name
                             <input type="text" name="n" id="n"  className='border w-[90%]' onChange={e=>setName(e.target.value)}/>
                        </label>
                        <label htmlFor="e">Enter a Email
                            <input type="email" name="e" id="e" className='border w-[90%]' onChange={e=>setEmail(e.target.value)}/>
                        </label>
                        <label htmlFor="p">Create a password
                            <input type="password" name="p" id="p" className='border w-[90%]' onChange={e=>setPassword(e.target.value)} />
                        </label>
                        <input type="submit" value="Submit"className='border w-[90%] my-2 bg-violet-600'  />
                    </form>
                     <p className='text-blue-800'>{msg}</p>
                    <p>Already have an account? <Link to={'/login'} className='font-bold'>Login</Link> </p>
             </div>
       </div>
    </>
  )
}

export default Register