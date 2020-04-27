import React, { Component } from "react";
import PropTypes from "prop-types";
import NavItem from "../Header/NavItem/NavItem";
import styles from "./Header.module.scss";

class Header extends Component {
    render() {
        return (
            <header className={styles.appHeader}>
                <h1>Book finder</h1>
                <nav>
                    <ul className={styles.navList}>
                        <NavItem  route="google-books-react" name="Home" />
                        <NavItem  route="/private/mycabinet" name="Cabinet" />
                        {/* <NavItem  route="/login" name="Login" /> */}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;