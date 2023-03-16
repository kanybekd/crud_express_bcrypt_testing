import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom"

export default class NavBar extends React.Component {
    render() {
        return (
            <Nav>
                <NavItem>
                    <Link to="/">
                        <NavLink>Home</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/registerNewStudent">
                        <NavLink >Register</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <NavLink >More</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Gallery</NavLink>
                </NavItem>
            </Nav>

        );
    }
}