import React, { Component } from "react";
import styles from "./Book.module.scss";
import { firebase, firestore } from "../../firebase";
import { Card, Button, Modal } from "react-bootstrap";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header/Header";
import { globalHistory } from "@reach/router"; 




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
        if (this.props.user) {
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
        } else {
            alert("Login first!")
            globalHistory.navigate("/login");
        }
    }

    handleRemove = (event) => {
        event.preventDefault();
        firestore
        .collection("google-books")
        .doc('doc.id')
        .delete()
        .then(() => {
            console.log("Deleted!");
            alert("Deleted from your cabinet!");
        })
        
    }

    render() {
        const bookData = this.props.bookData.volumeInfo;
        return (
            <>

                <div className={styles.bookContainer} key={this.props.bookData.id} >
                    <img
                        src={(bookData.imageLinks != null) ? bookData.imageLinks.thumbnail : "http://tiny.cc/vuzxlz"}
                        alt="not working"
                        className={styles.coverImage} />
                    <FontAwesomeIcon
                        icon={faBookmark}
                        onClick={this.handleSave}
                        className={styles.icon} />
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
                                    <p><span>title:</span> {this.title != null ? this.title : "No title to display"}</p>
                                    <p><span>author:</span> {bookData.authors != null ? bookData.authors : "No authors to display"}</p>
                                    <p><span>publisher:</span> {bookData.publisher != null ? bookData.publisher : "No publisher to display"}</p>
                                    <p><span>total pages:</span> {bookData.pageCount != null ? bookData.pageCount : "No number of pages to display"}</p>
                                </div>
                            </div>
                        </Modal.Header>
                        <Modal.Body>
                            <div className={styles.description}>
                                {bookData.description != null ? bookData.description : "No description to display"}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <a href={bookData.previewLink} class="btn btn-primary" role="button" target="blank">preview</a>
                        </Modal.Footer>

                    </Modal>
                </div>


            </>

        );
    }
}