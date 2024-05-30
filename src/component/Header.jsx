import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import avatar from '../assets/images/image-avatar.png'
import CartButton from './CartButton'
import Cart from './Cart'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    let menuClasses = "absolute top-14 left-0 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "

    if (!showMenu) {
        menuClasses += "-translate-x-[300%] transition-transform duration-400 ease-in-out"
    } else {
        menuClasses += "transition-transform duration-400 ease-in-out"
    }

    const handleToggleMenu = () => {
        setShowMenu(prev => !prev)
    }
    return (
        <>
            <header className="navbar bg-base-100 fixed top-0 px-4 md:px-14 lg:px-24 md:py-4 z-50">
                <div className="lg:hidden">
                    <div className="dropdown">
                        <div onClick={handleToggleMenu} tabIndex={0} role="button" className="btn btn-ghost hover:border-primary-orangee  hover:bg-transparent btn-circle">
                            {showMenu && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            )}
                            {!showMenu && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            )}

                        </div>
                        <div className={menuClasses}>
                            <ul tabIndex={0} >
                                <li><a className='text-black font-semibold' href="">Collection</a></li>
                                <li><a className='text-black font-semibold' href="">Men</a></li>
                                <li><a className='text-black font-semibold' href="">Women</a></li>
                                <li><a className='text-black font-semibold' href="">About</a></li>
                                <li><a className='text-black font-semibold' href="">Contact</a></li>
                            </ul>
                        </div>

                    </div>
                </div>


                <div className="flex-1 space-x-10">
                    <a className="btn btn-ghost hover:border-primary-orangee hover:bg-transparent text-xl">
                        <img src={logo} alt="" />
                    </a>
                    <ul className='hidden lg:flex space-x-8 text-neutral-darkGrayishBlue'>
                        <li><a className='hover:text-black transition-colors duration-300' href="">Collection</a></li>
                        <li><a className='hover:text-black transition-colors duration-300' href="">Men</a></li>
                        <li><a className='hover:text-black transition-colors duration-300' href="">Women</a></li>
                        <li><a className='hover:text-black transition-colors duration-300' href="">About</a></li>
                        <li><a className='hover:text-black transition-colors duration-300' href="">Contact</a></li>
                    </ul>
                </div>


                <div className="flex-none space-x-6">
                    <div className="dropdown dropdown-end">
                        <CartButton />
                        <Cart
                            tabIndex={0}
                            className="w-[20rem] mt-3 z-50 card card-compact dropdown-content 
                            bg-base-100 shadow-xl -mr-[5rem] lg:-mr-0"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost hover:border-primary-orangee hover:bg-transparent btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={avatar} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>

            </header>
            <hr className='text-neutral-darkGrayishBlue w-[86%] mx-auto' />
        </>
    )
}

export default Header
