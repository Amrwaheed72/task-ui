'use client';
import { BiSearch } from 'react-icons/bi';
import { searchLinks } from '../lib/constants';
import Link from 'next/link';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { AnimatePresence, motion } from 'motion/react';
const SearchComponent = ({
    searchOpen,
    setSearchOpen,
}: {
    searchOpen: boolean;
    setSearchOpen: (state: boolean) => void;
}) => {
    const ref = useOutsideClick(() => {
        setSearchOpen(false);
    });
    return (
        <AnimatePresence>
            {searchOpen && (
                <motion.div
                    ref={ref}
                    key="search-dropdown"
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            type: 'spring',
                            stiffness: 250,
                            damping: 20,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.95,
                        y: -10,
                        transition: { duration: 0.15 },
                    }}
                    className="absolute top-10 -right-30 z-1001 w-[300px] overflow-hidden rounded-2xl bg-white text-black shadow-2xl sm:left-0"
                >
                    <div className="relative flex flex-col space-y-4 p-4 shadow-2xl">
                        <div className="relative flex w-full px-2 text-gray-400">
                            <BiSearch className="absolute top-3 right-4 text-xl" />
                            <input
                                type="text"
                                placeholder="ابحث عن أي شئ..."
                                className="w-full rounded-lg border border-gray-400 p-2 pr-8 text-gray-400 focus:outline-blue-500 active:outline-none"
                            />
                        </div>
                        <div className="absolute top-18 right-0 left-0 h-[0.1px] w-full bg-gray-200" />
                        <div className="mt-4">
                            <p className="text-xs font-semibold text-gray-500">
                                البحث السريع
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {searchLinks.map((link) => (
                                <Link
                                    key={link.color}
                                    href={link.link}
                                    className={`flex w-full flex-1 gap-2 rounded-lg p-2 transition-colors hover:bg-blue-100`}
                                >
                                    <div
                                        className={`p-2 ${link.bgColor} rounded-lg text-xl ${link.color}`}
                                    >
                                        {link.logo}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">
                                            {link.label}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {link.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchComponent;
