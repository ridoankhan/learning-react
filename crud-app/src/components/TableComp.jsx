import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'

const TableComp = () => {
  let [data, setData] = useState(null)
  let [showData, setShowData] = useState(false)

  const handleFetchData = () => {
    setData(data)
    setShowData(true)
  }

  const hideAlldata = () => {
    setShowData(false)
    setData(null)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        )
        const result = await response.json()
        setData(result)
        setShowData(true)
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }

    fetchData()

    return () => {}
  }, [])
  return (
    <div>
      <button onClick={handleFetchData}>Fetch Data from API</button>
      {showData && data ? (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>User Id</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el) => (
                <tr key={el.id}>
                  <td>{el.userId}</td>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{el.body}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div>No data found</div>
      )}

      <button onClick={hideAlldata}>Hide Data</button>
    </div>
  )
}

export default TableComp
