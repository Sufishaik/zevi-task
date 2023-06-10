import React from 'react'
import Home from './Components/Home/Home.jsx'
import SearchSession from './Components/Search/SearchSession.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={  <Home/>}/>
      <Route path='/search' element={ <SearchSession/>}/>
      </Routes>
      </BrowserRouter>
    
  
    </div>
  )
}

export default App
