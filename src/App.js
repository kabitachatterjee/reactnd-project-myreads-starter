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

  shelfUpdate = (event) => {
    BooksAPI.update({id: event.target.id}, event.target.value).then((response) => {
       BooksAPI.getAll().then((books) => {
        this.setState({allBooks: books})
      });
    });
  }


  render() {
    return (
      <div className="app">
      <Route path='/search' render={() => (<SearchBooks books={this.state.books}
        onChangeShelf={this.changeShelf} />)} />
        <Route exact path='/' render={() => (<BookList books={this.state.allBooks} shelfUpdate={this.shelfUpdate} />)} />
        </div>
    )
  }
}

export default BooksApp
