import React from 'react'
import { Github, Linkedin } from './Logos'


export const Contact = () => {
  return (
    
      
<div className='container h-75 '>
  <div className='row h-100 align-items-center '>

    <div className='col-lg-6'>
        <h3 className='text-light lh-base' style={{fontSize: "3rem"}}>
          let's get in touch! 
          Either by <span className='text-info'>email</span> or through my 
          <span className='text-info'> social media </span>

          
        </h3>

        <div className='text-center text-white'>
            <Github />  <Linkedin/>
        </div>
    </div>

    <div className='col-lg-6 '>
        <div className="container">
          <form className='row text-light justify-content-center'>
              <div class="mb-3 col-lg-4">
                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input type="text" class="form-control"/>
              
              </div>
              <div class="mb-3 col-lg-4">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" />
                
              </div>

              <div class="mb-3 col-lg-8">
                <label for="exampleInputEmail1" class="form-label">Message</label>
                    <textarea class="form-control" rows="6" ></textarea>
                
              </div>

              <div className='col-lg-8 d-grid'>
                <button className='btn btn-block btn-outline-info' type='submit'>Message Me </button>
              </div>

          </form>
        </div>
    </div>

 </div>
</div>


    
  )
}
