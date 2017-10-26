import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {

  state = {
    books: [],
    query: ''
  }

  updateQuery = (event) => {
      const value = event.target.value
      this.setState({query: value})
      this.bookSearch(value)
    }

  bookSearch = (value) => {
    if (value.length !== 0) {
      BooksAPI.search(value, 20).then((books) => {
        if(books.length>0){
          books.forEach(function(book){
            return book.shelf= 'None';
          });

          console.log(books)
          this.setState({books: books})
        }
        else{
          this.setState({books: []})
        }
      })
    } else {
      this.setState({books: [], query: ''})
    }
  }
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
          <ol className="books-grid">
          {this.state.query !== '' && books.length === 0 && (<div className="search-books-title">Sorry, no results</div>)}
        </ol>
            <ol className="books-grid">
            {this.state.query !== '' && books.length > 0 && (<Shelf name="Search Results" books={books}
            shelfUpdate={this.props.onShelfChange}/>)}
          </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBooks
