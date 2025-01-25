import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <ul className="footer">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>

            <div className="footer-container">
                <small>&copy; Copyright All Rights Reserved || Patel Brothers</small>
            </div>
        </footer>
    )
}