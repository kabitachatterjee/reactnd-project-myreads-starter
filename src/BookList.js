import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
render() {
  const { books } = this.props
  let currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
  let read = books.filter(book => (book.shelf === 'read'))
  let wantToRead = books.filter(book => (book.shelf === 'wantToRead'))
  return (
    <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { currentlyReading.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+book.imageLinks.thumbnail+')' }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              { read.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+book.imageLinks.thumbnail+')' }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { wantToRead.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+book.imageLinks.thumbnail+')' }}></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="none" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
      </div>
      )
    }
  }

export default BookList;