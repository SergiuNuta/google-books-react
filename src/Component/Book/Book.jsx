import React, { Component } from "react";
import styles from "./Book.module.scss";
import { firebase, firestore } from "../../firebase";

export default class Book extends Component {
    state = {
        isFaceUp: true
    }

    handleClick = () => {
        this.setState({
            isFaceUp: !this.state.isFaceUp
        })
    }
    get title() {
        const bookData = this.props.bookData.volumeInfo;
        const title = bookData.title;
        return title.length > 50
            ? title.substring(0, 50) + "..."
            : title;
    }

    handleSave = (event) => {
        event.preventDefault();
        console.log(this.props.bookData)
        firestore
            .collection("google-books")
            // .doc(this.props.user.uid)
            .add({
                ...this.props.bookData,
                addedBy: this.props.user.uid
            })
            .then(() => {
                console.log("It worked!")
            })
    }

    render() {
        // console.log(this.props.bookData)
        const rotateStyle = this.state.isFaceUp ? "" : styles.cardRotated;
        const bookData = this.props.bookData.volumeInfo;
        return (
            <article
                onClick={this.handleClick}
                className={`${styles.card} ${rotateStyle}`} >
                <div className={styles.bookContainer} key={this.props.bookData.id}>
                    <img
                        src={(bookData.imageLinks != null) ? bookData.imageLinks.thumbnail : "http://tiny.cc/vuzxlz"}
                        alt="not working"
                        className="coverImage" />
                    <p>{this.title}</p>
                    <p className={styles.smallFont}>
                        --- by ---
                    </p>
                    <p className={styles.smallFont}>
                        {bookData.authors}
                    </p>
                    <button onClick={this.handleSave}>Save the book</button>
                    <div className={styles.cardBack}></div>
                    {/* <p>Publisher: {bookData.publisher}</p> */}

                </div>
            </article>
        );
    }
}