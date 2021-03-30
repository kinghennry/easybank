import React,{useState} from 'react'
import "./Header.css"
import logo from "../images/logo.svg"
import {navLinks} from "../data"
const Header = () => {
    const [toggle, setToggle] = useState(false)
    // find a solution to the ::before hover problem.go watch the julio code video for exaple
    return (
        <header>
            <div className="container">
            <nav>
            <div className="nav__logo">
                <a href="">
                    <img src={logo} alt="easyBank"/>
                </a>
                </div>
                <div className="nav__toggle" onClick={() => {setToggle(!toggle)}}>
                    <span style={{transform: toggle ? "rotate(45deg)" : ""}}></span>
                    <span style={{opacity:toggle ? "0":""}}></span>
                    <span style={{ transform: toggle ? "rotate(-45deg)" : "" }}></span>
                </div>

                <ul style={{ transform: toggle ? "translateY(0%)" : "" }} className="nav__list">
                    {navLinks.map(navLink => {
                        const {id,link}=navLink
                        return (
                            <li className="nav__item" key={id}>
                                <a href="" className="nav__link">{link}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className="header__cta">
                    <a>Request Invite</a>
                </div>

                </nav>
                </div>
        </header>
    )
}

export default Header
