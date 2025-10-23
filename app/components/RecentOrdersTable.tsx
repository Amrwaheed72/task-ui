import React from 'react';

interface OrderItem {
    status: 'مكتمل' | 'قيد المعالجة' | 'جديد';
    date: string;
    details: string;
    name: string;
    email: string;
    bgColor: string;
}

const recentOrders: OrderItem[] = [
    {
        status: 'مكتمل',
        date: '15 أكتوبر 2023',
        details: 'شركة الموردات المتقدمة',
        name: 'أحمد محمد',
        email: 'ahmad@example.com',
        bgColor: 'bg-linear-to-b from-blue-400 to-blue-800',
    },
    {
        status: 'قيد المعالجة',
        date: '15 أكتوبر 2023',
        details: 'مؤسسة الجودة التجارية',
        name: 'فاطمة علي',
        email: 'fatima@example.com',
        bgColor: 'bg-linear-to-b from-green-400 to-green-800',
    },
    {
        status: 'جديد',
        date: '14 أكتوبر 2023',
        details: 'متجر المواد الغذائية',
        name: 'محمد سالم',
        email: 'mohammad@example.com',
        bgColor: 'bg-linear-to-b from-orange-400 to-orange-800',
    },
    {
        status: 'مكتمل',
        date: '14 أكتوبر 2023',
        details: 'شركة الإلكترونيات',
        name: 'سارة عبدالله',
        email: 'sara@example.com',
        bgColor: 'bg-linear-to-b from-pink-400 to-pink-800',
    },
];

const getStatusClasses = (status: OrderItem['status']) => {
    switch (status) {
        case 'مكتمل':
            return 'bg-green-100 text-green-700';
        case 'قيد المعالجة':
            return 'bg-yellow-100 text-yellow-700';
        case 'جديد':
            return 'bg-blue-100 text-blue-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};
const getStatusDot = (status: OrderItem['status']) => {
    switch (status) {
        case 'مكتمل':
            return 'bg-green-700 ';
        case 'قيد المعالجة':
            return 'bg-yellow-700 ';
        case 'جديد':
            return 'bg-blue-700 ';
        default:
            return 'bg-gray-700 ';
    }
};

const RecentOrdersTable: React.FC = () => {
    const TableRowClassname = 'px-4 py-3 text-sm font-semibold text-gray-500';
    const handleFirstLetters = (name: string) => {
        const initials = name
            .split(' ')
            .map((word) => word[0])
            .join('');
        return initials;
    };
    return (
        <div className="rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-right text-xl font-bold text-gray-900">
                آخر الطلبات والمعاملات
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-right">
                    <thead>
                        <tr className="border-b border-gray-200">
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
                                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                            >
                                <td className="flex items-center justify-start gap-4 px-4 py-4 text-sm">
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl font-bold text-white ${order.bgColor}`}
                                    >
                                        <div>
                                            {handleFirstLetters(order.name)}
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-medium text-gray-800">
                                            {order.name}
                                        </p>
                                        <p className="text-gray-500">
                                            {order.email}
                                        </p>
                                    </div>
                                </td>

                                <td className="px-4 py-4 text-sm font-medium text-gray-800">
                                    {order.details}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-600">
                                    {order.date}
                                </td>
                                <td className="px-4 py-4 text-sm">
                                    <div
                                        className={`inline-flex items-center justify-center gap-2 rounded-lg p-2 text-xs font-medium ${getStatusClasses(order.status)}`}
                                    >
                                        <div
                                            className={`h-2 w-2 rounded-full ${getStatusDot(order.status)} `}
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
