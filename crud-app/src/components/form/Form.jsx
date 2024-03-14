import { useState } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Form = () => {
  let [showData, setShowData] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    hobbies: [],
    email: '',
  })

  const handleChange = (e) => {
    if (e.target.name === 'hobbies') {
      console.log(e.target.value)
      e.target.value = e.target.value.split(',')
    }
    // console.log(...formData)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Form Submitted successfully')
        console.log(
          `Form submitted successfully: ${JSON.stringify(data, null, 2)}`
        )
      })
    showData = false
  }

  const showForm = () => {
    setShowData(true)
  }

  const hideForm = () => {
    setShowData(false)
  }

  return (
    <div className='container mt-3' style={{ marginLeft: '0px' }}>
      <h4>Handling Form</h4>
      <button onClick={showForm}>Show Form</button>
      <button onClick={hideForm}>Hide Form</button>
      {showData && (
        <form onSubmit={handleSubmit} className='col-4'>
          <div className='mb-3'>
            <label className='form-label'>First Name:</label>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              className='form-control'
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Last Name:</label>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              className='form-control'
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Age:</label>
            <input
              type='text'
              name='age'
              value={formData.age}
              className='form-control'
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Hobbies:</label>
            <input
              type='text'
              name='hobbies'
              // value={formData.hobbies}
              value={formData.hobbies}
              className='form-control'
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Email:</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              className='form-control'
              onChange={handleChange}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit Form
          </button>
        </form>
      )}
    </div>
  )
}

export default Form
