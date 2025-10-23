'use client';

import { useState, useLayoutEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoSunny, IoMoon } from 'react-icons/io5';

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useLayoutEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="h-9 w-9 cursor-pointer rounded-lg border border-gray-300 p-2 dark:border-gray-600" />
        );
    }

    const isLight = theme === 'light';

    const toggleTheme = () => {
        setTheme(isLight ? 'dark' : 'light');
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative cursor-pointer rounded-lg border border-gray-300 p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
            {isLight ? (
                <IoMoon className="h-5 w-5" />
            ) : (
                <IoSunny className="h-5 w-5" />
            )}
        </button>
    );
};

export default ThemeToggle;
