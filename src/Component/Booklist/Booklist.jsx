import React, { Component } from "react";
import Book from "../Book/Book";
import styles from "./Booklist.module.scss";

export default class Booklist extends Component {
    render() {
        // console.log(this.props.bookData)
        return (
            <>
                {this.props.bookData ? (
                    <section className={styles.card}>
                        {this.props.bookData.map((book) => (
                            <Book bookData={book} key={book.id}  user={this.props.user}/>
                            
                        ))}
                        
                    </section>) : (
                        <h1>Loading data...</h1>
                    )}
                    
            </>
        );
    }
}