import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfUpdate: PropTypes.func.isRequired
    }

  render() {
     const { books, shelfUpdate } = this.props;
    return(
      <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            { this.props.books.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                    { typeof(book.imageLinks) !== 'undefined' &&
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+book.imageLinks.thumbnail+')' }}></div>
                    }
                      { typeof(book.imageLinks) === 'undefined'  &&
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(http://via.placeholder.com/128x193?text=No%20Cover)' }}></div>
                      }
                        <div className="book-shelf-changer">
                          <select id={book.id} value={book.shelf} onChange={shelfUpdate}>
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
        </div></div>
    )
  }
}

export default Shelf
