import React from 'react'

// Components //

import TableRowColumn from './TableRowColumn'

const TableRow = ({ rowData, className }) => {
  return(
  <div className={ className }>
    {
      rowData.map(
        (value, index) => <TableRowColumn key={ index }>{ value }</TableRowColumn>
      )
    }
  </div>)
}

export default TableRow