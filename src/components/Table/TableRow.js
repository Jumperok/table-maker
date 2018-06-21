import React from 'react'

// Components //

import TableRowColumn from './TableRowColumn'

const TableRow = ({ rowData, className, handleClick, type }) => {
  return(
  <div 
    className={ className } 
    
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