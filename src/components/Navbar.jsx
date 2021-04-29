import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to={"/"} id="navbar__logo" className="hoverable">
                    ART TENDER
                </Link>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <Link to={"/info"} className="navbar__links info hoverable">
                            Info
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
