import React from 'react';
import {
    IoCheckmarkCircle,
    IoNewspaper,
    IoPersonAdd,
    IoRefresh,
    IoWarning,
} from 'react-icons/io5';
import { cn } from '../lib/utils';

interface ActivityItem {
    icon: React.ReactElement<{ className?: string }>;
    text: string;
    time: string;
    iconBgClass: string;
    iconColorClass: string;
}

const recentActivities: ActivityItem[] = [
    {
        icon: <IoPersonAdd />,
        iconBgClass: 'bg-blue-100',
        iconColorClass: 'text-blue-600',
        text: 'طلب جديد من العميل أحمد محمد',
        time: 'منذ 5 دقائق',
    },
    {
        icon: <IoCheckmarkCircle />,
        iconBgClass: 'bg-green-100',
        iconColorClass: 'text-green-600',
        text: 'تم الموافقة على مورد جديد',
        time: 'منذ 15 دقيقة',
    },
    {
        icon: <IoWarning />,
        iconBgClass: 'bg-yellow-100',
        iconColorClass: 'text-yellow-600',
        text: 'طلب معلق يحتاج مراجعة',
        time: 'منذ 30 دقيقة',
    },
    {
        icon: <IoNewspaper />,
        iconBgClass: 'bg-indigo-100',
        iconColorClass: 'text-indigo-600',
        text: 'تم إكمال طلب بنجاح',
        time: 'منذ ساعتين',
    },
    {
        icon: <IoRefresh />,
        iconBgClass: 'bg-purple-100',
        iconColorClass: 'text-purple-600',
        text: 'تقديم إعدادس من عميل',
        time: 'منذ ساعتين',
    },
];

const RecentActivity: React.FC = () => {
    return (
        <div className="mb-6 rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-right text-xl font-bold text-gray-900">
                النشاط الأخير
            </h2>
            <div className="flex flex-col gap-5">
                {recentActivities.map((activity, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-start gap-4 rounded-lg px-2 py-4 text-right transition-colors hover:bg-gray-100"
                    >
                        <div
                            className={`flex h-9 w-9 items-center justify-center rounded-full ${activity.iconBgClass}`}
                        >
                            {React.cloneElement(activity.icon, {
                                className: cn(
                                    `h-5 w-5 ${activity.iconColorClass}`,
                                ),
                            })}
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-sm font-medium text-gray-800">
                                {activity.text}
                            </p>
                            <p className="text-xs text-gray-500">
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
