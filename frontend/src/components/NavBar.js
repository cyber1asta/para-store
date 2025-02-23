import React, { useState } from 'react';
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaUserCircle } from "react-icons/fa";
import BestSellers from './BestSellers';
import GiftSets from './GiftSets';
import Body from './Body';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // التحقق من تسجيل الدخول

    const showHandler = () => { setShow(true); setShow2(false); setShow3(false); setShow4(false); };
    const showHandler2 = () => { setShow2(true); setShow(false); setShow3(false); setShow4(false); };
    const showHandler3 = () => { setShow3(true); setShow(false); setShow2(false); setShow4(false); };
    const showHandler4 = () => { setShow4(true); setShow(false); setShow2(false); setShow3(false); };
    const dontShowHandler = () => { setShow(false); setShow2(false); setShow3(false); setShow4(false); };

    return (
        <div>
            <header className="banner" role="banner">
                <nav className="navbar" role="navigation" aria-label="menu">
                    <Link to="/">
                        <div className="ml-32 text-2xl font-bold tracking-wider">
                            <span className="text-black">AM</span>
                            <span className="text-red-600">PARA</span>
                        </div>
                    </Link>

                    <ul className="menuNav">
                        <li className="dropdown nav-link nav-link-fade-up transition-all duration-700" onMouseOver={showHandler}>
                            BEST SELLERS
                            {show && <ul className="dropdown-nav" onMouseLeave={dontShowHandler}><BestSellers /></ul>}
                        </li>

                        <li className="dropdown nav-link nav-link-fade-up" onMouseOver={showHandler2}>
                            GIFT SETS
                            {show2 && <ul className="dropdown-nav dropdown-nav2" onMouseLeave={dontShowHandler}><GiftSets /></ul>}
                        </li>

                        <li className="dropdown nav-link nav-link-fade-up" onMouseOver={showHandler3}>
                            SHOP RANGE
                            {show3 && <ul className="dropdown-nav dropdown-nav3" onMouseLeave={dontShowHandler}><Body /></ul>}
                        </li>

                        <p className='navLine absolute bg-red-600 w-1 font-extralight h-9 z-50'></p>
                    </ul>

                    <div className="flex items-center gap-6 relative left-24">
                        <Link to="/cart">
                            <FaShoppingBag className="text-2xl" />
                        </Link>
                        <Link to={loggedInUser ? "/profile" : "/login"}>
                            <FaUserCircle className="text-2xl" />
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;
