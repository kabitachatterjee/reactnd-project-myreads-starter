import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  state = {
    shelf: ''
  }
  // console.log(this.state)

  updateSelect = (book) => {
    console.log(book)
    this.setState({
      shelf: book.shelf
    })
    if(this.props.onShelfUpdate) {
      this.props.onShelfUpdate(book)
    }
    //this.book.shelf = this.state.selectValue
  }

render() {
  const { books } = this.props
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
            <Shelf books={currentlyReading} name="Currently Reading" />
            <Shelf books={read} name="Read" />
            <Shelf books={wantToRead} name="Want To Read" />
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
