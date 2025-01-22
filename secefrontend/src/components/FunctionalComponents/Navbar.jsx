import { useState } from 'react'
import '../../css/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    var [dropdown, showdropdown] = useState(false)
    const toggleDropDown=()=>{
        showdropdown(dropdown=>!dropdown)
    }
    return (
        <header>
            <nav>
                <ol>
                    <li><Link to="/home" className='link'>Home</Link></li>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                    <div>
                        <span onMouseEnter={(toggleDropDown)} onMouseLeave={(toggleDropDown) } className='link'> Hooks</span>
                        {dropdown &&(
                            <ul>
                                <li><Link to="/use-state" target='_blank' className='link'>UseState</Link></li>
                                <li><Link to="/use-effect" className='link'>UseEffect</Link></li>
                            </ul>)}
                    </div>
                    <li><Link to="/UseState" className='link'>UseState</Link></li>
                    <li><Link to="/UseEffect" className='link'>UseEffect</Link></li>
                    <li><Link to="/signup" className='link'>Signup</Link></li>
                </ol>
            </nav>
        </header>
    )
}
export default Navbar;