import React from 'react'
import photo from '../assets/img/coding.jpg'
import { Code, Download, User } from './Logos'

export const About = () => {

 

  return (
    <div className=" container h-75 text-light ">

      <div className='row h-100 align-items-center'>

          <div className='col-lg-6 '>
            <figure>
              <img src={photo}alt="img" className=' figure-img img-fluid rounded ' />
            </figure>
          </div>

       <div className='col-lg-6 ' >
          <p className='lh-base'>
         <h4 className='text-info '>    <User/> About Myself    </h4> 

          I'm married in 2008, my wife and I have 3 kids, we're members of the Church of Jesus Christ of later-day Saints. <br />
          
          I started to code in 2020 when the quarantine just started, I quickly get in love with coding and the great things you can do. Later that year I started my first coding project. <br />

          Since 2021 I'm learning REACT JS, NODE JS and SQL to become a Full Stack Developer. I hope to meet that goal this year. <br />

          <h4 className='text-info mt-3'> <Code/> My Skills</h4>

          <ul>
            <li>
              REACT JS
            </li>
            <li>
              NODE JS
            </li>

            <li>
              EXPRESS
            </li>

            <li>
              MySQL
            </li>
          </ul>

          <button className='btn btn-outline-info'> <Download/> Download Resume</button>
          </p>

         
      </div>

      </div>

      

    </div>
  )
}
