import { Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/current-projects">Current Projects</Link>
            <Link to="/past-projects">Past Projects</Link>
            <Link to="/cooperation">Cooperation</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/NotFound"></Link>
        </nav>
    )
}

export default Navbar