import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';

class SearchBooks extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, {hash: true})
    console.log(values);
    if(this.props.onSearchBooks) {
      this.props.onSearchBooks(values)
    }
  }
  render() {
    return (
      <div className='search-books-bar'>
      <Link to='/' className='close-search'>Close</Link>
      <form onSubmit={this.handleSubmit} className='search-books-input-wrapper'>
      <input type='text' name='name' placeholder='Search by name or author'/>
      </form>
      </div>
    )
  }
}

export default SearchBooks
