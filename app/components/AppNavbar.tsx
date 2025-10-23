'use client';
import { useState } from 'react';
import { BiChevronDown, BiSearch } from 'react-icons/bi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import SearchComponent from './SearchComponent';
import { usePersonState } from '../store/PersonStore';
import PersonComponent from './PersonComponent';
import { IoMdNotificationsOutline } from 'react-icons/io';
import ProfileComponent from './ProfileComponent';
import { cn } from '../lib/utils';
import ThemeToggle from './ThemeToggle';

const AppNavbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [selectOpen, setSelectOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const { person } = usePersonState();

    return (
        <div className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white px-4 py-3 sm:px-10 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-blue-600 p-2">
                        <HiOutlineBuildingOffice className="text-2xl text-white" />
                    </div>
                    <div className="hidden text-gray-900 sm:block dark:text-white">
                        <p className="text-base font-bold">
                            منصة التوريد الذكية
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            الربط بين الموردين والعملاء
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <div className="relative">
                        <button
                            className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSearchOpen((prev) => !prev);
                            }}
                        >
                            <BiSearch className="text-xl" />
                            <p className="hidden text-sm font-medium sm:block">
                                البحث السريع
                            </p>
                        </button>
                        <SearchComponent
                            setSearchOpen={setSearchOpen}
                            searchOpen={searchOpen}
                        />
                    </div>

                    <div className="relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectOpen((prev) => !prev);
                            }}
                            type="button"
                            className="flex cursor-pointer items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors outline-none hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            {person}
                            <BiChevronDown
                                className={cn(
                                    'text-lg transition-transform',
                                    selectOpen && 'rotate-180',
                                )}
                            />
                        </button>
                        <PersonComponent
                            selectOpen={selectOpen}
                            setSelectOpen={setSelectOpen}
                        />
                    </div>

                    <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700" />

                    <ThemeToggle />

                    <div className="relative">
                        <button
                            title="Notifications"
                            type="button"
                            className="relative cursor-pointer rounded-lg border border-gray-300 p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            <IoMdNotificationsOutline className="text-xl" />
                            <div className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-600 dark:border-gray-800" />
                        </button>
                    </div>

                    <div className="relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setProfileOpen((prev) => !prev);
                            }}
                            className="h-9 w-9 cursor-pointer rounded-full border-2 border-blue-600 bg-gray-200 p-1 font-semibold text-blue-700 transition-opacity hover:opacity-90 dark:border-blue-400 dark:bg-gray-700 dark:text-blue-400"
                        >
                            AW
                        </button>
                        <ProfileComponent
                            ProfileOpen={profileOpen}
                            setProfileOpen={setProfileOpen}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppNavbar;
