import React from 'react';
import { cn } from '../../lib/utils';
import { ActivityItem } from '../types/types';
interface RecentActivityProps {
    activities: ActivityItem[];
}
const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
            <h2 className="mb-6 text-right text-xl font-bold text-gray-900 dark:text-gray-100">
                النشاط الأخير
            </h2>
            <div className="flex flex-col gap-2">
                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-start gap-4 rounded-lg p-3 text-right transition-colors hover:bg-gray-100/70 dark:hover:bg-gray-700/50"
                    >
                        <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${activity.iconBgClass}`}
                        >
                            {React.cloneElement(activity.icon, {
                                className: cn(
                                    `h-5 w-5 ${activity.iconColorClass}`,
                                ),
                            })}
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                {activity.text}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {activity.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
