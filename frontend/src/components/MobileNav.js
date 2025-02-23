import React from 'react';
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';

const MobileNav = () => {
    return (
        <div className='mobNavMainPrant'>

            <div className="navbar">
                <div className='flex gap-40 items-center'>

                    <Link to="/" className="text-2xl font-bold text-gray-800">
                        AM PARA
                    </Link>

                    <Link to={"/cart"}>
                        <FaShoppingBag className='text-xl' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;
