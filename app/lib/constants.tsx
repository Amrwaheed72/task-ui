import { AiOutlineSafety } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { CiShoppingTag } from 'react-icons/ci';
import {
    IoBagOutline,
    IoCheckmarkCircle,
    IoGiftOutline,
    IoNewspaper,
    IoPeople,
    IoPersonAdd,
    IoPersonOutline,
    IoRefresh,
    IoWarning,
} from 'react-icons/io5';
import { LuNotebookText } from 'react-icons/lu';
import { MdOutlineShoppingCart, MdPeopleOutline } from 'react-icons/md';
import { PiHouse } from 'react-icons/pi';
import { TbClockCheck } from 'react-icons/tb';
import {
    ActivityItem,
    OrderItem,
    PerformanceMetric,
    Stat,
} from '../types/types';

export const navLinks = [
    {
        label: 'لوحة التحكم',
        logo: <PiHouse />,
        link: 'home',
    },
    {
        label: 'الموردين',
        logo: <IoBagOutline />,
        link: 'agents',
    },
    {
        label: 'العملاء',
        logo: <MdPeopleOutline />,
        link: 'clients',
    },
    {
        label: 'الطلبات',
        logo: <LuNotebookText />,
        link: 'orders',
    },
];

export const searchLinks = [
    {
        label: 'الموردين',
        logo: <IoBagOutline />,
        link: '#',
        description: 'البحث عن موردين',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        label: 'الاصناف',
        logo: <CiShoppingTag />,
        link: '#',
        description: 'تصنيفات المنتجات',
        color: 'text-purple-700',
        bgColor: 'bg-purple-50',
    },
    {
        label: 'التعريف',
        logo: <CgNotes />,
        link: '#',
        description: 'ملفات التعريف',
        color: 'text-green-700',
        bgColor: 'bg-green-50',
    },
    {
        label: 'طلب الشراء',
        logo: <MdOutlineShoppingCart />,
        link: '#',
        description: 'طلبات الشراء',
        color: 'text-orange-700',
        bgColor: 'bg-orange-50',
    },
    {
        label: 'العروض',
        logo: <IoGiftOutline />,
        link: '#',
        description: 'العروض والخصومات',
        color: 'text-pink-700',
        bgColor: 'bg-pink-50',
    },
];

export const selectOptions = [
    {
        label: 'المدير',
        icon: <AiOutlineSafety />,
        color: 'text-blue-600',
    },
    {
        label: 'المورد',
        icon: <IoBagOutline />,
        color: 'text-purple-700',
    },
    {
        label: 'العميل',
        icon: <IoPersonOutline />,
        color: 'text-green-700',
    },
];

export const CardStats: Stat[] = [
    {
        badgeColor: 'bg-blue-600',
        icon: <IoBagOutline className="text-3xl text-white" />,
        title: 'إجمالي الموردين',
        mainValue: '48',
        subtitle: '+5 هذا الشهر',
    },
    {
        badgeColor: 'bg-purple-600',
        icon: <IoPeople className="text-3xl text-white" />,
        title: 'إجمالي العملاء',
        mainValue: '127',
        subtitle: '12 طلب معلّق',
    },
    {
        badgeColor: 'bg-green-600',
        icon: <LuNotebookText className="text-3xl text-white" />,
        title: 'إجمالي الطلبات',
        mainValue: '342',
        subtitle: '+28 هذا الأسبوع',
    },
    {
        badgeColor: 'bg-orange-600',
        icon: <TbClockCheck className="text-3xl text-white" />,
        title: 'معدل النجاح',
        mainValue: '94.5%',
        subtitle: '323 طلب مكتمل',
    },
];

export const monthlyPerformanceData: PerformanceMetric[] = [
    {
        label: 'معدل الموافقة على الطلبات',
        value: 94.5,
        colorClass: 'bg-blue-600',
    },
    { label: 'نقطة الموردين', value: 87.5, colorClass: 'bg-green-600' },
    { label: 'رضا العملاء', value: 94, colorClass: 'bg-yellow-500' },
    { label: 'معدل اكتمال الطلبات', value: 91.2, colorClass: 'bg-purple-600' },
];

export const recentOrders: OrderItem[] = [
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
export const colorMap: {
    [key: string]: { bg: string; text: string };
} = {
    orange: {
        bg: 'bg-orange-100 dark:bg-orange-900/50',
        text: 'text-orange-600 dark:text-orange-400',
    },
    green: {
        bg: 'bg-green-100 dark:bg-green-900/50',
        text: 'text-green-600 dark:text-green-400',
    },
    purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/50',
        text: 'text-purple-600 dark:text-purple-400',
    },
    blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/50',
        text: 'text-blue-600 dark:text-blue-400',
    },
};
export const recentActivities: ActivityItem[] = [
    {
        icon: <IoPersonAdd />,
        iconBgClass: 'bg-blue-100', // Removed dark:bg-blue-900/50
        iconColorClass: 'text-blue-600', // Removed dark:text-blue-400
        text: 'طلب جديد من العميل أحمد محمد',
        time: 'منذ 5 دقائق',
    },
    {
        icon: <IoCheckmarkCircle />,
        iconBgClass: 'bg-green-100', // Removed dark:bg-green-900/50
        iconColorClass: 'text-green-600', // Removed dark:text-green-400
        text: 'تم الموافقة على مورد جديد',
        time: 'منذ 15 دقيقة',
    },
    {
        icon: <IoWarning />,
        iconBgClass: 'bg-yellow-100', // Removed dark:bg-yellow-900/50
        iconColorClass: 'text-yellow-600', // Removed dark:text-yellow-400
        text: 'طلب معلق يحتاج مراجعة',
        time: 'منذ 30 دقيقة',
    },
    {
        icon: <IoNewspaper />,
        iconBgClass: 'bg-indigo-100', // Removed dark:bg-indigo-900/50
        iconColorClass: 'text-indigo-600', // Removed dark:text-indigo-400
        text: 'تم إكمال طلب بنجاح',
        time: 'منذ ساعتين',
    },
    {
        icon: <IoRefresh />,
        iconBgClass: 'bg-purple-100', // Removed dark:bg-purple-900/50
        iconColorClass: 'text-purple-600', // Removed dark:text-purple-400
        text: 'تقديم إعدادس من عميل',
        time: 'منذ ساعتين',
    },
];
