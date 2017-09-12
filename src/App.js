import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false //true
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        allBooks: books
        // currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
        // read: books.filter(book => (book.shelf === 'read')),
        // wantToRead: books.filter(book => (book.shelf === 'wantToRead'))
      })
      console.log(this.state.allBooks)
      // console.log(this.state.currentlyReading)
      // console.log(this.state.read)
      // console.log(this.state.wantToRead)
    })
  }

  render() {
    return (
      <div className="app">
      {this.state.showSearchPage && (
        <SearchBooks />
      )}
      {!this.state.showSearchPage && (
        <BookList books={this.state.allBooks} />
      )}


      </div>
    )
  }
}

export default BooksApp
