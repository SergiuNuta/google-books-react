import React, { Component } from "react";
import styles from "./Book.module.scss";

export default class Book extends Component {
    render() {
        // console.log(this.props.bookData)
        const bookData = this.props.bookData.volumeInfo;
        return (
            <div className={styles.bookContainer} key={this.props.bookData.id}>
                <img src={bookData.imageLinks} alt="not working" />
                <p>{bookData.title}</p>
                <p>by</p>
                <p>{bookData.authors}</p>
                <p>Publisher: {bookData.publisher}</p>

            </div>
        );
    }
}