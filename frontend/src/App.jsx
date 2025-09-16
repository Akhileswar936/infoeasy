
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Start from './pages/Start'
import Register from './pages/Register'
import Login from './pages/Login'
import Send from './pages/Send'
import Retrieve from './pages/Retrieve'
import TokenExpirationTimer from './pages/TokenExpirationTimer'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <TokenExpirationTimer/>
         <Routes>
               <Route path='/' element={<Start/>}/>
               <Route path='/register' element={<Register/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/send' element={<Send/>}/>
               <Route path='/retrieve' element={<Retrieve/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App