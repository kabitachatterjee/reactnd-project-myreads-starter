import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';

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
    })
  }



  searchBooks(query) {
    BooksAPI.search(query, 20).then ( books => {if(books.error) { return books.error }})
    //   this.setState(state => ({
    //     allBooks: state.allBooks.concat([ books ])
    //   }))
    // })
  }

  render() {
    return (
      <div className="app">
      <Route path='/search' render={() => (<SearchBooks
        onSearchBooks={(query) => {this.searchBooks(query)}} />)} />
        <Route exact path='/' render={() => (<BookList books={this.state.allBooks} />)} />
        </div>
    )
  }
}

export default BooksApp
