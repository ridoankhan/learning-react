import { useState } from 'react'

const StateManage = () => {
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
      <h4>State Management Using useState</h4>

      <button onClick={handleButtonClick}>Show Full Name</button>
      <button onClick={hideTheData}>Hide the name</button>
      {showFullName && <p>{`${firstName} ${lastName}`}</p>}
    </div>
  )
}

export default StateManage
