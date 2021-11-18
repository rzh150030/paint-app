import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div>
            <h1> LandingPage </h1>
            <Link to='/canvas'>
                Go To Canvas
            </Link>
        </div>
    )
}
