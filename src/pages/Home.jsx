import {  useRef } from 'react'

const Home = () => {
  const formSectionRef = useRef(null)
  const renderCountSectionRef = useRef(null)
  const rendersRef = useRef(0)

  const scrollToElement = ref => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div>
        <img className="img1" src="../public/images/doctor.png" alt="drs" />
      </div>

      <section className='here' ref={formSectionRef}>
        <h1>Here</h1>
        <div className='intro'>
          <p>The most suitable place to receive health care and obtain 
            medicines from inside and outside the country</p>
        </div>
        <div className='services'>
        <button onClick={() => scrollToElement(renderCountSectionRef)}>
          Our Services
        </button>
        <button onClick={() => scrollToElement(renderCountSectionRef)}>
          Let's Start
        </button>
        </div>
      </section>








<br />
      <section className='ourServices' ref={renderCountSectionRef}>
        <div>
          Order the medicines
        </div>
        <div>
          Communicate with the pharmacist
        </div>
        <div>
          Request the medicines not in stock or not available in Bahrain
        </div>
        <div>
          Create a list of medicines
        </div>
        <button onClick={() => scrollToElement(formSectionRef)}>
          Scroll to Form
        </button>
      </section>
    </>
  )
}
export default Home
