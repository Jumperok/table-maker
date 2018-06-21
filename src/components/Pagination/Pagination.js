import React from 'react'

// Components //

import PaginationElement from './PaginationElement'

const Pagination = ({ currentPage, rowNumber, pageSize, setCurrentPage }) => {
  const pages = Math.ceil(rowNumber/pageSize)
  const arrayFromPages = Array.from({ length: pages }, (v, k) => k+1)

  return (
    <div className='Pagination'>
        {
          arrayFromPages.map(
            (_, index) => (
              <PaginationElement 
                setCurrentPage={ setCurrentPage } 
                key={index}
              >
                {index+1}
              </PaginationElement>
            )
          )
        }
    </div>
  )
}

export default Pagination