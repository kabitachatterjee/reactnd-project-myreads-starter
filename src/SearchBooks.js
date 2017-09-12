import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
  render() {
    return (
      <div className='search-books-bar'>
      <Link to='/' className='close-search'>Close</Link>
      <form className='earch-books-input-wrapper'>
      <input  type='text' placeholder='Search by name or author'/>
      </form>
      </div>
    )
  }
}

export default SearchBooks
