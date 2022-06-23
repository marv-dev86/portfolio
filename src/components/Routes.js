import React from 'react'
import {
   
    Routes,
    Route
  } from "react-router-dom";

import { About } from './About';
import {Contact} from './Contact'
import ContactForm from './ContactForm';
import {Home} from './Home'


export const RoutesComponent = () => {
  return (
    <>
         <Routes>
            <Route path='/portfolio/' element={<Home/>}/>
            <Route path='/portfolio/about' element={ <About/>}/>
            <Route path='/portfolio/contact' element={<Contact />}/>    
            <Route path='/portfolio/contact/form' component={<ContactForm />}/>
                           
          

        </Routes>



    </>
  )
}
