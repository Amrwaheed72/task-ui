import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { selectOptions } from '../../lib/constants';
import { usePersonState } from '../store/PersonStore';
import { cn } from '../../lib/utils';

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
                    key="person-dropdown"
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{
                        opacity: 0,
                        scale: 0.95,
                        y: -10,
                        transition: { duration: 0.15 },
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="absolute top-12 right-0 z-100 w-40 overflow-hidden rounded-lg border border-gray-200 bg-white text-black shadow-xl dark:border-gray-700 dark:bg-gray-800"
                >
                    <div className="flex flex-col py-1">
                        {selectOptions.map((option) => (
                            <button
                                onClick={() => {
                                    setPerson(option.label);
                                    setSelectOpen(false);
                                }}
                                key={option.label}
                                className="flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                            >
                                <span className={cn('text-lg', option.color)}>
                                    {option.icon}
                                </span>
                                <span className="font-medium">
                                    {option.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PersonComponent;
