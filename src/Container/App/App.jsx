import React, { Component } from 'react';
import styles from './App.module.scss';
import Searchbar from "../../Component/Searchbar/Searchbar";
import axios from "axios";
import Booklist from "../../Component/Booklist/Booklist";
import Book from '../../Component/Book/Book';

class App extends Component {
  state = {
    books: [],
    searchText: "",
    filteredBook: [],
    urlAPI:`https://www.googleapis.com/books/v1/volumes?`
  }

  setSearchText = (event) => {
    const searchText = event.target.value;
    this.setState({ searchText }, this.filteredBook);
    // console.log(searchText);
  }

  filteredBook = () => {
    
    let filteredBook = this.state.books.filter(book => {
      return book.volumeInfo.title.includes(this.state.searchText);
    });
    this.setState({ filteredBook });
    // console.log(this.state.books);
  }

  async componentDidMount() {
    const apikey = "AIzaSyDScmM5ENVC7uIPYNLWGz1711wVjAlc9MM";
    const res = await axios.get(`${this.state.urlAPI}q=${this.state.searchText}&key=${apikey}&maxResults=40`);
    this.setState({ books: res.data['items'], filteredBook: res.data['items'] });
    // console.log(this.state.books);
  }

  render() {
    // console.log(this.state.filteredBook);
    return (
      <div className={styles.wrapper}>
        <header>
          <h1>Book finder</h1>
          <Searchbar searchText={this.state.searchText} setSearchText={this.setSearchText} />
        </header>
        <Booklist bookData={this.state.filteredBook} />
      </div>
    );
  }

}

export default App;
