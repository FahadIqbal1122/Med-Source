
import { useRef } from 'react'

const Home = () => {
  const formSectionRef = useRef(null)
  const renderCountSectionRef = useRef(null)
  const ourServices2Ref = useRef(null)
  const rendersRef = useRef(0)

  const scrollToElement = ref => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className='main' ref={formSectionRef}>
        <div className="img1">
          <img src="../public/images/doctor.png" alt="drs" />
        </div>

        <div className='about'>
          <div className='here'>
            <h1>Here</h1>
          </div>

          <div className='intro'>
            <p>The most suitable place to receive <br/>health care and obtain
              medicines <br/>from inside and outside the country</p>
          </div>

          <div className='scroll'>
            <button onClick={() => scrollToElement(renderCountSectionRef)}>
              Our Services
            </button>
            <button onClick={() => scrollToElement(ourServices2Ref)}>
              Let's Start
            </button>
          </div>
        </div>
      </section>

      <section className='ourServices' ref={renderCountSectionRef}>
        <div className="service">
          <img src="../public/images/order-now.png" alt="Order the Medicines" />
          <h3>Order the Medicines</h3>
          <p>Easily order your medicines from the comfort of your home with a few simple clicks.</p>
        </div>
        <div className="service"> 
          <img src="../public/images/talking.png" alt="Communicate with the Pharmacist" />
          <h3>Communicate with the Pharmacist</h3>
          <p>Get professional advice and assistance by directly communicating with our certified pharmacists.</p>
        </div>
        <div className="service"> 
          <img src="../public/images/request.png" alt="Request Medicines" />
          <h3>Request Medicines</h3>
          <p>If the medicine you need is not available, request it, and we will do our best to source it for you.</p>
        </div>
        <div className="service">
          <img src="../public/images/list.png" alt="Create a List of Medicines" />
          <h3>Create a List of Medicines</h3>
          <p>Keep track of your medication by creating and managing a personalized list of medicines.</p>
        </div>
      </section>

      <section className='ourServices2' ref={ourServices2Ref}>
        <div className="service2">
          <img src="../public/images/lm.png" alt="My Medicine" />
          <button>My Medicine</button>
        </div>
        <div className="service2"> 
          <img src="../public/images/om.png" alt="Request Medicine" />
          <button>Request Medicine</button>
        </div>
        <div className="service2"> 
          <img src="../public/images/cp.png" alt="Contact the Pharmacist" />
          <button>Contact the Pharmacist</button>
        </div>
      </section>
    </>
  )
}

export default Home
