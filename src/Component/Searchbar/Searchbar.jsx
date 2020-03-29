import React, { Component } from "react";
import styles from "./Searchbar.module.scss";

export default class Searchbar extends Component {
    render() {
        return(
            <section className={styles.searchDiv}>
            <input 
                className={styles.searchBar}
                placeholder="Enter title..."
                value={this.props.searchText}
                onChange={this.props.setSearchText}
                
            />
            </section>
        );
    }
}