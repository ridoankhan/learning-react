import { useState } from 'react'

const Post = () => {
  const [showFullName, setShowFullName] = useState(false)
  const firstName = 'Ridoan'
  const lastName = 'Khan'

  const handleButtonClick = () => {
    setShowFullName(true)
  }

  const hideTheData = () => {
    setShowFullName(false)
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Show Full Name</button>
      {showFullName && <p>{`${firstName} ${lastName}`}</p>}

      <button onClick={hideTheData}>Hide the name</button>
    </div>
  )
}

export default Post
