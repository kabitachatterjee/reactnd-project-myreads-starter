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

  shelfUpdate(book, shelf) {
     var bookID = book
     var shelf = shelf
     console.log(bookID)
     console.log(shelf)

     var move_book = this.props.books.filter(book => book.id === bookID)[0]
     console.log(move_book)
     move_book['shelf'] = shelf
    //  this.props.books.concat([move_book])
    //  console.log(this.props.books)
     BooksAPI.update(move_book, shelf).then(response => {
      this.setState({
        books: this.props.books
      })
    })
    //  BooksAPI.update(bookID, shelf).then((results) => {
    //    console.log(results)
    //  })
   }

render() {
  const { books,onShelfUpdate } = this.props
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
            <Shelf books={currentlyReading} name="Currently Reading" onShelfUpdate={(book,shelf) => {this.props.shelfUpdate(book,shelf)}}/>
            <Shelf books={read} name="Read" onShelfUpdate={(book,shelf) => {this.props.shelfUpdate(book,shelf)}}/>
            <Shelf books={wantToRead} name="Want To Read" onShelfUpdate={(book,shelf) => {this.props.shelfUpdate(book,shelf)}}/>
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
