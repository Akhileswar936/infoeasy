
import React from 'react'
import { Link } from 'react-router-dom'
const Start = () => {
  return (
     <>
            <div className='flex flex-col justify-center items-center h-[100vh] bg-violet-400 capitalize'>
                 <h1>Welcome to InfoEasy</h1>
                 <h1>Easy to share Information</h1>
                 <div>
                     <Link to={'/register'}><button className='bg-green-600 rounded m-1 px-2'>Register</button></Link>
                     <Link to={'/login'}><button className='bg-blue-600 rounded m-1 px-2'>Login</button></Link>
                 </div>
            </div>
     </>
  )
}

export default Start