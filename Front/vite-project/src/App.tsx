import { useState } from 'react'

import React, { StrictMode,} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Page/Layouts/Header/Header.js'
import Footer from './Page/Layouts/Footer/Footer.js'
import MainPage from './Page/MainPage/MainPage.js'
import ServicePage from './Page/ServicePage/ServicePage.js'
import ProjectsDetalis from './Page/ProjectsDetalis/ProjectsDetalis.js'
import AboutUs from './Page/AboutUs/AboutUs.js'
import Projects from './Page/Projects/Projects.js'
import Blog from './Page/Blog/Blog.js'
import BlogDetails from './Page/BlogDetails/BlogDetails.js'
import ContactUs from './Page/ContactUs/ContactUs.js'
import PrivacyPolicy from './Page/PrivacyPolicy/PrivacyPolicy.js'
import NotFound from './Page/NotFound/NotFound.js'



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
              <Route path='AboutUs' element={<AboutUs/>}/>
              <Route path='Projects' element={<Projects/>}/>
              <Route path='Blog' element={<Blog/>}/>
              <Route path='BlogDetails/:id' element={<BlogDetails/>}/>
              <Route path='ContactUs' element={<ContactUs/>}/>
              <Route path='PrivacyPolicy' element={<PrivacyPolicy/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>  
          <Footer />
        </BrowserRouter>
    </StrictMode>,
    </>
  )
}

export default App