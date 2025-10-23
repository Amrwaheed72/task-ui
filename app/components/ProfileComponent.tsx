import { AnimatePresence, motion } from 'motion/react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { PiPerson, PiSignOutBold } from 'react-icons/pi';
import { IoPersonOutline } from 'react-icons/io5';
import { CiSettings } from 'react-icons/ci';

const ProfileComponent = ({
    ProfileOpen,
    setProfileOpen,
}: {
    ProfileOpen: boolean;
    setProfileOpen: (state: boolean) => void;
}) => {
    const ref = useOutsideClick(() => {
        setProfileOpen(false);
    });
    return (
        <AnimatePresence>
            {ProfileOpen && (
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
                    className="absolute top-10 left-0 z-1001 overflow-hidden rounded-xl bg-white text-black shadow-2xl sm:left-0"
                >
                    <div className="flex w-[270px] flex-col gap-4">
                        <div className="flex gap-2 bg-blue-100 p-3">
                            <div className="cursor-pointer rounded-full border-2 border-white bg-blue-800 p-2 font-semibold text-white">
                                AW
                            </div>
                            <div className="flex flex-col">
                                <p className="text-lg font-bold">Amr Waheed</p>
                                <p className="text-xs">
                                    amrmohamed877@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="m-2 flex cursor-pointer items-center gap-2 rounded-lg p-1 text-gray-600 transition-colors hover:bg-gray-100">
                                <IoPersonOutline className="text-xl" />
                                <p className="font-bold">الملف الشخصي</p>
                            </div>
                            <div className="m-2 flex cursor-pointer items-center gap-2 rounded-lg p-1 text-gray-600 transition-colors hover:bg-gray-100">
                                <CiSettings className="text-xl" />
                                <p className="font-bold">الاعدادات</p>
                            </div>
                        </div>
                        <div className="h-[0.5px] w-full bg-gray-200" />
                        <div className="m-2 flex cursor-pointer items-center gap-2 rounded-lg p-1 py-2 text-red-600 transition-colors hover:bg-red-50">
                            <PiSignOutBold className="text-xl" />
                            <p className="font-bold">تسجيل خروج</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProfileComponent;
