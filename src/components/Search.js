import React from 'react'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange = event => this.setState({ value: event.target.value })
  
  findString = event => {
    event.preventDefault()
    this.props.setSearchField(this.state.value)
  }

  render() {
    return (
      <div className='search'>
        <form onSubmit={ this.findString }>
          <input placeholder='Search...' onChange={ this.handleChange } />
          <input type='submit' value='find' className='input' />
        </form>
      </div>
    )
  }
}


// const Search = () => {
//   const findString = () => {}

//   return (
//     <div className='search'>
//       <form onSubmit={findString}>
//         <input placeholder='Search...'/>
//         <input type='submit' value='find' />
//       </form>
//     </div>
//   )
// }

export default Search