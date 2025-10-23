'use client';

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Info, X, Trash2 } from 'lucide-react';

const UploadDialog = ({
    children,
    open,
}: {
    children: React.ReactNode;
    open: boolean;
}) => {
    const [pasteData, setPasteData] = useState('');

    const placeholderText = `... الصق البيانات من Excel هنا

مثال:
ELEC-001    أجهزة إلكترونية    الكترونيات
FURN-001    أثاث منزلي        أثاث`;

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            {open && (
                <DialogContent
                    className="overflow-hidden p-0 sm:max-w-[800px]"
                    dir="rtl"
                >
                    <div className="relative flex items-center justify-center bg-linear-to-l from-green-500 to-emerald-600 px-6 py-4 text-white">
                        <h2 className="text-center text-xl font-bold">
                            تحميل الأصناف
                        </h2>
                        <DialogClose asChild>
                            <button
                                title="Close"
                                aria-label="Close"
                                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-1 text-white/80 transition-opacity hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/50 focus:outline-none"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </DialogClose>
                    </div>

                    <div className="space-y-6 p-6">
                        <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-800 dark:border-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                            <Info size={20} className="mt-0.5 shrink-0" />
                            <div>
                                <h3 className="mb-1 font-semibold">
                                    كيفية الاستخدام:
                                </h3>
                                <ol className="list-inside list-decimal space-y-1 text-sm">
                                    <li>انسخ الأصناف من جدول Excel.</li>
                                    <li>قم بلصقها داخل المستطيل الأخضر.</li>
                                    <li>اضغط على زر معالجة البيانات.</li>
                                </ol>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="paste-area"
                                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                الصق البيانات من Excel هنا:
                            </label>
                            <textarea
                                id="paste-area"
                                placeholder={placeholderText}
                                value={pasteData}
                                onChange={(e) => setPasteData(e.target.value)}
                                rows={8}
                                className="min-h-[200px] w-full resize-none rounded-md border-2 border-green-300 bg-green-50/50 p-3 font-mono text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none dark:border-green-700 dark:bg-green-900/20 dark:text-gray-300 dark:placeholder-gray-500"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800">
                        <div>
                            <button
                                type="button"
                                onClick={() => setPasteData('')}
                                className="flex items-center justify-center gap-2 rounded-md border border-red-500 bg-transparent px-4 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none dark:hover:bg-red-900/30 dark:focus:ring-offset-gray-800"
                            >
                                <Trash2 size={16} />
                                مسح البيانات
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <DialogClose asChild>
                                <button
                                    type="button"
                                    className="focus:ring-ring rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                                >
                                    إلغاء
                                </button>
                            </DialogClose>
                            <button
                                type="button"
                                className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-gray-800"
                                onClick={() =>
                                    console.log('Processing data:', pasteData)
                                }
                                disabled={!pasteData.trim()}
                            >
                                معالجة البيانات
                            </button>
                        </div>
                    </div>
                </DialogContent>
            )}
        </Dialog>
    );
};

export default UploadDialog;
