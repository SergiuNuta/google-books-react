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
                        <NavItem  route="/home" name="Home" />
                        {/* <NavItem  route="/login" name="Login" /> */}
                        <NavItem  route="/private/mycabinet" name="MyCab" />
                        {/* <NavItem  route="/private/createcard" name="CreateCard" /> */}

                    </ul>
                </nav>
            </header>
        )
    }
}

Header.propTypes = {
    toggleMenu: PropTypes.func.isRequired
}

export default Header;