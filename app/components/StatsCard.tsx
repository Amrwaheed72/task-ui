import { ReactElement, cloneElement } from 'react';
import { Stat } from '../types/types';
import { cn } from '../lib/utils';
import { colorMap } from '../lib/constants';

interface StatsCardProps {
    stat: Stat;
}

const StatsCard = ({ stat }: StatsCardProps) => {
    const { icon, badgeColor, title, mainValue, subtitle } = stat;

    const colors = colorMap[badgeColor] || {
        bg: 'bg-gray-100',
        text: 'text-gray-600',
    };

    return (
        <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800">
            <div className="flex flex-col items-start gap-3">
                <div className={cn('rounded-lg p-3', colors.bg)}>
                    {cloneElement(
                        icon as ReactElement<{ className?: string }>,
                        {
                            className: cn('h-6 w-6', colors.text),
                        },
                    )}
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {title}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {mainValue}
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default StatsCard;
