import React from 'react'

const PaginationElement = ({ children, setCurrentPage }) => {
  const handleClick = () => {
    setCurrentPage(children)
  }

  return (
    <div 
      className='PaginationElem' 
      onClick={ handleClick }
    >
      { children }
    </div>
  )
}

export default PaginationElement