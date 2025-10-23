import React from 'react';

interface PerformanceMetric {
    label: string;
    value: number;
    colorClass: string;
}

const monthlyPerformanceData: PerformanceMetric[] = [
    {
        label: 'معدل الموافقة على الطلبات',
        value: 94.5,
        colorClass: 'bg-blue-600',
    },
    { label: 'نقطة الموردين', value: 87.5, colorClass: 'bg-green-600' },
    { label: 'رضا العملاء', value: 94, colorClass: 'bg-yellow-500' },
    { label: 'معدل اكتمال الطلبات', value: 91.2, colorClass: 'bg-purple-600' },
];

const MonthlyPerformance: React.FC = () => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-right text-xl font-bold text-gray-900">
                الأداء الشهري
            </h2>
            <div className="flex flex-col gap-6">
                {monthlyPerformanceData.map((metric, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start gap-2"
                    >
                        <div className="flex w-full justify-between">
                            <p className="text-sm font-medium text-gray-700">
                                {metric.label}
                            </p>
                            <p className="text-xs font-semibold text-gray-600">
                                {metric.value}%
                            </p>
                        </div>
                        <div
                            className="relative w-full rounded-full bg-gray-200"
                            style={{ height: '10px' }}
                        >
                            <div
                                className={`absolute top-0 right-0 h-full rounded-full ${metric.colorClass}`} // Changed to right-0
                                style={{ width: `${metric.value}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonthlyPerformance;
