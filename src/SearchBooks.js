import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import Shelf from './Shelf';

class SearchBooks extends Component {

  state = {
    books: [],
    query: ''
  }

  updateQuery = (event) => {
      const value = event.target.value.trim()
      this.setState({query: value})
      console.log(this.state.query)
      //this.searchData(value)
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
    const books = this.state.books
    const query = this.state.query
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={this.updateQuery}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        {this.state.query !== '' && books.length > 0 && (<Shelf title="Search Results" books={books} onShelfChange={(id, shelf) => {
          this.props.onShelfChange(id, shelf)
        }}/>)}
      </div>


    )
  }
}

export default SearchBooks
