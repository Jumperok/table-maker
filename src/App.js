import React from 'react'
// import { fetchData } from './api'
// import { getData } from './lib'

// Components //

import Table      from './components/Table/Table'
import Pagination from './components/Pagination'

const API = 'http://www.mocky.io/v2/5b29e2bd30000066009cd055'

class App extends React.Component {
  state = {
    dataFromAPI : [],
    pageSize    : 10,
    currentPage : 1,
    sort: {
      field: '',
      direction: ''
    }
    //sortingField: ''
  }

  componentDidMount() {
    fetch(API) // ОШИБКИ
      .then(response => response.json())
      .then(dataAPI => {
        this.setState({ dataFromAPI: dataAPI })
      })
  }

  setCurrentPage = (newCurrentPage) => this.setState({ currentPage: newCurrentPage })

  setSortingField = (field) => this.setState({ sort: {...this.state.sort, field} })

  render() {
    const { dataFromAPI, pageSize, currentPage } = this.state
    
    return (
      dataFromAPI.length
      ? (
          <React.Fragment>
            <Table 
              tableData={ this.state } 
              setSortingField={ this.setSortingField } 
            />
            <Pagination 
              currentPage={ currentPage } 
              rowNumber={ dataFromAPI.slice(1).length } 
              pageSize={ pageSize } 
              setCurrentPage={ this.setCurrentPage }
            />
          </React.Fragment>
        )
      : null
    )
  }
}

export default App;

/* <TableHeader>
<TableRow>
  <TableHeaderColumn>1</TableHeaderColumn>
  <TableHeaderColumn>2</TableHeaderColumn>
  <TableHeaderColumn>3</TableHeaderColumn>
</TableRow>
</TableHeader>
<TableBody>
<TableRow>
  <TableRowColumn>
    lol
  </TableRowColumn>
  <TableRowColumn>
    lol1
  </TableRowColumn>
  <TableRowColumn>
    lol2
  </TableRowColumn>
</TableRow>
</TableBody> */
