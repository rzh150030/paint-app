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
                <h2>About</h2>
                <p>This is a simple little paint app where users can draw pictures either through free draws or shapes. Take a look and see what you can make!</p>
            </section>
        </div>
    )
}
