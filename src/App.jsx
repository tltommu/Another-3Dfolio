import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {About, Contact, Experience, Hero, Tech, Navbar, StarsCanvas,SubNavbar, Certifications} from './components'
import {MLproject,ReactNativeProject,Webproject,BackendProject, Works} from './components/All_Projects'
const App=() =>{
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<>
      <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero/>
      </div>
      <About/>
      <Tech/>
      <Experience/>
      <Works/>
      <Certifications/>
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
      </>}/>
      <Route path="/Webproject" element={<><SubNavbar/><Webproject/></>}/>
      <Route path="/MLproject" element={<><SubNavbar/><MLproject/></>}/>
      <Route path="/BackendProject" element={<><SubNavbar/><BackendProject/></>}/>
      <Route path="/ReactNativeProject" element={<><SubNavbar/><ReactNativeProject/></>}/>
    </Routes>
      </BrowserRouter>
      </>
  )
  }
export default App
