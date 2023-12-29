import { useState } from 'react'
import data from './data'
import './styles.css'

export default function Accordian() {
  const [selected, setSelected] = useState(null)

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId)
  }
  console.log(selected)
  return (
    <div className='wrapper'>
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='item' key={dataItem.id}>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className='title'
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
                <div>
                  {selected === dataItem.id ? (
                    <div className='content'>{dataItem.answer}</div>
                  ) : null}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  )
}
