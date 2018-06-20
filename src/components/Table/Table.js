import React from 'react'
import { naturalSort, getFieldIndex } from '../../lib'

// Components //

import TableHeader from './TableHeader'
import TableBody   from './TableBody'

const Table = ({ tableData, setSortingField }) => { 
  const { dataFromAPI, sort } = tableData

  const fieldIndex = getFieldIndex(dataFromAPI[0], sort.field)

  const getNewData = (data, direction, fieldIndex) => {
    const newData = naturalSort(data.slice(1), direction, fieldIndex)
    newData.unshift(data[0])
    return newData
  }

  return (
    <div className='Table'>
      <TableHeader 
        headerData={ dataFromAPI[0] } 
        setSortingField={ setSortingField } 
      />
      <TableBody bodyData={ 
          {
            ...tableData, 
            dataFromAPI: getNewData(dataFromAPI, sort.direction, fieldIndex)
          } 
        }
      /> 
    </div>
  )
}

export default Table