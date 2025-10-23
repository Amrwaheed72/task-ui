'use client';

import { navLinks } from '../../lib/constants';
import { useState } from 'react';
import { cn } from '../../lib/utils';

const Navbar = () => {
    const [active, setActive] = useState('home');

    return (
        <div className="sticky top-[65px] z-40 w-full border-b border-gray-200 bg-white px-2 shadow-sm sm:px-8 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex w-full items-center justify-start gap-2 sm:gap-4">
                {navLinks.map((link) => (
                    <button
                        type="button"
                        onClick={() => setActive(link.link)}
                        key={link.link}
                        className={cn(
                            'flex items-center gap-2 border-b-4 px-2 py-3 text-xs font-semibold text-gray-500 transition-all duration-200 sm:text-sm dark:text-gray-400',
                            active === link.link
                                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                                : 'border-transparent hover:border-gray-300 hover:text-gray-700 dark:hover:border-gray-600 dark:hover:text-gray-200',
                        )}
                    >
                        <span className="text-base sm:text-xl">
                            {link.logo}
                        </span>
                        {link.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
