import React from 'react'
// import { fetchData } from './api'
// import { getData } from './lib'

// Components //

import Table from './components/Table/Table'
import Pagination from './components/Pagination'

const API = 'http://www.mocky.io/v2/5b29e2bd30000066009cd055'

class App extends React.Component {
  state = {
    tableData: [],
    pageSize: 10,
    currentPage: 1
  }

  componentDidMount() {
    fetch(API) // ОШИБКИ
      .then(response => response.json())
      .then(dataAPI => this.setState({tableData: dataAPI}))
  }

  render() {
    const { tableData, pageSize, currentPage } = this.state

    return (
      tableData.length
      ? (
          <React.Fragment>
            <Table tableData={ this.state } />
            <Pagination currentPage={ currentPage } rowNumber={ tableData.slice(1).length } pageSize={ pageSize } />
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
