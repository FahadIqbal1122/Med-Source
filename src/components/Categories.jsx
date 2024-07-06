import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate = useNavigate()

  const handleSubmit = async (category) => {
    navigate(`${category}`)
  }

  return (
    <>
      {' '}
      <h1>Categories</h1>
      <div className="Category-container">
        <div className="Category-container1">
          <section>
            <button onClick={() => handleSubmit('vitamins')}>
              {' '}
              <img src="../public/images/Vitamins.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleSubmit('minerals')}>
              <img src="../public/images/minerals.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleSubmit('supplements')}>
              <img src="../public/images/supplements.png" />
            </button>
          </section>
        </div>
        <div className="Category-container2">
          <section>
            <button onClick={() => handleSubmit('Common-Conditions')}>
              <img src="../public/images/Common-Conditions.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleSubmit('Skin-Care')}>
              <img src="../public/images/Skin-Care.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleSubmit('Bath-Shower')}>
              <img src="../public/images/Bath-Shower.png" />
            </button>
          </section>
        </div>
        <div className="Category-container3">
          <section>
            <button onClick={() => handleSubmit('Baby-Skin')}>
              <img src="../public/images/Baby-Skin.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleSubmit('Health-Accessories')}>
              <img src="../public/images/Health-Accessories.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleSubmit('Hair')}>
              <img src="../public/images/Hair.png" />
            </button>
          </section>
        </div>
      </div>
    </>
  )
}

export default Categories
