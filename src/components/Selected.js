import React from 'react'

const Selected = ({ fieldsName, fieldsValue }) => {
  
  return (
    fieldsValue
    ? <div className='Selected'>
        Выбранный товар:
        <div className='fieldsName'>
          {
            fieldsName.map((name, index) => (
              <div key={index}>{name}:</div>
            ))
          }
        </div>
        <div className='fieldsValue'>
          {
            fieldsValue.map((value, index) => (
              <div key={index}>{value}</div>
            ))
          }
        </div>
      </div>
    : null
  )
}

export default Selected
