import './style.css'
import titleImage from '../../assets/title_image.png'
import profileImage from '../../assets/profile_image.jpg'

function Card() {
  return (
    <>
      <div>
        <div className='card'>
          <img src={titleImage} alt='title_image' className='titleImage' />
          <p className='category'> Learning</p>
          <span>Published 21 Dec 2023</span>
          <h3>HTML & CSS foundations</h3>
          <p>
            These language are the backbone of every website, defining
            structure, content and presentation.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src={profileImage}
              alt='profile_image'
              className='profile-image'
            />
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '15px',
              }}
            >
              Greg Hopper
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
