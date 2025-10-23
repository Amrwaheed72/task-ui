'use client';
import { useState } from 'react';
import { BiChevronDown, BiNotification, BiSearch } from 'react-icons/bi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import SearchComponent from './SearchComponent';
import { usePersonState } from '../store/PersonStore';
import PersonComponent from './PersonComponent';
import { IoMdNotificationsOutline } from 'react-icons/io';
import ProfileComponent from './ProfileComponent';

const AppNavbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [selectOpen, setSelectOpen] = useState(false);
    const [ProfileOpen, setProfileOpen] = useState(false);
    const { person, setPerson } = usePersonState();
    return (
        <div className="fixed top-0 z-999 w-full bg-linear-to-r from-blue-700 to-pink-700 px-6 py-3 sm:px-12">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="rounded-xl bg-white p-2">
                        <HiOutlineBuildingOffice className="text-2xl text-blue-500" />
                    </div>
                    <div className="hidden text-white sm:block">
                        <p className="text-[16px] font-bold">
                            منصة التوريد الذكية
                        </p>
                        <p className="text-xs">الربط بين الموردين والعملاء</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <div className="relative">
                        <button
                            className="flex cursor-pointer items-center gap-1 rounded-lg bg-white/20 px-3 py-2 text-white transition-colors hover:bg-white/30"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSearchOpen((prev) => !prev);
                            }}
                        >
                            <BiSearch className="text-xl" />
                            <p className="hidden text-sm font-semibold sm:block">
                                البحث السريع
                            </p>
                        </button>
                        <SearchComponent
                            setSearchOpen={setSearchOpen}
                            searchOpen={searchOpen}
                        />
                    </div>
                    <div>
                        <div className="relative">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectOpen((prev) => !prev);
                                }}
                                type="button"
                                className="flex cursor-pointer items-center gap-1 rounded-lg bg-white/20 p-4 px-3 py-2 text-sm text-white transition-colors outline-none hover:bg-white/30"
                            >
                                {person}
                                <BiChevronDown
                                    className={`text-lg transition-transform ${selectOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <PersonComponent
                                selectOpen={selectOpen}
                                setSelectOpen={setSelectOpen}
                            />
                        </div>
                    </div>
                    <div className="h-full w-[2px] bg-white/20" />
                    <div className="relative cursor-pointer rounded-lg p-2 hover:bg-white/20">
                        <IoMdNotificationsOutline className="text-xl text-white" />
                        <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-600" />
                    </div>
                    <div className="relative">
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                setProfileOpen((prev) => !prev);
                            }}
                            className="cursor-pointer rounded-full border-2 border-white bg-white/20 p-1 font-semibold text-white"
                        >
                            AW
                        </div>
                        <ProfileComponent
                            ProfileOpen={ProfileOpen}
                            setProfileOpen={setProfileOpen}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppNavbar;
