import React from 'react';
import { PerformanceMetric } from '../types/types'; 

interface MonthlyPerformanceProps {
    performanceData: PerformanceMetric[];
}

const MonthlyPerformance: React.FC<MonthlyPerformanceProps> = ({
    performanceData,
}) => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
            <h2 className="mb-6 text-right text-xl font-bold text-gray-900 dark:text-gray-100">
                الأداء الشهري 
            </h2>
            <div className="flex flex-col gap-6">
                {performanceData.map((metric, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start gap-2"
                    >
                        <div className="flex w-full justify-between">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {metric.label}
                            </p>
                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {metric.value}%
                            </p>
                        </div>
                        <div
                            className="relative w-full rounded-full bg-gray-200 dark:bg-gray-700"
                            style={{ height: '8px' }}
                        >
                            <div
                                className={`absolute top-0 right-0 h-full rounded-full ${metric.colorClass}`}
                                style={{ width: `${metric.value}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonthlyPerformance;
