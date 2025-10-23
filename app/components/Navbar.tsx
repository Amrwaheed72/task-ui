'use client';

import { navLinks } from '../lib/constants';
import { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('home');

    return (
        <div className="fixed top-17 w-full bg-white p-2 shadow-lg backdrop-blur-lg sm:p-4">
            <div className="flex w-full items-center justify-start gap-3 sm:gap-6">
                {navLinks.map((link) => (
                    <button
                        type="button"
                        onClick={() => setActive(link.link)}
                        key={link.link}
                        className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold duration-300 sm:gap-2 sm:text-sm ${active === link.link ? 'rounded-lg bg-linear-to-r from-blue-700 to-purple-700 text-white transition-colors' : ''}`}
                    >
                        <span className="text-sm sm:text-xl">{link.logo}</span>{' '}
                        {link.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
