import React from 'react';
import { IoAdd, IoDocumentText, IoDownload } from 'react-icons/io5';

const QuickActions: React.FC = () => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
            <h2 className="mb-6 text-right text-xl font-bold text-gray-900 dark:text-gray-100">
                أجراءات سريعة
            </h2>
            <div className="flex flex-col gap-4">
                <button
                    type="button"
                    className="flex cursor-pointer items-center justify-start gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-white shadow-sm transition-shadow hover:shadow-lg"
                >
                    <div className="rounded-lg bg-white/20 p-2">
                        <IoAdd className="text-xl" />
                    </div>
                    <span className="text-base font-medium">
                        إضافة مورد جديد
                    </span>
                </button>

                <button
                    type="button"
                    className="flex cursor-pointer items-center justify-start gap-3 rounded-lg border border-blue-600 bg-blue-50 px-4 py-3 text-blue-600 transition-colors hover:bg-blue-100 dark:border-blue-500 dark:bg-blue-900/50 dark:text-blue-400 dark:hover:bg-blue-900"
                >
                    <div className="rounded-lg bg-blue-200/70 p-2 dark:bg-blue-800/50">
                        <IoDocumentText className="text-xl" />
                    </div>
                    <span className="text-base font-medium">
                        إضافة طلب جديد
                    </span>
                </button>

                <button
                    type="button"
                    className="flex cursor-pointer items-center justify-start gap-3 rounded-lg border border-green-600 bg-green-50 px-4 py-3 text-green-700 transition-colors hover:bg-green-100 dark:border-green-500 dark:bg-green-900/50 dark:text-green-400 dark:hover:bg-green-900"
                >
                    <div className="rounded-lg bg-green-200/70 p-2 dark:bg-green-800/50">
                        <IoDownload className="text-xl" />
                    </div>
                    <span className="text-base font-medium">تحميل الأشمات</span>
                </button>
            </div>
        </div>
    );
};

export default QuickActions;
