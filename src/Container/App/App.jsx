import React, { Component } from 'react';
import styles from './App.module.scss';
import Searchbar from "../../Component/Searchbar/Searchbar";
import axios from "axios";
import Routes from '../../routes/Routes';
import Header from '../../Component/Header/Header';


class App extends Component {
  state = {
    books: [],
    searchText: "",
    filteredBook: [],
    urlAPI:`https://www.googleapis.com/books/v1/volumes?`
  }

  setSearchText = (event) => {
    event.preventDefault();
    const searchText = event.target.value;
    const apikey = "AIzaSyB0seXccvK4y9EfPBho86Aj0WcTtjfeEa8";
    axios.get(`${this.state.urlAPI}q=${searchText}+intitle&key=${apikey}&maxResults=40`)
      .then(res => {
        this.setState({ 
          books: res.data['items'], 
          filteredBook: res.data['items']
        }); 
      })
      .catch(error => {
        console.log(error)
      })
  }
  

  render() {
    return (
      <div className={styles.wrapper}>
        <header>
          <Header />
          <Searchbar setSearchText={this.setSearchText} />
        </header>
        <Routes bookData={this.state.filteredBook} />
      </div>
    );
  }

}

export default App;
