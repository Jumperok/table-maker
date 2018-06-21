import React from 'react'

// Components //

import TableRow from './TableRow'

const TableBody = ({ bodyData, setSelectedId }) => {

  const { dataFromAPI, pageSize, currentPage } = bodyData

  const onOnePageData = (bodyData, pageSize, currentPage) => (
    bodyData.map(
      row => (
        <TableRow 
         setSelectedId={ setSelectedId }
          type='body'
          className='TableRow' 
          key={ row[0] } 
          rowData={ row } 
        />
      )
    ).slice( (currentPage-1)*pageSize, (currentPage-1)*pageSize+pageSize )
  )
  
  return (
    <div className='TableBody'>
      {
        onOnePageData(dataFromAPI.slice(1), pageSize, currentPage)
      }
    </div>
  )
}

export default TableBody