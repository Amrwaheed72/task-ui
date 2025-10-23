import React from 'react';
import { OrderItem } from '../types/types';
import { recentOrders } from '../lib/constants';

const getStatusClasses = (status: OrderItem['status']) => {
    switch (status) {
        case 'مكتمل':
            return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400';
        case 'قيد المعالجة':
            return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400';
        case 'جديد':
            return 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400';
        default:
            return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
};

const getStatusDot = (status: OrderItem['status']) => {
    switch (status) {
        case 'مكتمل':
            return 'bg-green-500';
        case 'قيد المعالجة':
            return 'bg-yellow-500';
        case 'جديد':
            return 'bg-blue-500';
        default:
            return 'bg-gray-500';
    }
};

const handleFirstLetters = (name: string) => {
    return name
        .split(' ')
        .map((word) => word[0])
        .join('');
};

const RecentOrdersTable: React.FC = () => {
    const TableRowClassname =
        'px-4 py-3 text-sm font-semibold text-gray-500 dark:text-gray-400 text-right';

    return (
        <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
            <h2 className="mb-6 text-right text-xl font-bold text-gray-900 dark:text-gray-100">
                آخر الطلبات والمعاملات
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-right">
                    <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className={TableRowClassname}>العميل/المورد</th>
                            <th className={TableRowClassname}>التفاصيل</th>
                            <th className={TableRowClassname}>التاريخ</th>
                            <th className={TableRowClassname}>الحالة</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrders.map((order, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 dark:border-gray-700 dark:hover:bg-gray-700/50"
                            >
                                <td className="px-4 py-3 text-sm">
                                    <div className="flex items-center justify-start gap-4">
                                        <div
                                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-medium text-white ${order.bgColor}`}
                                        >
                                            {handleFirstLetters(order.name)}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 dark:text-gray-200">
                                                {order.name}
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                {order.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-300">
                                    {order.details}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                    {order.date}
                                </td>
                                <td className="px-4 py-3 text-sm">
                                    <div
                                        className={`inline-flex items-center justify-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${getStatusClasses(
                                            order.status,
                                        )}`}
                                    >
                                        <div
                                            className={`h-2 w-2 rounded-full ${getStatusDot(
                                                order.status,
                                            )}`}
                                        />
                                        <p>{order.status}</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentOrdersTable;
