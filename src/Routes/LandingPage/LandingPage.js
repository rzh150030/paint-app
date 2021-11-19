import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {


    return (
        <div className="landpage">
            <section className="landpage-introduction">
                <h2 id="landpage-title">Welcome to a simple paint app!</h2>
                <Link to='/canvas' id="canvas-link">Try it out</Link>
            </section>
            <section className="landpage-about">
                About
            </section>
        </div>
    )
}
