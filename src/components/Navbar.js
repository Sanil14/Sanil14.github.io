import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useNavbarClick from "../hooks/useNavbarClick";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const nav = useRef(null);
    const location = useLocation();
    const clickedOff = useNavbarClick(nav);
    const btnRef = useRef();

    useEffect(() => {
        if (clickedOff) hideNav()
    }, [clickedOff])

    const openNav = () => {
        if (open === true) {
            hideNav();
        } else {
            setOpen(true);
            nav.current.focus();
        }
    }

    const hideNav = () => {
        setOpen(false);
        btnRef.current.blur();
    }

    return (
        <section ref={nav}>
            <div className={`fixed top-0 right-0 z-10 w-[300px] bg-gray-300 bg-opacity-90 overflow-hidden transition-all duration-[1500ms] ${open ? "h-full" : "h-0"} space-y-5    `}>
                <NavLink className="pt-10 block px-8 py-2 text-2xl text-black hover:no-underline transition-colors duration-300 hover:text-gray-700" exact to="/">
                    <i className={`fas fa-sort-up fa-rotate-90 text-amber-600 pl-2.5 pt-2.5 ${location.pathname === "/" ? "" : "hidden"}`}></i>
                    Home
                </NavLink>
                <NavLink className="block px-8 py-2 text-2xl text-black hover:no-underline transition-colors duration-300 hover:text-gray-700" exact to="/about">
                    <i className={`fas fa-sort-up fa-rotate-90 text-amber-600 pl-2.5 pt-2.5 ${location.pathname === "/about" ? "" : "hidden"}`}></i>
                    About Me
                </NavLink>
                <NavLink className="block px-8 py-2 text-2xl text-black hover:no-underline transition-colors duration-300 hover:text-gray-700" exact to="/projects">
                    <i className={`fas fa-sort-up fa-rotate-90 text-amber-600 pl-2.5 pt-2.5 ${location.pathname === "/projects" ? "" : "hidden"}`}></i>
                    My Projects
                </NavLink>
                <NavLink className="block px-8 py-2 text-2xl text-black hover:no-underline transition-colors duration-300 hover:text-gray-700" exact to="/contact">
                    <i className={`fas fa-sort-up fa-rotate-90 text-amber-600 pl-2.5 pt-2.5 ${location.pathname === "/contact" ? "" : "hidden"}`}></i>
                    Contact Me
                </NavLink>

                <div className="flex absolute bottom-2 w-full items-center justify-evenly">
                    <a className="hover:visible hover:opacity-100" href="mailto:saniljalan14@gmail.com" target="_blank" rel="noreferrer">
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-sm rounded-md py-1 px-2 invisible opacity-0 transition-all duration-300">saniljalan14@gmail.com</span>
                        <i className="fas fa-paper-plane fa-2x text-white px-1.5 py-2.5 hover:text-gray-400 transition-colors duration-300"></i>
                    </a>
                    <a className="hover:visible hover:opacity-100" href="" target="_blank" rel="noreferrer">
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-sm rounded-md py-1 px-2 invisible opacity-0 transition-all duration-300">Sanil#2634</span>
                        <i className="fab fa-discord fa-2x text-white px-1.5 py-2.5 hover:text-gray-400 transition-colors duration-300"></i>
                    </a>
                    <a className="hover:visible hover:opacity-100" href="https://github.com/Sanil14" target="_blank" rel="noreferrer">
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-sm rounded-md py-1 px-2 invisible opacity-0 transition-all duration-300">Sanil14</span>
                        <i className="fab fa-github fa-2x text-white px-1.5 py-2.5 hover:text-gray-400 transition-colors duration-300"></i>
                    </a>
                    <a className="hover:visible hover:opacity-100" href="https://twitter.com/sanil1402" target="_blank" rel="noreferrer">
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-sm rounded-md py-1 px-2 invisible opacity-0 transition-all duration-300">Sanil1402</span>
                        <i className="fab fa-twitter fa-2x text-white px-1.5 py-2.5 hover:text-gray-400 transition-colors duration-300"></i>
                    </a>
                </div>
            </div>

            <div className="mx-auto text-center p-5" title="Toggle Navbar">
                <button class="relative group" ref={btnRef} onClick={openNav}>
                    <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[57.5px] h-[57.5px] transform transition-all bg-gray-400 ring-0 ring-gray-300 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                        <div class="flex flex-col justify-between w-[23px] h-[23px] transform transition-all duration-300 origin-center overflow-hidden">
                            <div class="bg-white h-[2px] w-8 transform transition-all duration-300 origin-left group-focus:translate-y-7 delay-100"></div>
                            <div class="bg-white h-[2px] w-8 rounded transform transition-all duration-300 group-focus:translate-y-7 delay-75"></div>
                            <div class="bg-white h-[2px] w-8 transform transition-all duration-300 origin-left group-focus:translate-y-7"></div>

                            <div class="absolute items-center justify-between transform transition-all duration-500 top-3 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                                <div class="absolute bg-white h-[2px] w-6 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                                <div class="absolute bg-white h-[2px] w-6 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </section>
    )
}

export default Navbar;