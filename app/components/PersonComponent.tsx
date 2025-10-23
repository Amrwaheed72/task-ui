import { AnimatePresence, motion } from 'motion/react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { selectOptions } from '../lib/constants';
import { usePersonState } from '../store/PersonStore';

const PersonComponent = ({
    setSelectOpen,
    selectOpen,
}: {
    selectOpen: boolean;
    setSelectOpen: (state: boolean) => void;
}) => {
    const { setPerson } = usePersonState();
    const ref = useOutsideClick(() => {
        setSelectOpen(false);
    });
    return (
        <AnimatePresence>
            {selectOpen && (
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
                    <div className="flex w-[150px] flex-col">
                        {selectOptions.map((option) => (
                            <div
                                onClick={() => {
                                    setPerson(option.label);
                                    setSelectOpen(false);
                                }}
                                key={option.label}
                                className={`flex flex-1 cursor-pointer items-center gap-2 p-4 hover:bg-blue-50`}
                            >
                                <span className={`${option.color} text-xl`}>
                                    {option.icon}
                                </span>{' '}
                                <span className="font-semibold">
                                    {option.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PersonComponent;
