import React from 'react'

// Components //

import TableRow from './TableRow'

const TableBody = ({ bodyData }) => {

  const { tableData, pageSize, currentPage } = bodyData

  const showingData = (bodyData, pageSize, currentPage) => {
    return bodyData.map(
      row => <TableRow className='TableRow' key={row[0]} rowData={row} />
    ).slice((currentPage-1)*pageSize, (currentPage-1)*pageSize+pageSize)
  }
  
  return (
    <div className='TableBody'>
      {
        showingData(tableData.slice(1), pageSize, currentPage)
      }
    </div>
  )
}

export default TableBody