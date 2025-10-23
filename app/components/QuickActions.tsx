import React, { useState } from 'react';
import { QuickActionItem } from '../types/types';
import { cn } from '../../lib/utils';
import dynamic from 'next/dynamic';
const UploadDialog = dynamic(() => import('./UploadDialog'));
interface QuickActionsProps {
    actions: QuickActionItem[];
}
const getButtonClasses = (style: string, color: string) => {
    if (style === 'gradient') {
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm hover:shadow-lg';
    }
    switch (color) {
        case 'blue':
            return 'border border-blue-600 bg-blue-50 text-blue-600 hover:bg-blue-100 dark:border-blue-500 dark:bg-blue-900/50 dark:text-blue-400 dark:hover:bg-blue-900';
        case 'green':
            return 'border border-green-600 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-500 dark:bg-green-900/50 dark:text-green-400 dark:hover:bg-green-900';
        case 'red':
            return 'border border-red-600 bg-red-50 text-red-700 hover:bg-red-100 dark:border-red-500 dark:bg-red-900/50 dark:text-red-400 dark:hover:bg-red-900';
        default:
            return 'border border-gray-600 bg-gray-50 text-gray-700 hover:bg-gray-100 dark:border-gray-500 dark:bg-gray-900/50 dark:text-gray-400 dark:hover:bg-gray-900';
    }
};

const getIconWrapperClasses = (style: string, color: string) => {
    if (style === 'gradient') {
        return 'bg-white/20';
    }
    switch (color) {
        case 'blue':
            return 'bg-blue-200/70 dark:bg-blue-800/50';
        case 'green':
            return 'bg-green-200/70 dark:bg-green-800/50';
        case 'red':
            return 'bg-red-200/70 dark:bg-red-800/50';
        default:
            return 'bg-gray-200/70 dark:bg-gray-800/50';
    }
};
const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (label: string) => {
        if (label === 'تحميل الاصناف') setOpen(true);
    };
    return (
        <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
            <h2 className="mb-6 text-right text-xl font-bold text-gray-900 dark:text-gray-100">
                أجراءات سريعة
            </h2>
            <div className="flex flex-col gap-4">
                {actions.map((action, index) => (
                    <UploadDialog key={index} open={open}>
                        <button
                            onClick={() => handleShowDialog(action.text)}
                            type="button"
                            className={cn(
                                'flex cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 transition-shadow',
                                getButtonClasses(action.style, action.color),
                            )}
                        >
                            <div
                                className={cn(
                                    'rounded-lg p-2',
                                    getIconWrapperClasses(
                                        action.style,
                                        action.color,
                                    ),
                                )}
                            >
                                {React.cloneElement(
                                    action.icon as React.ReactElement<
                                        React.SVGProps<SVGSVGElement>
                                    >,
                                    { className: 'text-xl' },
                                )}
                            </div>
                            <span className="text-base font-medium">
                                {action.text}
                            </span>
                        </button>
                    </UploadDialog>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
