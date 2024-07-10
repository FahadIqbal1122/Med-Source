import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate = useNavigate()

  const handleNavigate = async (category) => {
    navigate(`/ProductCate/${category}`)
  }

  return (
    <>
      {' '}
      <h1 className="cateh1">Categories</h1>
      <div className="Category-container">
        <div className="Category-container1">
          <section>
            <button onClick={() => handleSubmit('vitamins')}>
              {' '}
              <img width={500} src="../public/images/Vitamins.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleSubmit('minerals')}>
              <img width={500} src="../public/images/minerals.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleSubmit('supplements')}>
              <img width={500} src="../public/images/supplements.png" />
            </button>
          </section>
        </div>
        <div className="Category-container2">
          <section>
            <button onClick={() => handleSubmit('Common-Conditions')}>
              <img width={500} src="../public/images/Common-Conditions.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleNavigate('Skin Care')}>
              <img width={500} src="../public/images/Skin-Care.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleSubmit('Bath-Shower')}>
              <img width={500} src="../public/images/Bath-Shower.png" />
            </button>
          </section>
        </div>
        <div className="Category-container3">
          <section>
            <button onClick={() => handleSubmit('Baby-Skin')}>
              <img width={500} src="../public/images/Baby-Skin.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleSubmit('Health-Accessories')}>
              <img width={600} src="../public/images/Health-Accessories.png" />
            </button>
          </section>
          <section>
            <button onClick={() => handleSubmit('Hair')}>
              <img width={500} src="../public/images/Hair.png" />
            </button>
          </section>
        </div>
      </div>
    </>
  )
}

export default Categories
