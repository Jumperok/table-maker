import React from 'react'

// Components //

import Table      from './components/Table/Table'
import Pagination from './components/Pagination/Pagination'
import Search     from './components/Search'
import Empty      from './components/Empty'

const API = 'http://www.mocky.io/v2/5b2b349d30000062002344e1'

class App extends React.Component {
  state = {
    dataFromAPI: [],
    pageSize   : 10,
    currentPage: 1,
    searchField: '',
    rowNumber  : 0,
    sort: {
      field    : '',
      direction: 'up'
    },
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(dataAPI => this.setState({ dataFromAPI: dataAPI }))
      .catch(err => console.log(err))
  }

  setCurrentPage = newCurrentPage => (
    this.setState({ currentPage: newCurrentPage })
  )

  setRowNumber = number => (
    this.setState({ rowNumber: number })
  )

  setSortingField = field => (
    this.setState({ 
      sort: {
        ...this.state.sort, 
        field, 
        direction: (this.state.sort.direction === 'up') 
          ? 'down' 
          : 'up'
      } 
    })
  )

  setSearchField = search => (
    this.setState({ searchField: search })
  )

  render() {
    const { dataFromAPI, pageSize, currentPage, rowNumber } = this.state
    
    return (
      dataFromAPI.length
      ? (
          <React.Fragment>
            <Search setSearchField={ this.setSearchField } />
            <Table 
              tableData={ this.state } 
              setSortingField={ this.setSortingField }
              setRowNumber={ this.setRowNumber }
            />
            <Pagination 
              currentPage={ currentPage } 
              rowNumber={ rowNumber } 
              pageSize={ pageSize } 
              setCurrentPage={ this.setCurrentPage }
            />
          </React.Fragment>
        )
      : <Empty />
    )
  }
}

export default App
