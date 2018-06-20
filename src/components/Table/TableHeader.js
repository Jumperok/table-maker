import React from 'react'

// Components //

import TableRow from './TableRow'

const TableHeader = ({ headerData }) => ( 
  <TableRow rowData={ headerData } className='TableHeader'/>
)

export default TableHeader