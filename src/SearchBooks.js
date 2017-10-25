import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';

class SearchBooks extends Component {

  state = {
    books: [],
    query: ''
  }

  updateQuery = (event) => {
      const value = event.target.value.trim()
      this.setState({query: value})
      this.bookSearch(value)
    }

  bookSearch = (value) => {
    if (value.length !== 0) {
      BooksAPI.search(value, 10).then((books) => {
        if(books.length>0){
          books = books.filter((book) => book.imageLinks)
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
    const { shelfUpdate } = this.props;
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

          </ol>
          </div>
        </div>
        {this.state.query !== '' && books.length > 0 && (<Shelf title="Search Results" books={books}
        shelfUpdate={this.props.onShelfSelect}/>)}
      </div>


    )
  }
}

export default SearchBooks
