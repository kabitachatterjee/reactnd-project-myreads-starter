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
      })
      console.log(this.state.allBooks)
    })
  }

  handleShelfUpdate(book, shelf) {
    //  var bookId = book
    //  var shelfTo = shelf
    //  console.log(bookId)
    //  console.log(shelfTo)
    //  BooksAPI.update(bookId, shelfTo).then(books => {
    //    console.log(books)
    //   this.setState(state => ({
    //     allBooks: state.allBooks
    //   }))
    //   console.log(this.state.allBooks)
    // })
    BooksAPI.update(book, shelf).then(response => {
      this.getBooksOnShelf();
    })
  }
    getBooksOnShelf() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      })
    })
  }




    //  var move_book = this.state.allBooks.filter(book => book.id === bookID)
    //  move_book[0]['shelf'] = shelf




  // searchBooks(query) {
  //   BooksAPI.search(query, 20).then ( books => {if(books.error) { return books.error }})
  //   //   this.setState(state => ({
  //   //     allBooks: state.allBooks.concat([ books ])
  //   //   }))
  //   // })
  // }

  render() {
    return (
      <div className="app">
      <Route path='/search' render={() => (<SearchBooks
        onSearchBooks={(query) => {this.searchBooks(query)}} />)} />
        <Route exact path='/' render={() => (<BookList books={this.state.allBooks} shelfUpdate={this.handleShelfUpdate} />)} />
        </div>
    )
  }
}

export default BooksApp
