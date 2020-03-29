import React, { Component } from "react";
import styles from "./MyCab.module.scss";
import Book from "../Book/Book";
import { firestore } from "../../firebase";

export default class MyCab extends Component {
    state = {
        myCards: []
    }

    componentDidMount() {
        firestore
            .collection("google-books")
            .where("addedBy", "==", this.props.user.uid)
            .get()
            .then((query) => {
                const myCards = query.docs.map(doc => doc.data());
                this.setState({
                    myCards
                });
            })
    }
    render() {
        return (
            <>
                <h1>My Cabinet</h1>
                <section className={styles.cards}>
                    {this.state.myCards.map((book) => (
                        <Book bookData={book} key={book.id} />
                    ))}
                </section>
            </>
        )
    }
}