'use client';
import { usePersonState } from '../store/PersonStore';

const PageTitle = () => {
    const { person } = usePersonState();
    return (
        <div className="flex flex-col gap-2 mb-8">
            <p className="text-4xl font-bold">لوحة التحكم - {person} </p>
            <p className="text-lg text-gray-500">
                إدارة شاملة للمنصة والإشراف على جميع العمليات
            </p>
        </div>
    );
};

export default PageTitle;
