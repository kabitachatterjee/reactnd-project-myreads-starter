import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';

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

  bookSearch = (value) => {
    if (value.length !== 0) {
      BooksAPI.search(value, 10).then((books) => {
        if(books.length>0){
          books = books.filter((book) => book.id)
          console.log(books)
          //books = this.mergeArr(books,this.props.myBooks)
          this.setState({books})
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
            <ol className="books-grid"></ol>
          </div>
        </div>
        {this.state.query !== '' && books.length > 0 && (<Shelf title="Search Results" books={books} />)}
      </div>


    )
  }
}

export default SearchBooks
