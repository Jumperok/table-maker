import React from 'react'

// Components //

import TableRowColumn from './TableRowColumn'

const TableRow = ({ 
  rowData, 
  className, 
  handleClick, 
  type, 
  setSelectedId 
}) => {
  const handleRowClick = event => {
    setSelectedId(event.currentTarget.firstChild.innerText)
  }

  return(
  <div 
    className={ className } 
    onClick={ (type === 'body') ? handleRowClick : null }
  >
    {
      Object.values(rowData).map(
        (value, index) => (
          <TableRowColumn 
            rowData={ rowData }
            type={ type } 
            handleClick={ handleClick }
            key={ index }
          >
            { value }
          </TableRowColumn>
        )
      )
    }
  </div>)
}

export default TableRow