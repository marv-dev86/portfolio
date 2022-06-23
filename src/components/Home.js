import { useNavigate } from "react-router-dom"

export const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="container text-light d-flex justify-content-center flex-column align-items-start h-75">

      <h1 style={{
        fontSize:"4rem"
      }}>Hello, <br />
      I am <span className="text-info">Marvs,</span> <br />
      Front End Developer 


      </h1>

      <p>
        From Guatemala city
      </p>

      <button className="btn btn-outline-info"
        onClick={()=>navigate('/contact/form')}>
        Let's get in touch
      </button>
    </div>
  )
}

