import React from 'react'

// Components //

import TableHeader from './TableHeader'
import TableBody   from './TableBody'

const Table = ({ tableData }) => { // state


  return (
    <div className='Table'>
      <TableHeader headerData={ Object.values(tableData.tableData[0]) } />
      <TableBody bodyData={ tableData } />
    </div>
  )
}

export default Table