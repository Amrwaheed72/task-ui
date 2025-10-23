import React from 'react';
import { IoAdd, IoDocumentText, IoDownload } from 'react-icons/io5';

// You can define a type for a single action if needed, though for simple buttons it might be overkill
// interface QuickActionProps {
//   icon: React.ReactElement;
//   label: string;
//   bgColorClass: string; // e.g., 'bg-blue-500'
//   textColorClass: string; // e.g., 'text-white'
// }

const QuickActions: React.FC = () => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-right text-xl font-bold text-gray-900">
                أجراءات سريعة
            </h2>
            <div className="flex flex-col gap-4">
                <button
                    type="button"
                    className="flex cursor-pointer items-center justify-start gap-3 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 px-4 py-3 text-white transition-shadow hover:shadow-lg"
                >
                    <div className="rounded-lg bg-white/20 p-2">
                        <IoAdd className="text-2xl" />
                    </div>
                    <span className="text-base font-medium">
                        إضافة مورد جديد
                    </span>
                </button>

                <button
                    type="button"
                    className="flex cursor-pointer items-center justify-start gap-3 rounded-lg border border-blue-600 bg-blue-50 px-4 py-3 text-blue-600 transition-colors hover:bg-blue-100"
                >
                    <div className="rounded-lg bg-blue-200 p-2">
                        <IoDocumentText className="text-2xl" />
                    </div>
                    <span className="text-base font-medium">
                        إضافة طلب جديد
                    </span>
                </button>

                <button
                    type="button"
                    className="flex cursor-pointer items-center justify-start gap-3 rounded-lg border border-green-600 bg-green-50 px-4 py-3 text-green-700 transition-colors hover:bg-green-100"
                >
                    <div className="rounded-lg bg-green-200 p-2">
                        <IoDownload className="text-2xl" />
                    </div>
                    <span className="text-base font-medium">تحميل الأشمات</span>
                </button>
            </div>
        </div>
    );
};

export default QuickActions;
