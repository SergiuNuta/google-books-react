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

    // handleClose() {
    //     this.setState({ setShow: false });
    // }
    // handleShow() {
    //     this.setState({ setShow: true });
    // }
    handleModal() {
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

    render() {
        const bookData = this.props.bookData.volumeInfo;
        return (
            <>

                <div className={styles.bookContainer} key={this.props.bookData.id} onClick={this.handleModal}>
                    <img
                        src={(bookData.imageLinks != null) ? bookData.imageLinks.thumbnail : "http://tiny.cc/vuzxlz"}
                        alt="not working"
                        className={styles.coverImage} />
                    <p className={styles.title}>{this.title}</p>
                    <div className={styles.author}>
                        <p>--- by ---</p>
                        <p>{bookData.authors}</p>
                    </div>
                    <FontAwesomeIcon icon={faBookmark} onClick={this.handleSave} className={styles.icon} />
                    <div className={styles.cardBack}></div>
                    {/* <p>Publisher: {bookData.publisher}</p> */}
                    <Modal show={this.state.show} onHide={this.handleModal}>
                        <Modal.Header closeButton> Modal test </Modal.Header>
                        </Modal>
                </div>

                {/* <Button variant="primary" onClick={this.handleModal}>
                    Demo modal
                </Button> */}

                {/* <Modal show={this.state.show} >
                    <Modal.Header closeButton>
                        <Modal.Title>My book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModal}>
                            Close
          </Button>
                        <Button variant="primary" onClick={this.handleModal}>
                            Save Changes
          </Button>
                    </Modal.Footer>
                </Modal> */}
            </>

            // <Card style={{ width: '9rem', margin: '5px' }}  key={this.props.bookData.id}>
            //     <Card.Img 
            //     variant="top" 
            //     src={(bookData.imageLinks != null) ? bookData.imageLinks.thumbnail : "http://tiny.cc/vuzxlz"}
            //     alt="not working"  
            //     style={{ width: '100%', height: '200px', position: 'absolute'}}/>
            //     <Card.Body>
            //         <Card.Title className={styles.title}>{this.title}</Card.Title>
            //         <Card.Text className={styles.author}>{this.author}</Card.Text>
            //         <Button variant="primary">Go somewhere</Button>
            //     </Card.Body>
            // </Card>

        );
    }
}