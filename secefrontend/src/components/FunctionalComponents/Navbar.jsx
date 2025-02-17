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
                    <div className='dropdown'>
                        <li onClick={(toggleDropDown)} onLeave={(toggleDropDown) }  className='link'> Hooks</li>
                        {dropdown &&(
                            <ul className='dropdown-menu'>
                                 <li><Link to="/React-lcm" className='link'>LifeCycle</Link></li>
                                 <li><Link to="/UseState" className='link'>UseState</Link></li>
                    <li><Link to="/UseEffect" className='link'>UseEffect</Link></li>
                    <li><Link to="/UseEffectAPI" className='link'>UseEffectAPI</Link></li>
                    <li><Link to="/UseReduce" className='link'>UseReduce</Link></li>
                    <li><Link to="/UseRef" className='link'>UseRef</Link></li>
                    <li><Link to="/UseMemo" className='link'>UseMemo</Link></li>
                    <li><Link to="/Memo" className='link'>Memo</Link></li>
                    <li><Link to="/UseCallBack" className='link'>UseCallBack</Link></li>
                    <li><Link to="/Student" className='link'>UseContext</Link></li>
                    <li><Link to="/CustomHooks" className='link'>CustomHooks</Link></li>
                    <li><Link to="/UseLocalStorage" className='link'>UseLocalStorage</Link></li>
                    
                            </ul>)}
                  </div>
                  <div className='dropdown'>
                  <li onClick={(toggleDropDown)} onLeave={(toggleDropDown) }  className='link'> Memo</li>
                        {dropdown &&(
                            <ul className='dropdown-menu'>
                                 <li><Link to="/Memo" className='link'>Memo</Link></li>
                                 <li><Link to="/Lazy" className='link'>Lazyloading</Link></li>
                                 <li><Link to="/HOC" className='link'>HOC</Link></li>
                                 
                            </ul>)}
                  </div>
                   
                    <li><Link to="/signup" className='link'>Signup</Link></li>
                </ol>
            </nav>
        </header>
    )
}
export default Navbar;