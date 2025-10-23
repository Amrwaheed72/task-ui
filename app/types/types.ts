export interface Stat {
    badgeColor: string;
    icon: React.ReactNode;
    title: string;
    mainValue: string;
    subtitle: string;
}

export interface PerformanceMetric {
    label: string;
    value: number;
    colorClass: string;
}
export interface OrderItem {
    status: 'مكتمل' | 'قيد المعالجة' | 'جديد';
    date: string;
    details: string;
    name: string;
    email: string;
    bgColor: string;
}
export interface ActivityItem {
    icon: React.ReactElement<{ className?: string }>;
    text: string;
    time: string;
    iconBgClass: string;
    iconColorClass: string;
}
