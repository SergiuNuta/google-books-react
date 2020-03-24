import React, { Component } from 'react';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <header className={styles.appHeader}>
        <input 
                className={styles.searchBar}
                placeholder="Enter name..."
                
            />
        </header>
        <div className={styles.bookContainer}>Book</div>
        <div className={styles.detailsContainer}>Details</div>
      </div>
    );
  }

}

export default App;
