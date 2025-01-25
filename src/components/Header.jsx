import { Link } from "react-router-dom"

// Icon
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
    return (
        <nav>
            <div className="container nav-container">
                <Link to={'/'}>
                    <h3>Patel Brothers</h3>
                </Link>
                <ul className=" d-flex">
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/register'}>Register</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>

                <button class="nav-toggle-button">
                    <FaBars />
                    <AiOutlineClose />
                </button>
            </div>
        </nav>
    )
}