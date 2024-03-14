// import React from 'react'
import './card.css'

const Card = (props) => {
  const { title, body, imageUrl } = props
  return (
    <div className='card'>
      <img src={imageUrl} alt={title} className='card-image' />
      <div className='card-content'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-description'>{body}</p>
      </div>
    </div>
  )
}

export default Card
