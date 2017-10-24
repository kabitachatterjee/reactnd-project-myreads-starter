import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfUpdate: PropTypes.func.isRequired
  }

render() {
  const { books, shelfUpdate } = this.props;
  let currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
  let read = books.filter(book => (book.shelf === 'read'))
  let wantToRead = books.filter(book => (book.shelf === 'wantToRead'))
  return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf books={currentlyReading} name="Currently Reading" shelfUpdate={shelfUpdate}/>
            <Shelf books={read} name="Read" shelfUpdate={shelfUpdate}/>
            <Shelf books={wantToRead} name="Want To Read" shelfUpdate={shelfUpdate}/>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      </div>
      )
    }
  }

export default BookList;
