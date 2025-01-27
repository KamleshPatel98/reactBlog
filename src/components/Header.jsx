import { Link } from "react-router-dom"

// Icon
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (
        // <nav>
        //     <div className="container nav-container">
        //         <Link to={'/'}>
        //             <h3>Patel Brothers</h3>
        //         </Link>
        //         <ul className=" d-flex">
        //             <li><Link to={'/about'}>About</Link></li>
        //             <li><Link to={'/blog'}>Blog</Link></li>
        //             <li><Link to={'/contact'}>Contact</Link></li>
        //             <li><Link to={'/register'}>Register</Link></li>
        //             <li><Link to={'/login'}>Login</Link></li>
        //         </ul>

        //         <button class="nav-toggle-button">
        //             <FaBars />
        //             <AiOutlineClose />
        //         </button>
        //     </div>
        // </nav>

        <Navbar collapseOnSelect expand="lg" className="bg-light navbar-light">
        <Container>
            <Navbar.Brand as={Link} to="/">React-Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}