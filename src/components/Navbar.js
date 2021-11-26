import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../css/Navbar.css"
import useNavbarClick from "../hooks/useNavbarClick";

const Navbar = () => {
    const [height, setHeight] = useState("0");
    const [open, setOpen] = useState(false);
    const nav = useRef(null);
    const location = useLocation()
    const clickedOff = useNavbarClick(nav)

    useEffect(() => {
        if (clickedOff) hideNav()
    }, [clickedOff])

    const openNav = () => {
        if (height === "100vh") {
            hideNav()
        } else {
            setHeight("100vh");
            setOpen(true);
            nav.current.focus();
        }
    }

    const hideNav = () => {
        setHeight("0px");
        setOpen(false);
    }

    return (
        <section ref={nav}>
            <div className="sidepanel" style={{ height }}>
                <a className="closebtn" onClick={hideNav}>&times;</a>
                <NavLink exact to="/">
                <i className={"fas fa-sort-up fa-rotate-90" + ("/" !== location.pathname ? " hide" : "")}></i>
                    Home
                </NavLink>
                <NavLink exact to="/about" className="aboutme">
                <i className={"fas fa-sort-up fa-rotate-90" + ("/about" !== location.pathname ? " hide" : "")}></i>
                    About Me
                </NavLink>
                <NavLink exact to="/projects" className="projects">
                <i className={"fas fa-sort-up fa-rotate-90" + ("/projects" !== location.pathname ? " hide" : "")}></i>
                    My Projects
                </NavLink>
                <NavLink exact to="/contact">
                <i className={"fas fa-sort-up fa-rotate-90" + ("/contact" !== location.pathname ? " hide" : "")}></i>
                    Contact Me
                </NavLink>

                <div className="socialmedia">
                    <a href="mailto:saniljalan14@gmail.com" target="_blank" rel="noreferrer">
                        <span className="tag">saniljalan14@gmail.com</span>
                        <i className="fas fa-paper-plane fa-2x"></i>
                    </a>
                    <a href="https://discordapp.com/channels/@me/248507627540185088" target="_blank" rel="noreferrer">
                        <span className="tag">Sanil#2634</span>
                        <i className="fab fa-discord fa-2x"></i>
                    </a>
                    <a href="https://github.com/Sanil14" target="_blank" rel="noreferrer">
                        <span className="tag">Sanil14</span>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://twitter.com/sanil1402" target="_blank" rel="noreferrer">
                        <span className="tag">Sanil1402</span>
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                </div>
            </div>

            <div id="nav-icon3" className={`row ${open ? 'open' : ''}`} title="Toggle Navbar" onClick={openNav}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    )
}

export default Navbar;