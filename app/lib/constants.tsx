import { AiOutlineSafety } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { CiSettings, CiShoppingTag } from 'react-icons/ci';
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
    IoDocumentText,
    IoStar,
    IoAdd,
    IoDownload, // Added missing import
} from 'react-icons/io5'; // Standardized to io5
import { LuClipboard, LuFileSymlink, LuNotebookText, LuUser } from 'react-icons/lu';
import { MdOutlineShoppingCart, MdPeopleOutline } from 'react-icons/md';
import { PiHouse } from 'react-icons/pi';
import { TbClockCheck } from 'react-icons/tb';
import {
    ActivityItem,
    OrderItem,
    PerformanceMetric,
    QuickActionItem,
    Stat,
} from '../types/types';

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
        color: 'text-blue-600 dark:text-blue-400', // Added dark mode
        bgColor: 'bg-blue-100 dark:bg-blue-900/50', // Added dark mode
    },
    {
        label: 'الاصناف',
        logo: <CiShoppingTag />,
        link: '#',
        description: 'تصنيفات المنتجات',
        color: 'text-purple-700 dark:text-purple-400', // Added dark mode
        bgColor: 'bg-purple-100 dark:bg-purple-900/50', // Added dark mode
    },
    {
        label: 'التعريف',
        logo: <CgNotes />,
        link: '#',
        description: 'ملفات التعريف',
        color: 'text-green-700 dark:text-green-400', // Added dark mode
        bgColor: 'bg-green-100 dark:bg-green-900/50', // Added dark mode
    },
    {
        label: 'طلب الشراء',
        logo: <MdOutlineShoppingCart />,
        link: '#',
        description: 'طلبات الشراء',
        color: 'text-orange-700 dark:text-orange-400', // Added dark mode
        bgColor: 'bg-orange-100 dark:bg-orange-900/50', // Added dark mode
    },
    {
        label: 'العروض',
        logo: <IoGiftOutline />,
        link: '#',
        description: 'العروض والخصومات',
        color: 'text-pink-700 dark:text-pink-400', // Added dark mode
        bgColor: 'bg-pink-100 dark:bg-pink-900/50', // Added dark mode
    },
];

export const selectOptions = [
    {
        label: 'المدير',
        icon: <AiOutlineSafety />,
        color: 'text-blue-600 dark:text-blue-400', // Added dark mode
    },
    {
        label: 'المورد',
        icon: <IoBagOutline />,
        color: 'text-purple-700 dark:text-purple-400', // Added dark mode
    },
    {
        label: 'العميل',
        icon: <IoPersonOutline />,
        color: 'text-green-700 dark:text-green-400', // Added dark mode
    },
];

export const managerCardStats: Stat[] = [
    {
        badgeColor: 'blue', // Match colorMap keys
        icon: <IoBagOutline />,
        title: 'إجمالي الموردين',
        mainValue: '48',
        subtitle: '+5 هذا الشهر',
    },
    {
        badgeColor: 'purple',
        icon: <IoPeople />,
        title: 'إجمالي العملاء',
        mainValue: '127',
        subtitle: '12 طلب معلّق',
    },
    {
        badgeColor: 'green',
        icon: <LuNotebookText />,
        title: 'إجمالي الطلبات',
        mainValue: '342',
        subtitle: '+28 هذا الأسبوع',
    },
    {
        badgeColor: 'orange',
        icon: <TbClockCheck />,
        title: 'معدل النجاح',
        mainValue: '94.5%',
        subtitle: '323 طلب مكتمل',
    },
];

export const managerMonthlyPerformanceData: PerformanceMetric[] = [
    {
        label: 'معدل الموافقة على الطلبات',
        value: 94.5,
        colorClass: 'bg-blue-600',
    },
    { label: 'نقطة الموردين', value: 87.5, colorClass: 'bg-green-600' },
    { label: 'رضا العملاء', value: 94, colorClass: 'bg-yellow-500' },
    { label: 'معدل اكتمال الطلبات', value: 91.2, colorClass: 'bg-purple-600' },
];

export const managerRecentOrders: OrderItem[] = [
    {
        status: 'مكتمل',
        date: '15 أكتوبر 2025',
        details: 'شركة الموردات المتقدمة',
        name: 'أحمد محمد',
        email: 'ahmad@example.com',
        bgColor: 'bg-gradient-to-b from-blue-400 to-blue-800',
    },
    {
        status: 'قيد المعالجة',
        date: '15 أكتوبر 2025',
        details: 'مؤسسة الجودة التجارية',
        name: 'فاطمة علي',
        email: 'fatima@example.com',
        bgColor: 'bg-gradient-to-b from-green-400 to-green-800',
    },
    {
        status: 'جديد',
        date: '14 أكتوبر 2025',
        details: 'متجر المواد الغذائية',
        name: 'محمد سالم',
        email: 'mohammad@example.com',
        bgColor: 'bg-gradient-to-b from-orange-400 to-orange-800',
    },
    {
        status: 'مكتمل',
        date: '14 أكتوبر 2025',
        details: 'شركة الإلكترونيات',
        name: 'سارة عبدالله',
        email: 'sara@example.com',
        bgColor: 'bg-gradient-to-b from-pink-400 to-pink-800',
    },
];

export const managerRecentActivities: ActivityItem[] = [
    {
        icon: <IoPersonAdd />,
        iconBgClass: 'bg-blue-100 dark:bg-blue-900/50',
        iconColorClass: 'text-blue-600 dark:text-blue-400',
        text: 'طلب جديد من العميل أحمد محمد',
        time: 'منذ 5 دقائق',
    },
    {
        icon: <IoCheckmarkCircle />,
        iconBgClass: 'bg-green-100 dark:bg-green-900/50',
        iconColorClass: 'text-green-600 dark:text-green-400',
        text: 'تم الموافقة على مورد جديد',
        time: 'منذ 15 دقيقة',
    },
    {
        icon: <IoWarning />,
        iconBgClass: 'bg-yellow-100 dark:bg-yellow-900/50',
        iconColorClass: 'text-yellow-600 dark:text-yellow-400',
        text: 'طلب معلق يحتاج مراجعة',
        time: 'منذ 30 دقيقة',
    },
    {
        icon: <IoNewspaper />,
        iconBgClass: 'bg-indigo-100 dark:bg-indigo-900/50',
        iconColorClass: 'text-indigo-600 dark:text-indigo-400',
        text: 'تم إكمال طلب بنجاح',
        time: 'منذ ساعتين',
    },
    {
        icon: <IoRefresh />,
        iconBgClass: 'bg-purple-100 dark:bg-purple-900/50',
        iconColorClass: 'text-purple-600 dark:text-purple-400',
        text: 'تقديم إعدادس من عميل',
        time: 'منذ ساعتين',
    }, // Corrected dark mode classes based on previous fix
];

export const managerQuickActions: QuickActionItem[] = [
    {
        text: 'إضافة مورد جديد',
        icon: <IoAdd />,
        style: 'gradient',
        color: 'blue-purple',
    },
    {
        text: 'إضافة طلب جديد',
        icon: <IoDocumentText />,
        style: 'outline',
        color: 'blue',
    },
    {
        text: 'تحميل الأشمات',
        icon: <IoDownload />,
        style: 'outline',
        color: 'green',
    },
];

// --- Data for المورد (Supplier) ---
// (Sample data based on image_9e01e1.png)
export const supplierCardStats: Stat[] = [
    {
        badgeColor: 'blue',
        icon: <LuNotebookText />,
        title: 'الطلبات النشطة',
        mainValue: '23',
        subtitle: 'قيد التنفيذ',
    },
    {
        badgeColor: 'purple',
        icon: <IoCheckmarkCircle />,
        title: 'الطلبات المكتملة',
        mainValue: '156',
        subtitle: '12 منتج معلق',
    }, // Adjusted subtitle based on image
    {
        badgeColor: 'green',
        icon: <CiShoppingTag />,
        title: 'إجمالي الأرباح الشهرية',
        mainValue: '45,280',
        subtitle: 'ريال سعودي',
    },
    {
        badgeColor: 'orange',
        icon: <IoStar />,
        title: 'التقييم',
        mainValue: '4.8',
        subtitle: 'من 87 تقييم',
    }, // Assumed icon
];

export const supplierMonthlyPerformanceData: PerformanceMetric[] = [
    { label: 'معدل قبول الطلبات', value: 92, colorClass: 'bg-blue-600' }, // Sample values
    { label: 'التقييم في الوقت المحدد', value: 81, colorClass: 'bg-green-600' },
    { label: 'رضا العملاء', value: 96, colorClass: 'bg-yellow-500' },
    { label: 'جودة المنتجات', value: 94, colorClass: 'bg-purple-600' },
];

export const supplierRecentOrders: OrderItem[] = [
    // Sample data structure matching image
    {
        status: 'قيد التحضير',
        date: '15 أكتوبر 2025',
        details: 'أجهزة الكترونية - 5 وحدات',
        name: 'أحمد محمد',
        email: 'العميل',
        bgColor: 'bg-gradient-to-b from-blue-400 to-blue-800',
    },
    {
        status: 'تم التسليم',
        date: '15 أكتوبر 2025',
        details: 'مواد غذائية - 20 صنف',
        name: 'فاطمة علي',
        email: 'العميل',
        bgColor: 'bg-gradient-to-b from-green-400 to-green-800',
    },
    {
        status: 'قيد التحضير',
        date: '14 أكتوبر 2025',
        details: 'أثاث مكتبي - 3 وحدات',
        name: 'محمد سالم',
        email: 'العميل',
        bgColor: 'bg-gradient-to-b from-orange-400 to-orange-800',
    },
    {
        status: 'تم التسليم',
        date: '14 أكتوبر 2025',
        details: 'أدوات كهربائية - 10 قطع',
        name: 'سارة عبدالله',
        email: 'العميل',
        bgColor: 'bg-gradient-to-b from-pink-400 to-pink-800',
    },
];

export const supplierRecentActivities: ActivityItem[] = [
    // Sample data
    {
        icon: <LuClipboard />,
        iconBgClass: 'bg-blue-100 dark:bg-blue-900/50',
        iconColorClass: 'text-blue-600 dark:text-blue-400',
        text: 'طلب جديد من أحمد محمد',
        time: 'منذ 15 دقيقة',
    },
    {
        icon: <IoCheckmarkCircle />,
        iconBgClass: 'bg-green-100 dark:bg-green-900/50',
        iconColorClass: 'text-green-600 dark:text-green-400',
        text: 'تم استلام طلب بنجاح',
        time: 'منذ 45 دقيقة',
    },
    {
        icon: <LuUser />,
        iconBgClass: 'bg-purple-100 dark:bg-purple-900/50',
        iconColorClass: 'text-purple-600 dark:text-purple-400',
        text: 'تقييم 5 نجوم من عميل',
        time: 'منذ ساعة',
    },
    {
        icon: <IoNewspaper />,
        iconBgClass: 'bg-indigo-100 dark:bg-indigo-900/50',
        iconColorClass: 'text-indigo-600 dark:text-indigo-400',
        text: 'تحديث لمخزون مطلوب',
        time: 'منذ ساعتين',
    },
    {
        icon: <IoPersonAdd />,
        iconBgClass: 'bg-orange-100 dark:bg-orange-900/50',
        iconColorClass: 'text-orange-600 dark:text-orange-400',
        text: 'استفسار من عميل جديد',
        time: 'منذ 3 ساعات',
    },
];

export const supplierQuickActions: QuickActionItem[] = [
    {
        text: 'إضافة منتج جديد',
        icon: <IoAdd />,
        style: 'gradient',
        color: 'blue-purple',
    },
    {
        text: 'عرض الطلبات الجديدة',
        icon: <LuFileSymlink />,
        style: 'outline',
        color: 'blue',
    }, // Choose appropriate icons
    {
        text: 'إدارة المخزون',
        icon: <CiSettings />,
        style: 'outline',
        color: 'green',
    },
];

// --- Data for العميل (Client) ---
// (Sample data based on image_9e017b.png)
export const clientCardStats: Stat[] = [
    {
        badgeColor: 'blue',
        icon: <LuNotebookText />,
        title: 'طلباتي النشطة',
        mainValue: '8',
        subtitle: 'قيد التنفيذ',
    },
    {
        badgeColor: 'purple',
        icon: <IoCheckmarkCircle />,
        title: 'الطلبات المكتملة',
        mainValue: '42',
        subtitle: 'هذا الشهر',
    },
    {
        badgeColor: 'green',
        icon: <IoBagOutline />,
        title: 'الموردين المفضلين',
        mainValue: '12',
        subtitle: 'مورد مفضل',
    }, // Adjusted text
    {
        badgeColor: 'orange',
        icon: <CiShoppingTag />,
        title: 'إجمالي المصروفات',
        mainValue: '12,450',
        subtitle: 'ريال سعودي',
    },
];

export const clientMonthlyPerformanceData: PerformanceMetric[] = [
    // Sample data for client view
    { label: 'الطلبات المكتملة', value: 95, colorClass: 'bg-blue-600' },
    { label: 'التقييمات المستلمة', value: 78, colorClass: 'bg-green-600' },
    { label: 'الموردين الموثوقين', value: 85, colorClass: 'bg-yellow-500' },
    { label: 'معدل تكرار الطلب', value: 68, colorClass: 'bg-purple-600' },
];

export const clientRecentOrders: OrderItem[] = [
    // Sample data structure matching image
    {
        status: 'قيد التوصيل',
        date: '15 أكتوبر 2025',
        details: 'أجهزة الكترونية - 3 وحدات',
        name: 'شركة الموردات المتقدمة',
        email: 'المورد',
        bgColor: 'bg-gradient-to-b from-blue-400 to-blue-800',
    },
    {
        status: 'تم التسليم',
        date: '15 أكتوبر 2025',
        details: 'مستلزمات مكتبية',
        name: 'مؤسسة الجودة التجارية',
        email: 'المورد',
        bgColor: 'bg-gradient-to-b from-green-400 to-green-800',
    },
    {
        status: 'قيد المراجعة',
        date: '14 أكتوبر 2025',
        details: 'مواد غذائية متنوعة',
        name: 'متجر المواد الغذائية',
        email: 'المورد',
        bgColor: 'bg-gradient-to-b from-orange-400 to-orange-800',
    },
    {
        status: 'تم التسليم',
        date: '14 أكتوبر 2025',
        details: 'هواتف ذكية - 2 وحدة',
        name: 'شركة الإلكترونيات الحديثة',
        email: 'المورد',
        bgColor: 'bg-gradient-to-b from-pink-400 to-pink-800',
    },
];

export const clientRecentActivities: ActivityItem[] = [
    // Sample data
    {
        icon: <IoCheckmarkCircle />,
        iconBgClass: 'bg-green-100 dark:bg-green-900/50',
        iconColorClass: 'text-green-600 dark:text-green-400',
        text: 'تم قبول طلبك من المورد',
        time: 'منذ 5 دقائق',
    },
    {
        icon: <IoRefresh />,
        iconBgClass: 'bg-blue-100 dark:bg-blue-900/50',
        iconColorClass: 'text-blue-600 dark:text-blue-400',
        text: 'الطلب قيد التوصيل',
        time: 'منذ 15 دقيقة',
    },
    {
        icon: <IoNewspaper />,
        iconBgClass: 'bg-indigo-100 dark:bg-indigo-900/50',
        iconColorClass: 'text-indigo-600 dark:text-indigo-400',
        text: 'تم تسليم طلبك بنجاح',
        time: 'منذ ساعة',
    },
    {
        icon: <IoWarning />,
        iconBgClass: 'bg-yellow-100 dark:bg-yellow-900/50',
        iconColorClass: 'text-yellow-600 dark:text-yellow-400',
        text: 'عرض جديد من مورد مفضل',
        time: 'منذ ساعتين',
    },
    {
        icon: <IoStar />,
        iconBgClass: 'bg-orange-100 dark:bg-orange-900/50',
        iconColorClass: 'text-orange-600 dark:text-orange-400',
        text: 'تذكير لتقييم الطلب السابق',
        time: 'منذ 3 ساعات',
    }, // Assumed icon
];

export const clientQuickActions: QuickActionItem[] = [
    {
        text: 'طلب جديد',
        icon: <IoAdd />,
        style: 'gradient',
        color: 'blue-purple',
    },
    {
        text: 'تتبع الشحنات',
        icon: <LuFileSymlink />,
        style: 'outline',
        color: 'blue',
    },
    { text: 'السداد', icon: <CiSettings />, style: 'outline', color: 'red' }, // Changed color example
];

// --- Combined Data Map ---
export const dashboardData = {
    المدير: {
        cardStats: managerCardStats,
        monthlyPerformance: managerMonthlyPerformanceData,
        recentOrders: managerRecentOrders,
        recentActivities: managerRecentActivities,
        quickActions: managerQuickActions,
    },
    المورد: {
        cardStats: supplierCardStats,
        monthlyPerformance: supplierMonthlyPerformanceData,
        recentOrders: supplierRecentOrders,
        recentActivities: supplierRecentActivities,
        quickActions: supplierQuickActions,
    },
    العميل: {
        cardStats: clientCardStats,
        monthlyPerformance: clientMonthlyPerformanceData,
        recentOrders: clientRecentOrders,
        recentActivities: clientRecentActivities,
        quickActions: clientQuickActions,
    },
};
