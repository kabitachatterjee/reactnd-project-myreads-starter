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

  // bookSearch(bookQuery) {
  //   BooksAPI.search(bookQuery, 20).then((results) => {
  //     const checkBookShelf = results.map(book => {
  //       this.state.bookShelf.forEach(b => {
  //         if (book.id === b.id) {
  //           book.shelf = b.shelf
  //         } else {
  //           book.shelf = "none"
  //         }
  //       })
  //       return book
  //     })
  //     this.setState({ books: checkBookShelf })
  //   })
  // }
  render() {
    return (
      <div>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
      </div>
      <div className='search-books-bar'>
      <Link to='/' className='close-search'>Close</Link>
      <form onSubmit={this.handleSubmit} className='search-books-input-wrapper'>
      <input type='text' name='query' placeholder='Search by title or author'/>
      </form>
      </div>

      </div>

    )
  }
}

export default SearchBooks
