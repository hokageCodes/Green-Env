import finLogo from '../../assets/images/finLogo.png'

import './navbar.css'

export default function NavBar() {
    return (
        <nav className='nav-container'>
            <div className="logo">
                <img src={finLogo} alt='' />
            </div>
            <div className="right">
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About us</li>
                    <li>What We Do</li>
                    <li>Media</li>
                    <li>Contact</li>
                    <a href="/#" className="nav-button">Donate</a>
                </ul>
            </div>
        </nav>
    )
}
