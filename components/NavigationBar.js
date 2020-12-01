import React from 'react';
import {Navbar , Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function NavigationBar(){

    return (

        <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
                <Link to={"Welcome"} className="nav-link">Home Page</Link>
                <Link to={"Page1"} className="nav-link">Page 1</Link>
                <Link to={"Page2"} className="nav-link">Page 2</Link>
            </Nav>
        </Navbar>

    );
}

