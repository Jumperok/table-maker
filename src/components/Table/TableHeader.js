import React from 'react'

// Components //

import TableRow from './TableRow'

const TableHeader = ({ headerData, setSortingField }) => ( 
  <TableRow 
    type='header'
    rowData={ headerData } 
    className='TableHeader'
    handleClick={ setSortingField }
  />
)

export default TableHeader