import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiService from './Repository/apiService';
import Books from './components/Books/Books';
import AddBook from './components/Books/AddBook';
import EditBook from './components/Books/EditBook';
import Categories from './components/Categories/Categories';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      authors: [],
      selectedBook: {}
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <main>
          <div className="container">
            <Route path={"/books/add"} exact render={() => <AddBook authors={this.state.authors} onAddBook={this.addBook} />} />
            <Route path={"/books/:id/edit"} exact render={() => <EditBook book={this.state.selectedBook} authors={this.state.authors} onEditBook={this.editBook} />} />
            <Route path={"/books"} exact render={() => <Books books={this.state.books} onDelete={this.deleteBook} onEdit={this.getBook} markAsTaken={this.markAsTaken} />} />
            <Route path={"/categories"} exact render={() => <Categories />} />
            <Route path={"/"} exact render={() => <Books books={this.state.books} onDelete={this.deleteBook} onEdit={this.getBook} />} />
          </div>
        </main>
      </Router>
    );
  }

  componentDidMount() {
    this.loadBooks();
    this.loadAuthors();
  }

  loadBooks = () => {
    apiService.fetchBooks()
      .then((data) => {
        this.setState({
          books: data.data
        })
      });
  }

  loadAuthors = () => {
    apiService.fetchAuthors()
      .then((data) => {
        this.setState({
          authors: data.data
        })
      });
  }

  deleteBook = (id) => {
    apiService.deleteBook(id)
      .then(() => {
        this.loadBooks();
      });
  }

  addBook = (name, category, availableCopies, author) => {
    apiService.addBook(name, category, availableCopies, author)
      .then(() => {
        this.loadBooks();
      })
  }

  getBook = (id) => {
    apiService.getBook(id)
      .then((data) => {
        this.setState({
          selectedBook: data.data
        })
      })
  }

  editBook = (id, name, category, availableCopies, author) => {
    apiService.editProduct(id, name, category, availableCopies, author)
      .then(() => {
        this.loadBooks();
      })
  }

  markAsTaken = (id) => {
    apiService.markAsTaken(id).then(() => {
      this.loadBooks();
    })
  }

}

export default App;
