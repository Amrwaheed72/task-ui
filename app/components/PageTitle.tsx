'use client';
import { usePersonState } from '../store/PersonStore';

const PageTitle = () => {
    const { person } = usePersonState();
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                لوحة التحكم - {person}
            </h1>
            <p className="text-md text-gray-600 dark:text-gray-400">
                إدارة شاملة للمنصة والإشراف على جميع العمليات
            </p>
        </div>
    );
};

export default PageTitle;
