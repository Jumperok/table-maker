import React from 'react'

const TableRowColumn = ({ 
  type, 
  children, 
  handleClick, 
  rowData 
}) => {
  const getKeyByValue = (object, value) => (
    Object.keys(object)
      .find(key => object[key] === value)
  )

  const setSortingField = () => {
    handleClick(getKeyByValue(rowData, children))
  }

  const clickFromType = {
    header: setSortingField
  }

  return (
    <div 
      className='TableRowColumn' 
      onClick={ clickFromType[type] }
    >
      { children }
    </div>
  )
}

export default TableRowColumn