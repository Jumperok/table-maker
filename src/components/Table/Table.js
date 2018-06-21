import React from 'react'
import { naturalSort, getFieldIndex } from '../../lib'

// Components //

import TableHeader from './TableHeader'
import TableBody   from './TableBody'

const Table = ({ 
  tableData, 
  setSortingField, 
  setRowNumber, 
  setSelectedId 
}) => { 
  const { dataFromAPI, sort, searchField, rowNumber } = tableData

  const getSortedData = (data, direction, fieldIndex) => {
    const newData = naturalSort(data.slice(1), direction, fieldIndex)
    newData.unshift(data[0])
    return newData
  }

  const getFilterData = (data, searchField) => {
    const bodyData = data.slice(1)
    let filteredData = bodyData.filter(arrElem => (
      arrElem.some(elem => (
        ~((""+elem).indexOf(searchField))
      ))
    ))
    filteredData.unshift(data[0])
    return filteredData
  }

  const updateRowNumber = (newNumber, currentNumber) => {
    newNumber !== currentNumber && setRowNumber(newNumber)
  }

  const fieldIndex = getFieldIndex(dataFromAPI[0], sort.field)

  const newData = getFilterData(
    getSortedData(dataFromAPI, sort.direction, fieldIndex),
    searchField
  ) 

  updateRowNumber(newData.slice(1).length, rowNumber)

  return (
    <div className='Table'>
      <TableHeader 
        headerData={ dataFromAPI[0] } 
        setSortingField={ setSortingField } 
      />
      <TableBody 
        bodyData={ 
          {
            ...tableData, 
            dataFromAPI: newData
          } 
        }
        setSelectedId={ setSelectedId }
      /> 
    </div>
  )
}

export default Table