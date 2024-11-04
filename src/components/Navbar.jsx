import { Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/my-skills">My Skills</Link>
            <Link to="/current-projects">Current Projects</Link>
            <Link to="/education-work">Education & Experience</Link>
            <Link to="/cooperation">Cooperation</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/NotFound"></Link>
        </nav>
    )
}

export default Navbar