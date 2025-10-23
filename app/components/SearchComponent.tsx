'use client';
import { BiSearch } from 'react-icons/bi';
import { searchLinks } from '../../lib/constants';
import Link from 'next/link';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';

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
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{
                        opacity: 0,
                        scale: 0.95,
                        y: -10,
                        transition: { duration: 0.15 },
                    }}
                    className="absolute top-12 -right-40 z-100 w-[320px] overflow-hidden rounded-lg border border-gray-200 bg-white text-black shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                >
                    <div className="relative flex flex-col p-4">
                        <div className="relative flex w-full text-gray-500 dark:text-gray-400">
                            <BiSearch className="absolute top-3 right-3 text-xl" />
                            <input
                                type="text"
                                placeholder="ابحث عن أي شئ..."
                                className="w-full rounded-lg border border-gray-300 p-2 pr-10 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        <div className="my-4 h-[px] w-full bg-gray-200 dark:bg-gray-700" />

                        <div>
                            <p className="mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                البحث السريع
                            </p>
                            <div className="flex flex-col gap-1">
                                {searchLinks.map((link) => (
                                    <Link
                                        key={link.color}
                                        href={link.link}
                                        onClick={() => setSearchOpen(false)}
                                        className="flex w-full items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        <div
                                            className={cn(
                                                'flex h-9 w-9 items-center justify-center rounded-lg',
                                                link.bgColor,
                                                link.color,
                                            )}
                                        >
                                            {link.logo}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                                {link.label}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {link.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchComponent;
