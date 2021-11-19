import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {


    return (
        <div className="landpage">
            <section className="landpage-introduction">
                <h2>Welcome to a simple paint app!</h2>
                <Link to='/canvas'>
                    <button>Try it out</button>
                </Link>
            </section>
        </div>
    )
}
