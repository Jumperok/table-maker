import React from 'react'

import { getKeyByValue } from '../../lib'

const TableRowColumn = ({ 
  type, 
  children, 
  handleClick, 
  rowData 
}) => {

  const setSortingField = () => {
    handleClick(getKeyByValue(rowData, children))
  }

  return (
    <div 
      className={ (type === 'header') ? 'TableHeaderRowColumn' : 'TableRowColumn' } 
      onClick={ (type === 'header') ? setSortingField : null }
    >
      { children }
    </div>
  )
}

export default TableRowColumn