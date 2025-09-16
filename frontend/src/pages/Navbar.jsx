
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const navigate=useNavigate();
   const logout=()=>{
       navigate('/')
   }
  return (
     <>
        <div className='bg-green-600 flex justify-around'>
            <div>
                <h1>Informate</h1>
            </div>
            <button
          className='text-white sm:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
                 <ul className={`flex flex-col  sm:flex-row sm:gap-10 absolute bg-green-500 sm:static sm:bg-green-600 w-full left-0 sm:w-auto ${isOpen ? 'top-6' : 'top-[-200px]'}`}>
                    <Link to={'/send'}> <li className='mx-1'>Send</li></Link>
                    <Link to={'/retrieve'}> <li className='mx-1'>Retrieve</li></Link>
                    <li className='mx-1 cursor-pointer ' onClick={logout}>Logout</li>
                 </ul>
        </div>
     </>
  )
}

export default Navbar