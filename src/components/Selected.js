import React from 'react'

const Selected = ({ fieldsName, fieldsValue }) => {
  
  return (
    fieldsValue
    ? <div className='Selected'>
        Выбранный товар:
        <div className='fieldsName'>
          {
            fieldsName.map(name => <div>{name}:</div>)
          }
        </div>
        <div className='fieldsValue'>
          {
            fieldsValue.map(value => <div>{value}</div>)
          }
        </div>
      </div>
    : null
  )
}

export default Selected
