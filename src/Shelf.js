import React, { Component } from 'react';

class Shelf extends Component {
  state = {
    shelf: ''
  }
  change(event){
    console.log(event.target.id)
    console.log(event.target.value)
    const book = event.target.id
    const shelf = event.target.value
         this.setState({shelf: shelf}, function () {
    if(this.props.onShelfUpdate) {
         this.props.onShelfUpdate(book, this.state.shelf)
       }
});

     }

  render() {
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
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+book.imageLinks.thumbnail+')' }}></div>
                        <div className="book-shelf-changer">
                          <select id={book.id} value={book.shelf} onChange={this.change.bind(this)}>
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
