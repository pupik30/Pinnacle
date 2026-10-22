import { useState } from 'react'

import React, { StrictMode,} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Page/Layouts/Header/Header.js'
import Footer from './Page/Layouts/Footer/Footer.js'
import MainPage from './Page/MainPage/MainPage.js'
import ServicePage from './Page/ServicePage/ServicePage.js'
import ProjectsDetalis from './Page/ProjectsDetalis/ProjectsDetalis.js'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' index element = {<MainPage/>}/>
              <Route path='MainPage' element={<MainPage/>}/>
              <Route path='ServicePage' element={<ServicePage/>}/>
              <Route path='ProjectsDetalis' element={<ProjectsDetalis/>}/>
            </Routes>  
          <Footer />
        </BrowserRouter>
    </StrictMode>,
    </>
  )
}

export default App