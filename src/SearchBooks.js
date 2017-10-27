import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';
import { PropTypes } from 'prop-types';

class SearchBooks extends Component {
  static propTypes = {
    allbooks: PropTypes.array.isRequired
  }
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
    var myBooks = this.props.allbooks;
    if (value.length !== 0) {
      BooksAPI.search(value, 20).then((books) => {
        if(books.length){
          books.forEach((book, index) => {
                        let myBook = myBooks.find((b) => b.id === book.id);
                      return  book.shelf = myBook ? myBook.shelf : 'none';
                    });

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
