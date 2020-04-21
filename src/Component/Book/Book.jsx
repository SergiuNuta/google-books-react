import React, { Component } from "react";
import styles from "./Book.module.scss";
import { firebase, firestore } from "../../firebase";
import { Card, Button, Modal } from "react-bootstrap";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header/Header";




export default class Book extends Component {
    state = {
        show: false
    }

    handleModal = () => {
        this.setState({ show: !this.state.show });
    }

    get title() {
        const bookData = this.props.bookData.volumeInfo;
        const title = bookData.title;
        return title.length > 40
            ? title.substring(0, 40) + "..."
            : title;
    }

    handleSave = (event) => {
        event.preventDefault();
        firestore
            .collection("google-books")
            .add({
                ...this.props.bookData,
                addedBy: this.props.user.uid
            })
            .then(() => {
                console.log("It worked!")
                alert("Saved to your cabinet!")
            })
    }

    // handleRemove = (event) => {
    //     event.preventDefault();
    //     firestore
    //     .collection("google-books")
    //     .doc(this.props.user.uid)
    //     .delete()
    //     .then(() => {
    //         console.log("Deleted!");
    //         alert("Deleted from your cabinet!");
    //     })
    // }

    render() {
        const bookData = this.props.bookData.volumeInfo;
        // console.log(bookData);
        return (
            <>

                <div className={styles.bookContainer} key={this.props.bookData.id} >
                    <img
                        src={(bookData.imageLinks != null) ? bookData.imageLinks.thumbnail : "http://tiny.cc/vuzxlz"}
                        alt="not working"
                        className={styles.coverImage} />
                    <FontAwesomeIcon icon={faBookmark} onClick={this.handleSave} className={styles.icon} />
                    <div>
                        <Button variant="dark" size="sm" onClick={this.handleModal} style={{ width: '100px', margin: 'auto' }}>
                            More info
                    </Button>
                    </div>
                    <Modal show={this.state.show} onHide={this.handleModal}>
                        <Modal.Header closeButton>
                            <div className={styles.firstPartModal}>
                                <img
                                    src={(bookData.imageLinks != null) ? bookData.imageLinks.thumbnail : "http://tiny.cc/vuzxlz"}
                                    alt="not working"
                                    className={styles.coverImage} />
                                <div>
                                    <p>title: {this.title}</p>
                                    <p>author: {bookData.authors}</p>
                                    <p>publisher: {this.props.bookData.publisher}</p>
                                    <p>total pages: {this.props.bookData.pageCount}</p>
                                </div>
                            </div>
                        </Modal.Header>
                        <Modal.Body>
                        <div className={styles.description}>
                            {bookData.description != null ? bookData.description : "No description to display"}
                        </div>
                            {/* <p>Modal body text goes here.</p> */}
                        </Modal.Body>
                        

                    </Modal>
                </div>


            </>

        );
    }
}