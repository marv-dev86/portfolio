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
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={ <About/>}/>
            <Route path='/contact' element={<Contact />}/>    
            <Route path='/contact/form' component={<ContactForm />}/>
                           
          

        </Routes>



    </>
  )
}
