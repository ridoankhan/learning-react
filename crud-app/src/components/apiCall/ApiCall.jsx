import { useState } from 'react'
// import Table from 'react-bootstrap/Table'
import Card from '../card/Card'
import '../card/card.css'

const StateManage = () => {
  let [data, setData] = useState(null)
  let [showData, setShowData] = useState(0)
  let [loading, setLoading] = useState(false)

  const handleFetchData = () => {
    setLoading(true)
    fetch(
      'https://jsonplaceholder.typicode.com/photos?page=1&limit=20',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        result = JSON.parse(result)
        setData(result)
        setShowData(1)
      })
      .catch((error) => {
        setShowData(2)
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const hideAlldata = () => {
    setShowData(false)
    setData(null)
  }

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  }

  // useEffect(() => {
  //   fetch(
  //     'https://jsonplaceholder.typicode.com/photos?page=1&limit=20',
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => {
  //       result = JSON.parse(result)
  //       setData(result)
  //       setShowData(true)
  //     })
  //     .catch((error) => console.log('error', error))

  //   return () => {}
  // }, [])

  return (
    <div>
      <h4>API Call and useEffect</h4>
      {loading && (
        <div>
          <img src={'giphy.gif'} alt='Loader' width='480' height='360' />
        </div>
      )}
      <button onClick={handleFetchData}>Fetch Data from API</button>
      <button onClick={hideAlldata}>Hide Data</button>

      {showData === 1 && data ? (
        <div className='card-container'>
          {data.length !== 0 &&
            data.map((el) => (
              <Card
                key={el.id}
                title={el.title}
                body={el.thumbnailUrl}
                imageUrl={el.url}
              />
            ))}
        </div>
      ) : showData === 2 && !data ? (
        <div>No data found</div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default StateManage
