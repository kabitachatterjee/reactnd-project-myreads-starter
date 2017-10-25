import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    allBooks: []
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
      <Route exact path='/' render={() => (<BookList books={this.state.allBooks} shelfUpdate={this.shelfUpdate} />)} />
      <Route path='/search' render={(history) => (<SearchBooks books={this.state.books}
        onShelfChange={(event) => {
            this.shelfUpdate(event)
            history.history.push('/')
        }}/>
      )} />
    </div>
    )
  }
}

export default BooksApp;
