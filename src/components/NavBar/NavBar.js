import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="fixed w-full top-0 z-50 bg-pink-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-xl font-bold hover:text-pink-300">
                                Veed Style
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <NavLink to={`/category/Mates Linea Gold`} className={({ isActive }) => isActive ? 'bg-pink-800 px-3 py-2 rounded-md text-sm font-medium' : 'text-pink-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-pink-700'}>Mates Línea Gold</NavLink>
                                <NavLink to={`/category/Mates de algarrobo`} className={({ isActive }) => isActive ? 'bg-pink-800 px-3 py-2 rounded-md text-sm font-medium' : 'text-pink-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-pink-700'}>Mates de Algarrobo</NavLink>
                                <NavLink to={`/category/Mates Linea Premium`} className={({ isActive }) => isActive ? 'bg-pink-800 px-3 py-2 rounded-md text-sm font-medium' : 'text-pink-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-pink-700'}>Mates Línea Premium</NavLink>
                            </div>
                        </div>
                    </div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
