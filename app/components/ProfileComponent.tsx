import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { PiSignOutBold } from 'react-icons/pi';
import { CiSettings } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';

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
                    key="profile-dropdown"
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{
                        opacity: 0,
                        scale: 0.95,
                        y: -10,
                        transition: { duration: 0.15 },
                    }}
                    className="absolute top-12 left-0 z-100 w-[280px] overflow-hidden rounded-lg border border-gray-200 bg-white text-black shadow-xl dark:border-gray-700 dark:bg-gray-800"
                >
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 bg-gray-50 p-4 dark:bg-gray-700/50">
                            <div className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-blue-600 bg-gray-200 font-semibold text-blue-700 dark:border-blue-400 dark:bg-gray-700 dark:text-blue-400">
                                AW
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                                    Amr Waheed
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    amrmohamed877@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 p-2">
                            <button className="flex w-full items-center gap-2 rounded-md p-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                                <IoPersonOutline className="text-lg" />
                                <p className="font-medium">الملف الشخصي</p>
                            </button>
                            <button className="flex w-full items-center gap-2 rounded-md p-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                                <CiSettings className="text-lg" />
                                <p className="font-medium">الاعدادات</p>
                            </button>
                        </div>

                        <div className="h-[px] w-full bg-gray-200 dark:bg-gray-700" />

                        <div className="p-2">
                            <button className="flex w-full items-center gap-2 rounded-md p-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/50">
                                <PiSignOutBold className="text-lg" />
                                <p className="font-medium">تسجيل خروج</p>
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProfileComponent;
