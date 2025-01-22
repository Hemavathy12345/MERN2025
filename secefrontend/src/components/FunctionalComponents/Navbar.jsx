import '../../css/Navbar.css'
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return (
        <header>
            <nav>
                <ol>
                <li><Link to="/home" className='link'>Home</Link></li>
                <li><Link to="/about" className='link'>About</Link></li>
                <li><Link to="/gallery" className='link'>Gallery</Link></li>
                <li><Link to="/contact" className='link'>Contact</Link></li>
                <li><Link to="/signup" className='link'>Signup</Link></li>
                </ol>
            </nav>
        </header>
    )
}
export default Navbar;