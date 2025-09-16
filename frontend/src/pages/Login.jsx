
import axios from 'axios';
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
const Login = () => {
  const [email,setEmail]=useState('');
   const [password,setPassword]=useState('')
   const [msg,setMsg]=useState('');
   const navigate=useNavigate();
   const submithandler=(e)=>{
          e.preventDefault();
          axios.post('http://localhost:8314/login',{email,password}).
          then((res)=>{
                if(res.data.token)
                {
                   localStorage.setItem('token',res.data.token);
                   navigate('/send')
                }
                else
                {
                    setMsg(res.data.msg)
                }
          })
          .catch((err)=>console.log(err))
   }
  return (
    <>
       <div className='flex flex-col justify-center items-center h-[100vh] bg-violet-600 capitalize'>
             <div className='bg-violet-300 w-[300px] p-3 rounded'>
                    <h1>Login</h1>
                    <form onSubmit={submithandler}> 
                        <label htmlFor="e">Enter a Email
                            <input type="email" name="e" id="e" className='border w-[90%]' onChange={e=>setEmail(e.target.value)}/>
                        </label>
                        <label htmlFor="p">Create a password
                            <input type="password" name="p" id="p" className='border w-[90%]' onChange={e=>setPassword(e.target.value)} />
                        </label>
                        <input type="submit" value="Submit"className='border w-[90%] my-2 bg-violet-600'  />
                    </form>
                     <p className='text-blue-800'>{msg}</p>
                    <p>Create an account? <Link to={'/register'} className='font-bold'>Register</Link> </p>
             </div>
       </div>
    </>
  )
}

export default Login