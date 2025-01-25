import { Link } from 'react-router-dom'

export default function Errorpage() {
    return (
        <div className="error-page">
            <h2>Oops </h2>
            <h3>Page Not Found</h3>
            <Link to={'/'} className='btn btn-primary'>Go back Home</Link>
        </div>
    )
} 